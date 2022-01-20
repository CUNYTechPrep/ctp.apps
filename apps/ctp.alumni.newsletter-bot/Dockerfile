FROM node:lts-alpine
WORKDIR /app
COPY ./dist/ctp.alumni.newsletter-bot/  ./
ENV PORT=3000
RUN npm i
EXPOSE ${PORT}
CMD node main.js