import {NextFunction, Request, Response} from "express";
import {AdditionalDataService} from "../domain/service/AdditionalDataService";import {AdditionalDataQueryRepository} from "../repository/query/AdditionalDataQueryRepository";export class AdditionalDataController{private readonly additionalDataService: AdditionalDataService; private readonly additionalDataQueryRepository: AdditionalDataQueryRepository; constructor(additionalDataService: AdditionalDataService, additionalDataQueryRepository: AdditionalDataQueryRepository){ this.additionalDataService = additionalDataService; this.additionalDataQueryRepository = additionalDataQueryRepository; }async create(req: Request, res: Response, next: NextFunction) {
        try {
            await this.additionalDataService.create(req.body);
            res.status(200);
            res.json({msg: 'ok'});
        } catch (e) {
            next(e);
        }
    }
async update(req: Request, res: Response, next: NextFunction) {
        try {
            await this.additionalDataService.update(req.body);
            res.status(200);
            res.json({msg: 'ok'});
        } catch (e) {
            next(e);
        }
    }
async deleteEntity(req: Request, res: Response, next: NextFunction) {
        try {
            await this.additionalDataService.delete(req.params.id);
            res.status(200);
            res.json({msg: 'ok'});
        } catch (e) {
            next(e);
        }
    }
async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.additionalDataQueryRepository.getById(req.params.id);
            res.status(200);
            res.json(data);
        } catch (e) {
            next(e);
        }
    }
async getList(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.additionalDataQueryRepository.getList(Number(req.query.limit), Number(req.query.offset));
            res.status(200);
            res.json(data);
        } catch (e) {
            next(e);
        }
    }
}