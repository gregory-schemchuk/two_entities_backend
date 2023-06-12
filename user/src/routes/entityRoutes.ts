import express, {NextFunction, Request, Response} from "express";
import {DependencyContainer} from "../infrastructure/lib/DependencyContainer";
import {UserController} from "../controller/UserController";

const router = express.Router();
const initController = async () => await new UserController(
    DependencyContainer.dependencyContainer.newUserService(),
    DependencyContainer.dependencyContainer.newUserQueryRepository(),
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

router.post('/user', create);
router.patch('/user', update);
router.delete('/user', deleteEntity);
router.get('/user', getList);
router.get('/user/:id', getById);
export default router;