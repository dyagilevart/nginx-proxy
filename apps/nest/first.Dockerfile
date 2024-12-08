# syntax=docker/dockerfile:1.4

# 1. For build React app
FROM node:lts AS build

# Set working directory
WORKDIR /app
COPY ../../.. /app

# 2. For Nginx setup
FROM nginx:alpine

# Copy config nginx
COPY --from=build /app/.nginx/nginx-back1.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]