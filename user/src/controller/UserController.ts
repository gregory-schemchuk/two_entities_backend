import {NextFunction, Request, Response} from "express";
import {UserService} from "../domain/service/UserService";
import {UserQueryRepository} from "../repository/query/UserQueryRepository";

export class UserController {
    private readonly userService: UserService;
    private readonly userQueryRepository: UserQueryRepository;

    constructor(userService: UserService, userQueryRepository: UserQueryRepository) {
        this.userService = userService;
        this.userQueryRepository = userQueryRepository;
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            await this.userService.create(req.body);
            res.status(200);
            res.json({msg: 'ok'});
        } catch (e) {
            next(e);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            await this.userService.update(req.body);
            res.status(200);
            res.json({msg: 'ok'});
        } catch (e) {
            next(e);
        }
    }

    async deleteEntity(req: Request, res: Response, next: NextFunction) {
        try {
            await this.userService.delete(req.params.id);
            res.status(200);
            res.json({msg: 'ok'});
        } catch (e) {
            next(e);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.userQueryRepository.getById(req.params.id);
            res.status(200);
            res.json(data);
        } catch (e) {
            next(e);
        }
    }

    async getList(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.userQueryRepository.getList(Number(req.query.limit), Number(req.query.offset));
            res.status(200);
            res.json(data);
        } catch (e) {
            next(e);
        }
    }
}