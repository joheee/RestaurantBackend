import { Request, Response } from "express";

export class AuthController {
    static handleLogin(req:Request, res:Response){
        res.send('testing')
    }
}