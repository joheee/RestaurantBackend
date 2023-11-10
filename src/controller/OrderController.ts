import { Request, Response } from "express";

export class OrderController {
    static addOrder(req:Request, res:Response) {
        res.send('logic here')
    }
}