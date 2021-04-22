import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean,
    username: string
}


class SettingsService {
    private settingsRepository: Repository<Setting>;

    constructor () {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create ({chat, username}: ISettingsCreate) {


        /* 
            Primeiro é preciso referenciar o repositório,
            então pegar os dados que são recebidos pelo service
        */

        // Verificando se já existe usuário com o nome cadastrado
        const hasAlreadyUser = await this.settingsRepository.findOne({
            username
        });

        if (hasAlreadyUser) {
            throw new Error("User already exists!");
        };

        /* 
            Para salvar dados dentro do banco de dados 
            primeiro é criado um objeto para ser usado
        */

        const settings = this.settingsRepository.create({
            chat, 
            username 
        });
        
        /* 
            A chamada que salva os dados no banco de dados
            é assíncrona e precisa ser feita dentro de uma
            função async / await
        */

        await this.settingsRepository.save(settings);
        return settings;
    };
};

export {SettingsService};
