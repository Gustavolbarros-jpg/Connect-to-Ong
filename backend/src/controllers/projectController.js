import ProjectDataAccess from '../dominio/project.js';
import { ok, created, notFound, serverError, badRequest } from '../helpers/httpResponse.js';
import { emailService } from '../services/emailService.js';
import prisma from '../prisma/prismaClient.js';
export default class ProjectControllers {

    constructor() {
        this.dataAccess = new ProjectDataAccess();
    }

    async createProject(projectData) {
        try {
            console.log('Controller: Recebendo dados para criar projeto...');
            
            const result = await this.dataAccess.create(projectData);
            console.log('Controller: Projeto criado com sucesso no banco.');

            if (result.ong_selecionada) {
                const ongIdAsNumber = parseInt(result.ong_selecionada, 10);

                if (!isNaN(ongIdAsNumber)) {
                    // Busca a ONG e o Professor em paralelo para mais eficiência
                    const [ong, professor] = await Promise.all([
                        prisma.ong.findUnique({ where: { id: ongIdAsNumber } }),
                        prisma.users.findUnique({ where: { id: result.user_id } })
                    ]);

                    if (ong && ong.email && professor) {
                        console.log(`ONG encontrada: ${ong.nome_ong}. Professor: ${professor.fullname}. Enviando e-mail para: ${ong.email}`);
                        
                        // --- INÍCIO DO NOVO TEMPLATE DE E-MAIL ---
                        const htmlContent = `
                          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
                            <div style="background-color: #001449; color: white; padding: 20px; text-align: center;">
                              <h1 style="margin: 0; font-size: 24px;">Convite para Novo Projeto de Extensão!</h1>
                            </div>
                            <div style="padding: 20px;">
                              <h2 style="color: #001449;">Olá, equipe da ${ong.nome_ong || 'Organização'},</h2>
                              <p>Temos ótimas notícias! O professor(a) <strong>${professor.fullname}</strong> criou um novo projeto na plataforma <strong>Connect To ONG</strong> e gostaria de conectar-se com a sua organização para realizá-lo.</p>
                              <p>Este projeto representa uma excelente oportunidade de colaboração para gerar um impacto social positivo na comunidade.</p>
                              
                              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #0056b3;">
                                <h3 style="margin-top: 0; color: #001449;">Detalhes do Projeto:</h3>
                                <p><strong>Título:</strong> ${result.nome_projeto}</p>
                                <p><strong>Área de Interesse:</strong> ${result.area_interesse}</p>
                                <p><strong>Descrição:</strong></p>
                                <p style="padding-left: 15px; border-left: 2px solid #ccc;"><em>${result.descricao_projeto}</em></p>
                                
                                <h4 style="margin-top: 20px; color: #001449;">Detalhes Adicionais:</h4>
                                <ul style="list-style-type: none; padding: 0;">
                                  <li><strong>🎓 Alunos Envolvidos:</strong> ${result.quantidade_alunos}</li>
                                  <li><strong>💡 Habilidades a Desenvolver:</strong> ${result.soft_skills}</li>
                                  <li><strong>🕒 Carga Horária de Extensão:</strong> ${result.horas_extensao} horas</li>
                                </ul>
                              </div>

                              <h3 style="color: #001449; margin-top: 30px;">Próximos Passos</h3>
                              <p>Se a sua organização tiver interesse nesta parceria, o próximo passo é um professor ou aluno se inscrever no projeto através da nossa plataforma. A partir daí, a comunicação para o alinhamento das atividades poderá ser estabelecida.</p>
                              
                              <div style="text-align: center; margin-top: 30px;">
                                <a href="URL_DA_SUA_PLATAFORMA_AQUI" style="background-color: #0056b3; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Visitar a Plataforma</a>
                              </div>
                            </div>
                            <div style="background-color: #f0f0f0; color: #777; padding: 15px; text-align: center; font-size: 12px;">
                              <p>Você recebeu este e-mail porque um projeto foi direcionado à sua organização na plataforma Connect To ONG.</p>
                              <p>Atenciosamente,<br><strong>Equipe Connect To ONG</strong></p>
                            </div>
                          </div>
                        `;
                        // --- FIM DO NOVO TEMPLATE DE E-MAIL ---

                        await emailService.sendMail({
                            to: ong.email,
                            subject: `Convite para o Projeto de Extensão: "${result.nome_projeto}"`,
                            htmlContent: htmlContent
                        });

                        console.log(`E-mail de notificação enviado com sucesso para a ONG ${ong.nome_ong}`);
                    
                    } else {
                        let logMessage = "AVISO: Não foi possível enviar o e-mail. ";
                        if (!ong) logMessage += "A ONG selecionada não foi encontrada no banco. ";
                        if (!professor) logMessage += "O professor criador do projeto não foi encontrado. ";
                        if (ong && !ong.email) logMessage += "A ONG não possui um e-mail cadastrado. ";
                        console.log(logMessage);
                    }
                }
            }
            
            return created({ message: "Projeto criado com sucesso!", project: result });
        } catch (error) {
            console.error('Controller: Erro inesperado ao criar projeto:', error);
            return serverError(error);
        }
    }
    
    // O resto do seu controller...
    async getProjectById(projectId) {
        try {
            const project = await this.dataAccess.findById(projectId);
            if (!project) {
                return notFound("Projeto não encontrado");
            }
            return ok(project);
        } catch (error) {
            console.error('Erro ao buscar projeto por ID:', error);
            return serverError(error);
        }
    }

    async getAllProjects() {
        try {
            const projects = await this.dataAccess.findAll();
            return ok(projects);
        } catch (error) {
            console.error('Erro ao buscar todos os projetos:', error);
            return serverError(error);
        }
    }

    async getUserProjects(userId) {
        try {
            const projects = await this.dataAccess.findByUserId(userId);
            return ok(projects);
        } catch (error) {
            console.error('Erro ao buscar projetos do usuário:', error);
            return serverError(error);
        }
    }

    async updateProject(projectId, updateData) {
        try {
            const result = await this.dataAccess.update(projectId, updateData);
            return ok({ message: "Projeto atualizado com sucesso!", project: result });
        } catch (error) {
            console.error('Erro ao atualizar projeto:', error);
            return serverError(error);
        }
    }

    async deleteProject(projectId) {
        try {
            await this.dataAccess.delete(projectId);
            return ok({ message: "Projeto deletado com sucesso!" });
        } catch (error) {
            console.error('Erro ao deletar projeto:', error);
            return serverError(error);
        }
    }

    async subscribeUserToProject(userId, projectId) {
        try {
            if (!userId || !projectId) {
                return badRequest("ID do usuário e do projeto são obrigatórios.");
            }
            
            const subscription = await this.dataAccess.subscribeUser(userId, projectId);

            if (!subscription) {
                return serverError("Não foi possível concluir a inscrição.");
            }
            
            const { usuario, projeto } = subscription;
            const ong = projeto.ongs;

            await emailService.sendMail({
                to: ong.email,
                subject: `Novo voluntário para o projeto "${projeto.nome}"!`,
                htmlContent: `
                    <h1>Olá, ${ong.nome}!</h1>
                    <p>Temos ótimas notícias! O voluntário <strong>${usuario.nome}</strong> (${usuario.email}) demonstrou interesse e se inscreveu no seu projeto "${projeto.nome}".</p>
                    <p>Você pode entrar em contato para alinhar os próximos passos.</p>
                    <br>
                    <p>Atenciosamente,</p>
                    <p>Equipe Connect To ONG</p>
                `
            });

            await emailService.sendMail({
                to: usuario.email,
                subject: `Inscrição confirmada no projeto "${projeto.nome}"`,
                htmlContent: `
                    <h1>Olá, ${usuario.nome}!</h1>
                    <p>Sua inscrição no projeto <strong>"${projeto.nome}"</strong> da ONG <strong>${ong.nome}</strong> foi realizada com sucesso!</p>
                    <p>Em breve, a organização deverá entrar em contato com você.</p>
                    <br>
                    <p>Atenciosamente,</p>
                    <p>Equipe Connect To ONG</p>
                `
            });

            return created({ message: "Inscrição realizada com sucesso!", data: subscription });

        } catch (error) {
            console.error("Erro no controller ao inscrever usuário:", error);
            if (error.code === 'P2002') { 
                return badRequest("Este usuário já está inscrito neste projeto.");
            }
            return serverError(error);
        }
    }
}
