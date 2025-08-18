# frontend/Dockerfile (VERSÃO CORRIGIDA)

# ---- ESTÁGIO 1: A "Oficina" de Construção (Build Stage) ----
FROM node:22-alpine AS builder
WORKDIR /app

# ✨ MUDANÇA AQUI: Removemos "frontend/" do caminho
COPY package*.json ./
RUN npm install

# ✨ MUDANÇA AQUI: Removemos "frontend/" do caminho
COPY . .
RUN npm run build

# ---- ESTÁGIO 2: A "Sala de Estar" (Production Stage) ----
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/