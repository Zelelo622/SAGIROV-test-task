# Stage 1: build
FROM python:3.13-slim

# Рабочая директория
WORKDIR /app

# Копируем зависимости и устанавливаем их
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копируем весь код проекта
COPY . .

# Копируем локальный wait-for-it.sh и делаем его исполняемым
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

# Открываем порт
EXPOSE 8000

# Команда запуска с ожиданием базы
CMD ["sh", "-c", "./wait-for-it.sh db:5432 -- python manage.py migrate && python manage.py collectstatic --noinput && python manage.py runserver 0.0.0.0:8000"]
