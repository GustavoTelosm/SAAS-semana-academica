FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 7878

CMD ["pnpm", "run", "dev"]