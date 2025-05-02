# Stage 1: Build Angular App
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist/test-19 /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
