import NgoDataAccess from '../dominio/ngo.js';
import { ok, created, notFound, serverError } from '../helpers/httpResponse.js';

export default class NgoControllers {
    constructor() {
        this.dataAccess = new NgoDataAccess();
    }

    async createNgo(ngoData) {
        try {
            const result = await this.dataAccess.create(ngoData);
            return created({ message: 'ONG criada com sucesso!', ong: result });
        } catch (error) {
            if (error.code === 'P2002' && error.meta?.target?.includes('cnpj')) {
                return serverError({ message: 'Erro: Já existe uma ONG com este CNPJ.' });
            }
            return serverError(error);
        }
    }

    async getAllNgos(queryParams) { 
        try {
            const ongs = await this.dataAccess.findAll(queryParams);
            return ok(ongs);
        } catch (error) {
            return serverError(error);
        }
    }

    async getNgoById(ongId) {
        console.log('--- INICIANDO BUSCA POR ID:', ongId, '---'); // Log de início
        try {
            const ong = await this.dataAccess.findById(ongId);
            console.log('Resultado da busca no banco:', ong); // Veremos se o resultado é 'null'

            if (!ong) {
                console.log('ONG não encontrada. Retornando erro 404.'); 
                return notFound('ONG não encontrada');
            }

            console.log('ONG encontrada com sucesso. Retornando 200 OK.'); 
            return ok(ong);
        } catch (error) {
            console.log('Ocorreu um erro no controller:', error);
            return serverError(error);
        }
    }
}