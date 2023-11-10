import express, { Router, Request, Response } from 'express';
import { MenuController } from '../controller/MenuController';

export const MenuRoute: Router = express.Router();

MenuRoute.get('/', MenuController.viewMenu)
MenuRoute.post('/', MenuController.createMenu)
MenuRoute.patch('/', MenuController.updateMenu)
MenuRoute.delete('/', MenuController.deleteMenu)