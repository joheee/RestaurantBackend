import express, { Router, Request, Response } from 'express';
import { OwnerController } from '../controller/OwnerController';

export const OwnerRoute: Router = express.Router();

OwnerRoute.patch('/', OwnerController.updateStatus)