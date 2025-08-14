// src/utils/sendBrevoEmail.js

import SibApiV3Sdk from '@getbrevo/brevo';
import 'dotenv/config';

const brevoApiKey = process.env.BREVO_API_KEY; // Sua chave de API do Brevo

if (!brevoApiKey) {
    console.error("BREVO_API_KEY not set. Cannot send emails.");
}

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.authentications['apiKey'].apiKey = brevoApiKey;
const sendBrevoEmail = async (emailData) => {
    const { to, subject, templateId, params } = emailData;

    try {
        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // Instancia o objeto
        sendSmtpEmail.sender = {
          email: process.env.AUTH_EMAIL, // Seu e-mail de remetente
          name: 'Connect-to-ONG'
        }
        sendSmtpEmail.to = [{ email: to }];
        sendSmtpEmail.subject = subject;
        sendSmtpEmail.templateId = templateId;
        sendSmtpEmail.params = params;

        const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log('E-mail enviado com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        throw error;
    }
};

export default sendBrevoEmail;