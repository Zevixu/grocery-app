# syntax=docker/dockerfile:1
FROM node:16.14.0
ENV NODE_ENV=production
WORKDIR /back-end
COPY ["package.json", "package-lock.json*", "./"]
EXPOSE 5001
RUN npm install --production
COPY . .
CMD [ "node", "server.js"]