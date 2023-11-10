import express, { Router, Request, Response } from 'express';

export const OrderRoute: Router = express.Router();

OrderRoute.get('/', (req: Request, res: Response) => {
  res.send('Router is working!');
})