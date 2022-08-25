FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve pm2
RUN npm install && npm run build

ENV NODE_ENV=production

EXPOSE 4173

CMD ["pm2", "--no-daemon", "serve", "dist", "4173", "--spa"]