import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { AuthRoute } from './web/AuthRoute';
import { MenuRoute } from './web/MenuRoute';
import { OrderRoute } from './web/OrderRoute';
import { OwnerRoute } from './web/OwnerRoute';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors())

app.use('/auth', AuthRoute)
app.use('/menu', MenuRoute)
app.use('/order', OrderRoute)
app.use('/owner', OwnerRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Express Restaurant with Typescript!!');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});