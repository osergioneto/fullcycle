FROM node:16.12.0

WORKDIR /app
COPY index.js package.json package-lock.json ./

RUN npm ci

ENTRYPOINT [ "node", "index" ]