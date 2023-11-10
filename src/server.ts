import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { AuthRoute } from 'route/AuthRoute';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use('/auth', AuthRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Express Restaurant with Typescript!!');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});