import {Request, Response} from 'express';
import { SettingsService } from '../services/SettingsService';


/* 
    Os controllers são as funções que farão
    a função da rota, colocamos elas dentro de uma 
    classe
*/

class SettingController {
    async create (req: Request, res: Response) {

        const {chat, username} = req.body;
        const SettingsServices = new SettingsService();
            
        try {
            const data = await SettingsServices.create({chat, username});
            return res.json(data).status(200);
        } catch (error) {
            console.error(error);
            return res.json({ok: false, message: error.message}).status(400);
        };
    
    };  
};

export { SettingController };