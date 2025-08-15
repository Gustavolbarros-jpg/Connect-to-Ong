FROM node:18-alpine

WORKDIR /app

# Copia package files
COPY backend/package*.json ./

# Instala dependências
RUN npm ci --only=production

# Copia schema do Prisma ANTES do código
COPY prisma/ ./prisma/

# IMPORTANTE: Gera o cliente Prisma ANTES de copiar o resto do código
RUN npx prisma generate

# Agora copia o resto do código
COPY backend/ ./

# Remove possível cache antigo (precaução extra)
RUN rm -rf node_modules/.prisma/client && npx prisma generate

EXPOSE 3333

CMD ["npm", "start"]