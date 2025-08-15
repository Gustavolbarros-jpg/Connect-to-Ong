# --- ETAPA 1: BUILD ---
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# --- ETAPA 2: SERVIDOR FINAL ---
FROM nginx:stable-alpine

# Copia os arquivos estáticos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia a configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]