FROM node:lts-alpine
WORKDIR /app
COPY ./dist/node dist/apps/ctp.alumni.newsletter-bot/  ./
ENV PORT=3333
EXPOSE ${PORT}
COPY package.json package-lock.json ./
RUN npm install
CMD node main.js