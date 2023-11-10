import { Request, Response } from "express";

export class OwnerController {
    static updateStatus(req:Request, res:Response) {
        res.send('logic here')
    }
}