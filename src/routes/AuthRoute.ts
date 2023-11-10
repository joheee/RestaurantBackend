import express, { Router } from 'express';
import { AuthController } from '../controller/AuthController';



export const AuthRoute: Router = express.Router();
AuthRoute.get('/', AuthController.handleLogin)