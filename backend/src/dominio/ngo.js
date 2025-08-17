// src/dominio/OngDataAccess.js
// O arquivo de acesso a dados para a entidade ONG, usando o Prisma Client.
import prisma from "../prisma/prismaClient.js";

export default class OngDataAccess {
  /**
   * Cria um novo registro de ONG no banco de dados.
   * @param {Object} ongData - Os dados da ONG a serem criados.
   * @returns {Promise<Object>} O objeto ONG criado.
   */
  async create(ongData) {
    try {
      // A correção está aqui: agora usamos 'ongs' e mapeamos os campos corretamente
      const result = await prisma.ongs.create({
        data: {
          nome_ong: ongData.nome,
          Area: ongData.area, // Mapeado para 'Área'
          Sobre: ongData.sobre, // Mapeado para 'Sobre'
          CNPJ: ongData.cnpj, // Mapeado para 'CNPJ'
          Responsavel_para_contato: ongData.responsavel, // Mapeado para 'Responsável_para_contato'
          quantidade_pessoas_assistidas: parseInt(ongData.qtd_associados) || 0, // Mapeado para 'quantidade_pessoas_assistidas'
          Motivo_da_criacao_do_projeto: ongData.motivo_criacao, // Mapeado para 'Motivo_da_criação_do_projeto'
          Espaco_para_informarem_as_redes_sociais_da_suaOrganização:
            ongData.redes_sociais, // Mapeado para 'Espaço_para_informarem_as_redes_sociais_da_suaOrganização'
        },
      });
      return result;
    } catch (error) {
      console.error("Erro ao criar ONG:", error);
      throw error;
    }
  }

  /**
   * Busca todos os registros de ONGs, com a opção de filtrar por área, CNPJ, nome e localização.
   * @param {Object} filters - Um objeto com filtros opcionais.
   * @returns {Promise<Array<Object>>} Uma lista de objetos ONG.
   */
  async findAll(filters = {}) {
    try {
      const whereClause = {};

      if (filters.area) {
        // Mapeado para a coluna 'Área'
        whereClause.Área = {
          contains: filters.area,
          mode: "insensitive",
        };
      }

      if (filters.has_cnpj === "true") {
        // Mapeado para a coluna 'CNPJ'
        whereClause.CNPJ = { not: null };
      }

      if (filters.nome) {
        // Mapeado para a coluna 'nome_ong'
        whereClause.nome_ong = {
          contains: filters.nome,
          mode: "insensitive",
        };
      }

      if (filters.localizacao) {
        // Mapeado para a coluna 'Endereço'
        whereClause.Endereço = {
          contains: filters.localizacao,
          mode: "insensitive",
        };
      }

      const result = await prisma.ongs.findMany({
        where: whereClause,
        orderBy: {
          id: "asc",
        },
      });

      if (result && result.length > 0) {
        console.log("Primeiro objeto ONG:", result[0]);
      }

      return result;
    } catch (error) {
      console.error("Erro ao buscar todas as ONGs:", error);
      throw error;
    }
  }

  /**
   * Busca um registro de ONG pelo nome.
   * @param {string} name - O nome da ONG a ser buscada.
   * @returns {Promise<Object | null>} O objeto ONG encontrado ou null.
   */
  async findByName(name) {
    try {
      // Mapeado para a coluna 'nome_ong'
      const ong = await prisma.ongs.findFirst({
        where: {
          nome_ong: name,
        },
      });
      return ong;
    } catch (error) {
      console.error("Erro ao buscar ONG por nome:", error);
      throw error;
    }
  }

  /**
   * Busca um registro de ONG pelo ID.
   * @param {string} ongId - O ID da ONG a ser buscada.
   * @returns {Promise<Object | null>} O objeto ONG encontrado ou null.
   */
  async findById(ongId) {
    try {
      const numericId = parseInt(ongId, 10);

      if (isNaN(numericId)) {
        return null;
      }

      const result = await prisma.ongs.findUnique({
        where: { id: numericId },
      });
      return result;
    } catch (error) {
      console.error("Erro ao buscar ONG por ID:", error);
      throw error;
    }
  }
}
