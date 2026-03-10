# Робота зі статичними файлами, Cookies та JWT на сервері Express

## 📌 Опис проєкту

У цьому проєкті розширено існуючий Express сервер, додавши підтримку:

- статичних файлів (favicon)
- cookies для збереження налаштувань користувача
- авторизації за допомогою JWT

Проєкт використовує MVC-архітектуру та шаблонізатори PUG і EJS.

# Технології

- Node.js
- Express.js
- PUG
- EJS
- cookie-parser
- JSON Web Token (jsonwebtoken)

# Реалізований функціонал

## Статичні файли

Було додано favicon для всіх HTML сторінок.

Файл розміщено у папці:

public/favicon.ico

Express налаштований для віддачі статичних файлів:

app.use(express.static("public"));

У шаблонах додано:

PUG

link(rel="icon", href="/favicon.ico")

EJS

<link rel="icon" href="/favicon.ico"> ```

## Cookies

Для роботи з cookies використано пакет:

cookie-parser

Middleware підключено у сервері:

app.use(cookieParser());

Реалізовано маршрут для збереження теми сайту:

/set-theme/:theme

Приклад:

http://localhost:3000/set-theme/dark

Цей маршрут зберігає cookie:

theme = dark
JWT авторизація

Для авторизації використано бібліотеку:

jsonwebtoken

Реалізовано маршрут:

/login

який створює JWT токен та зберігає його у cookies.

const token = jwt.sign(user, SECRET)

Токен зберігається:

res.cookie("token", token, { httpOnly: true })
Middleware перевірки JWT

Створено middleware:

middlewares/authJWT.middleware.js

який перевіряє наявність і валідність токена.

jwt.verify(token, SECRET)
Захищений маршрут

Маршрут:

/profile

доступний лише при наявності JWT токена.

Приклад відповіді:

Hello admin

# Запуск проєкту

Встановити залежності:

npm install

Запустити сервер:

node app.js
Перевірка роботи

Сторінки:

http://localhost:3000/users
http://localhost:3000/articles

Cookies:

http://localhost:3000/set-theme/dark

JWT авторизація:

http://localhost:3000/login

Захищений маршрут:

http://localhost:3000/profile
