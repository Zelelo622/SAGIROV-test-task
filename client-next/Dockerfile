# ------------------------------
# Базовый образ с Node.js
FROM node:24-alpine

# Рабочая директория
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь код
COPY . .

# Очищаем старые билды и строим Next.js приложение
RUN rm -rf .next && npm run build

# Экспортируем порт
EXPOSE 3000

# Старт приложения
CMD ["npm", "start"]
