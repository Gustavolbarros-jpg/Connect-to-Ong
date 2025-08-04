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
        try {
            const ong = await this.dataAccess.findById(ongId);
            if (!ong) {
                return notFound('ONG não encontrada');
            }
            return ok(ong);
        } catch (error) {
            return serverError(error);
        }
    }
}