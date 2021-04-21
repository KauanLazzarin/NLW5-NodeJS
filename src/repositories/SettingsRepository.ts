import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";


/* 
    Criamos o repositório onde serão armazenados
    os dados, para ser feito criamos uma classe
    que extenderá a classe Repository do typeorm,
    assim os métodos da classe Repository estarão 
    disponíveis na nossa classe.
    O repositório é semelhante ao model do Mongoose
*/
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

};

export {SettingsRepository};