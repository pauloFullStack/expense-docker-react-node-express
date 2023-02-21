FROM node:14
# APP_DIR variavel de ambiente, criada no arquivo .env
ENV APP_DIR=/app
WORKDIR ${APP_DIR}
COPY package*.json ./
RUN npm install
COPY . .
# PORT variavel de ambiente, criada no arquivo .env
ENV PORT 3000
EXPOSE ${PORT}

