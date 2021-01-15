import express from 'express';
import routes from './routes';
import * as SwaggerUI from "swagger-ui-express";
import * as SwaggerDoc from "../../../documentation.json";
import * as dotenv from 'dotenv';


dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

// SWAGGER
app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(SwaggerDoc))

app.listen(process.env.PORT || 3334, () => {
  console.log('Server Started');
});
