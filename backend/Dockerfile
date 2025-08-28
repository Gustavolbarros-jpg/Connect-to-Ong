# 1. Base do Node.js
FROM node:22-alpine

# 2. Copia a pasta inteira do backend para dentro do container
# O .dockerignore garantirá que a node_modules local não seja copiada
COPY backend /app/backend/

COPY .env /app/backend/.env

# 3. Define o diretório de trabalho para a pasta do backend
WORKDIR /app/backend/

# 4. Instala as dependências a partir do novo WORKDIR
# Agora não precisamos mais do --prefix
RUN npm install

# 5. Gera o cliente Prisma a partir do novo WORKDIR
# O comando fica mais simples e direto
RUN npx prisma generate

# 6. Define o comando para iniciar o servidor
CMD ["sh", "-c", "npx prisma migrate dev --name init && npm start"]