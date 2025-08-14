// backend/src/services/emailService.js

import * as Brevo from '@getbrevo/brevo';
import 'dotenv/config';

// 1. Configura a instância da API com a chave do .env
const apiInstance = new Brevo.TransactionalEmailsApi();

// Define a chave da API para a autenticação
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// 2. Cria o objeto que será responsável por enviar o email
const sendSmtpEmail = new Brevo.SendSmtpEmail();

/**
 * Função para enviar um e-mail usando a API do Brevo.
 * @param {string} to - O e-mail do destinatário.
 * @param {string} subject - O assunto do e-mail.
 * @param {string} html - O corpo do e-mail em formato HTML.
 */
async function sendMail({ to, subject, htmlContent }) {
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;
    sendSmtpEmail.sender = { name: "Connect To ONG", email: "connecttoong@gmail.com" }; // IMPORTANTE: Use um email verificado no Brevo
    sendSmtpEmail.to = [{ email: to }];
    // sendSmtpEmail.replyTo = { email: "seu-email-de-contato@exemplo.com" }; // Opcional

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log("E-mail enviado com sucesso via Brevo. ID da mensagem: ", data.body.messageId);
        return { success: true, messageId: data.body.messageId };
    } catch (error) {
        console.error("Erro ao enviar e-mail via Brevo:", error.response?.body || error.message);
        return { success: false, error: error.response?.body || error.message };
    }
}

export const emailService = {
    sendMail,
};