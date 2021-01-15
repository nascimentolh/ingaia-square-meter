import axios from "axios";

interface IRequest {
  meters: number;
}

interface ApiResult {
    id: string;
    price: number;
    created_at: string;
    updated_at: string;
}

export class ShowSquareMeterPrice {
  public async execute({meters}: IRequest): Promise<any> {
      const range = [10, 10000];
      const endpoint = `${process.env.FIXED_PRICE_SERVICE_URL}/prices`;

      try {
          if (meters < range[0] || meters > range[1]) {
              return  {
                  message: `the square meter range is invalid. Valid range (${range[0]} - ${range[1]})`,
                  status: 400,
              };
          }

          const request: { data: ApiResult, statusCode: number } = await axios.get(endpoint);

          if (request.data.price == 0) {
              return {
                  message: "The price registered in the pricing engine is not valid",
                  status: 204,
              };
          }

          return {price: request.data.price * meters};
      } catch (error) {
          throw error;
      }
  }
}
