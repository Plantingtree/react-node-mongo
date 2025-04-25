# Stage 1: Build React app
# previlaged provided
FROM node:10 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy all other app files
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output from the first stage to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx port (80) for serving the app
EXPOSE 80

# Optional: Replace Nginx default config if needed (e.g., React Router config)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
