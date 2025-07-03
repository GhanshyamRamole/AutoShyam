# Stage 1: Build stage (using Node.js) 
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2: Production stage (using Nginx)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
#COPY --from=builder nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
