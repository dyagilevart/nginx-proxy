# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:lts AS development

# Set working directory
WORKDIR /app

COPY ../../package.json /app/package.json

RUN npm i

COPY ../../.. /app

FROM development AS serve

CMD npx nx serve nest