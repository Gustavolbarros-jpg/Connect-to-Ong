# frontend/Dockerfile (VERSÃO SEM NGINX)

# ---- ESTÁGIO 1: A "Oficina" de Construção (Build Stage) ----
# (Essa parte fica IDÊNTICA, não precisa mudar nada)
FROM node:22-alpine AS builder

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build


# ---- ESTÁGIO 2: Servidor de Produção com Node.js ----
# (Aqui está a mágica!)
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /app

# Instala o 'serve' globalmente. É um servidor estático super leve.
RUN npm install -g serve

# Copia APENAS o resultado final da "oficina" (a pasta 'dist')
# do estágio anterior para a pasta atual.
COPY --from=builder /app/dist .

# Expõe a porta que o 'serve' vai usar por padrão (a 3000)
EXPOSE 3000

# Comando para iniciar o servidor
# A flag '-s' é crucial para Single Page Applications (React, Vue, Angular)
# Ela faz com que qualquer rota não encontrada volte para o index.html
CMD ["serve", "-s", "."]