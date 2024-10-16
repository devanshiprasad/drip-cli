FROM node:14-alpine
WORKDIR /client
COPY . .
RUN npm ci
EXPOSE 3000
CMD ["npm", "start"]
