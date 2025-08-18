# frontend/Dockerfile

# ---- ESTÁGIO 1: A "Oficina" de Construção (Build Stage) ----
FROM node:22-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência e instala tudo
COPY frontend/package*.json ./
RUN npm install

# Copia o resto do código-fonte do frontend
COPY frontend/ .

# Roda o comando de "construção" para gerar os arquivos finais
RUN npm run build


# ---- ESTÁGIO 2: A "Sala de Estar" (Production Stage) ----
FROM nginx:stable-alpine

# Copia APENAS o resultado final da "oficina" (a pasta 'dist')
# para a pasta que o servidor Nginx usa para mostrar sites.
COPY --from=builder /app/dist /usr/share/nginx/html