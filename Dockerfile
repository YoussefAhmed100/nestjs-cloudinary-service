
FROM node:20-alpine AS base
WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .



FROM base AS development
ENV NODE_ENV=development

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

FROM base AS build
ENV NODE_ENV=production
RUN npm run build




FROM node:20-alpine AS production
WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
