import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';


/* 
    Os controllers são as funções que farão
    a função da rota, colocamos elas dentro de uma 
    classe
*/

class SettingController {
    async create (req: Request, res: Response) {
        const settingsRepository = getCustomRepository(SettingsRepository);
        const {chat, username} = req.body;
        
        /* 
            Para salvar dados dentro do banco de dados 
            primeiro é criado um objeto para ser usado
        */
        
        const settings = settingsRepository.create({
            chat, 
            username 
        });
        
        /* 
            A chamada que salva os dados no banco de dados
            é assíncrona e precisa ser feita dentro de uma
            função async / await
        */
        
        try { 
            await settingsRepository.save(settings);
            return res.json(settings).status(200);
        
        } catch (error) {
            console.log(error);
            return res.send('')
        }
    };
};

export { SettingController };