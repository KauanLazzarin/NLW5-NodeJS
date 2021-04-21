import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


class UsersController {
    async create (req: Request, res: Response): Promise<Response> {
        const {email} = req.body;
        const userServices = new UsersService();

        try {
            const user = await userServices.create(email);
            return res.json(user).status(200);
        } catch (error) {
            return res.send('algo deu errado').status(400);
        }
        
    }
}

export {UsersController};