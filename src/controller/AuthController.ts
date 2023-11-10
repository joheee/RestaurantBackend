import { Request, Response } from "express";

export class AuthController {
    
    static handleLogin(req:Request, res:Response){
        res.send('logic here')
    }

    static handleRegister(req:Request, res:Response){
        res.send('logic here')
    }

    static handleLogout(req:Request, res:Response){
        res.send('logic here')
    }
}