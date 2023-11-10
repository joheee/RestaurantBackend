import express, { Router, Request, Response } from 'express';
import { OrderController } from '../controller/OrderController';

export const OrderRoute: Router = express.Router();

OrderRoute.post('/', OrderController.addOrder)