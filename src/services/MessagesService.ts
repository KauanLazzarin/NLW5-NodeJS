import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
    admin_id?: string,
    text: string,
    user_id: string
}

class MessagesService {
    /* 
        Atributos privados só estão disponiveis
        dentro da classe que ele for declarado.
        então podemos criar um atributo private 
        para guardar o repositório e não ter 
        necessidade de gerar um novo a cada método
        chamado dentro do service
    */

    private messageRepository:Repository<Message>;

    constructor () {
        this.messageRepository = getCustomRepository(MessagesRepository);
    }

    async create ({admin_id, text, user_id}: IMessageCreate) {

        const message = this.messageRepository.create({
            admin_id,
            text,
            user_id
        });

        await this.messageRepository.save(message);
        return message;
    };

    async listByUser (user_id: string) {

        const messages = await this.messageRepository.find({
            where: {user_id},
            relations: ['user']
        });

        return messages;
    };
};

export {MessagesService};