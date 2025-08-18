# backend/Dockerfile (VERSÃO DEFINITIVA)

# 1. Começamos com a base do Node.js
FROM node:22-alpine

# 2. Definimos o diretório de trabalho como a raiz do projeto dentro do contêiner
WORKDIR /app

# 3. Copiamos os arquivos de dependência PRIMEIRO para otimizar o cache
# Copia o package.json da raiz do seu PC para a raiz do contêiner
COPY package*.json ./
# Copia o package.json do backend para a subpasta /backend do contêiner
COPY backend/package*.json backend/
# Copia a pasta prisma da raiz do seu PC para a raiz do contêiner
COPY prisma ./prisma/

# 4. Instalamos as dependências
# Primeiro, instala as dependências da raiz (que inclui o Prisma CLI)
RUN npm install
# Depois, instala as dependências do backend usando --prefix
RUN npm install --prefix backend --production

# 5. Geramos o cliente Prisma
# Agora, rodando da raiz (/app), ele com certeza encontrará a pasta /app/prisma
RUN npx prisma generate

# 6. Copiamos o código-fonte do backend
COPY backend/ backend/

# 7. Definimos o comando final para iniciar o servidor
# O --prefix backend diz ao npm para procurar o script "start" no package.json dentro da pasta /backend
CMD ["npm", "start", "--prefix", "backend"]