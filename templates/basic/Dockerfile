FROM node:22-alpine AS build


WORKDIR /app
RUN yarn cache clean --all
COPY yarn.lock package.json ./
RUN yarn install
COPY ./ /app/

ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true