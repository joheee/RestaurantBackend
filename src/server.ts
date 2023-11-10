import express, { Request, Response , Application } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import dotenv from 'dotenv';
import cors from 'cors'
import { AuthRoute } from './routes/AuthRoute';
import { MenuRoute } from './routes/MenuRoute';
import { OrderRoute } from './routes/OrderRoute';
import { OwnerRoute } from './routes/OwnerRoute';
// import { Options } from './config/SwaggerConfig';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors())

app.use('/auth', AuthRoute)
app.use('/menu', MenuRoute)
app.use('/order', OrderRoute)
app.use('/owner', OwnerRoute)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});