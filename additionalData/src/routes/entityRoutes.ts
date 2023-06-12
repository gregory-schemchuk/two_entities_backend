import express, {NextFunction, Request, Response} from "express";
import {DependencyContainer} from "../infrastructure/lib/DependencyContainer";
import {AdditionalDataController} from "../controller/AdditionalDataController";
const router = express.Router();
const initController = async () => await new AdditionalDataController(
    DependencyContainer.dependencyContainer.newAdditionalDataService(),
    DependencyContainer.dependencyContainer.newAdditionalDataQueryRepository(),
);
async function create(req: Request, res: Response, next: NextFunction) {
    const controller = await initController();
    await controller.create(req, res, next);
}
async function update(req: Request, res: Response, next: NextFunction) {
    const controller = await initController();
    await controller.update(req, res, next);
}
async function deleteEntity(req: Request, res: Response, next: NextFunction) {
    const controller = await initController();
    await controller.deleteEntity(req, res, next);
}
async function getById(req: Request, res: Response, next: NextFunction) {
    const controller = await initController();
    await controller.getById(req, res, next);
}
async function getList(req: Request, res: Response, next: NextFunction) {
    const controller = await initController();
    await controller.getList(req, res, next);
}
router.post('/additionalData', create);
router.patch('/additionalData', update);
router.delete('/additionalData', deleteEntity);
router.get('/additionalData', getList);
router.get('/additionalData/:id', getById);
export default router;