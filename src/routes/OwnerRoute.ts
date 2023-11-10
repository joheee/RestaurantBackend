import express, { Router, Request, Response } from 'express';



export const OwnerRoute: Router = express.Router();
OwnerRoute.get('/', (req: Request, res: Response) => {
  res.send('Router is working!');
})