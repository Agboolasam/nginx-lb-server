FROM node:latest AS builder

WORKDIR /client

COPY client/package*.json ./
RUN npm install

COPY client/ ./

RUN npm run build

FROM node:latest AS production

WORKDIR /server

COPY package*.json ./
RUN npm install --only=production

COPY server.js ./

COPY --from=builder /client/dist ./client/dist

CMD ["node", "server.js"]