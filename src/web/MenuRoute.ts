import express, { Router, Request, Response } from 'express';

export const MenuRoute: Router = express.Router();

MenuRoute.get('/', (req: Request, res: Response) => {
  res.send('Router is working!');
})