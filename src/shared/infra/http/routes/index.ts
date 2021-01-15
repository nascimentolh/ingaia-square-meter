import { Router } from 'express';

import squareMeterRouter from "@modules/squareMeter/infra/http/routes/squareMeter.routes";

const routes = Router();

/**
 * @swagger
 *
 * definitions:
 *   SquareMeter:
 *       type: object
 *       properties:
 *          price:
 *            type: number
 *          example:
 *            min:
 *              value: 10
 *            max:
 *              value: 10000
 *   Simple:
 *     type: object
 *     properties:
 *       status:
 *         type: string
 *       message:
 *         type: string
 */
routes.use('/square-meter', squareMeterRouter);

export default routes;
