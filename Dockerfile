#FROM node:18-alpine AS builder

# Set working directory
#WORKDIR /app

# Copy package files
#COPY package*.json ./

# Install dependencies
#RUN npm ci --only=production

# Copy source code
#COPY . .

#RUN npx vite build

# Build the application
#RUN npm run build

# Production stage
#FROM nginx:alpine

# Copy built assets from builder stage
#COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
#COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
#EXPOSE 80

# Start nginx
#CMD ["nginx", "-g", "daemon off;"]

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
