import { Router } from 'express';
import SquareMeterController from "@modules/squareMeter/infra/http/controllers/SquareMeterController";

const squareMeterRouter = Router();
const squareMeterController = new SquareMeterController();

squareMeterRouter.post('/', squareMeterController.index);

export default squareMeterRouter;
