import { Request, Response } from "express";
import { ShowSquareMeterPrice } from "@modules/squareMeter/services/ShowSquareMeterPrice";

export default class SquareMeterController {

  /**
   * @swagger
   *
   * /square-meter:
   *   post:
   *     tags:
   *     - Square Meter
   *     description: Get total price square meter
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/SquareMeter'
   *       400:
   *         description: Error
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Simple'
   *       500:
   *         description: Internal Error
   *         content:
   *          application/json:
   *           schema:
   *            $ref: '#/definitions/Simple'
   */
  public async index(request: Request, response: Response): Promise<any> {
    let statusCode: number;
    let responseBody: any = {};
    try {
      const { meters } = request.body;

      const showSquareMeterPrice = new ShowSquareMeterPrice();

      const res = await showSquareMeterPrice.execute({ meters });

      statusCode = res.status ? res.status : 200;
      responseBody = res;
    } catch (err) {
      statusCode = 500;
      responseBody.message = "Internal error";
    }

    return response.status(statusCode).json(responseBody);
  }

}
