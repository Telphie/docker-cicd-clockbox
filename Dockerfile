FROM node:22-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY app.js ./
USER node
ENV NODE_ENV=production PORT=4000
EXPOSE 4000
CMD ["node", "app.js"]
