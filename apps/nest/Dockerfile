# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:lts AS development

# Set working directory
WORKDIR /app
COPY ../../.. /app

# Same as npm install
RUN npm ci

ENV CI=true

FROM development AS serve

CMD nx serve nest