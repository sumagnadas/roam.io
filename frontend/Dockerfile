FROM node:alpine
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 5173
CMD ["npx", "vite", "--host"]