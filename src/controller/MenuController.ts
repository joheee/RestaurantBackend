import { Request, Response } from "express";

export class MenuController {
    static viewMenu(req:Request, res:Response){
        res.send('logic here')
    }
    
    static createMenu(req:Request, res:Response){
        res.send('logic here')
    }
    
    static updateMenu(req:Request, res:Response){
        res.send('logic here')
    }

    static deleteMenu(req:Request, res:Response){
        res.send('logic here')
    }
}