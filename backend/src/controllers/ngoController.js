import NgoDataAccess from '../dominio/ngo.js'; 
import { ok, created, notFound, serverError } from '../helpers/httpResponse.js';

export default class NgoControllers {
    constructor() {
        this.dataAccess = new NgoDataAccess(); 
    }

    async createNgo(ngoData) {
        try {
            const result = await this.dataAccess.create(ngoData);
            return created({ message: 'ONG criada com sucesso!', ngo: result });
        } catch (error) {
            if (error.code === 'P2002' && error.meta?.target?.includes('cnpj')) {
                return serverError({ message: 'Error: Uma ong com esse CNPJ já existe.' }); 
            }
            return serverError(error);
        }
    }

    async getAllNgos() {
        try {
            const ngos = await this.dataAccess.findAll();
            return ok(ngos);
        } catch (error) {
            return serverError(error);
        }
    }

    async getNgoById(ngoId) {
        try {
            const ngo = await this.dataAccess.findById(ngoId);
            if (!ngo) {
                return notFound('ONG não encontrada.');
            }
            return ok(ngo);
        } catch (error) {
            return serverError(error);
        }
    }
}