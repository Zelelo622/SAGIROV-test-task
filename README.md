# Запуск проекта
## 🖥️ Фронтенд (Next.js)
### 1. Клонирование репозитория

```bash
git clone https://github.com/Zelelo622/SAGIROV-test-task.git
cd TODO-List-with-API
```

### 2. Установка зависимости

```bash
cd client
npm install

```

### 4. Сборка
```bash
npm run build
```
```bash
npm run start
```

client:
- npm run build
- npm run start

server:
- .\.venv\Scripts\activate
- python manage.py runserver

------------

## 🐍 Бэкенд (Django)

### 1. Активация виртуального окружения
```bash
python -m venv .venv
.\.venv\Scripts\activate
source .venv/bin/activate
```

### 2. Запуск сервера
```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## 🌐 Доступ к приложению

Фронтенд: http://localhost:3000

Бэкенд API: http://localhost:8000

Админка Django: http://localhost:8000/admin