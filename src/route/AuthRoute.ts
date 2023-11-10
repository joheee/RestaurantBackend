import express, { Router, Request, Response } from 'express';

export const AuthRoute: Router = express.Router();

AuthRoute.get('/', (req: Request, res: Response) => {
  res.send('Router is working!');
});