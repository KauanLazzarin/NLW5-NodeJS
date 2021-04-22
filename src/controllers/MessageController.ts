import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";



class MessageController {
    async create(req: Request, res: Response) {
        const {admin_id, user_id, text} = req.body;
        const messagesService = new MessagesService();  

        const message = await messagesService.create({admin_id, user_id, text});

        return res.json(message).status(200);
    };
}

export {MessageController};