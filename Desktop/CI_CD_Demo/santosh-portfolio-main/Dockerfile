FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
















# FROM node:20-alpine AS build

# WORKDIR /app

# #Copy only package files first (better layer caching)
# COPY package.json package-lock.json ./
# RUN npm install

# #Copy the rest of the source and build
# COPY . .
# RUN npm run build

# #----- Stage 2 : serve -----
# FROM nginx:alpine

# #Remove default nginx static assets
# RUN rm -rf /usr/share/nginx/html/*

# #Copy built files from the build stage
# COPY --from=build /app/dist /usr/share/nginx/html

# #Copy custom nginx config (needed for react router)
# COPY nginx.config /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD [ "nginx", "-g", "daemon off;" ]