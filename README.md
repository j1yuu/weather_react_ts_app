# WEATHER APP

Тестовое задание.
Приложение, написанное на **React + Typescript**

[Ссылка на веб-версию сайта](https://weather-react-ts-app-psi.vercel.app/)

* Подставка своего ключа для теста
Для подстановки своего ключа разработки, необходимо в файле ```.env``` в переменную ```VITE_API_KEY``` поставить в кавычки значение своего ключа.

Пример:
```.env
  VITE_API_KEY = "your_api_key"
```

### Дополнительная информация об инструментах
- *react-router* для роутинга между страницами
- *openweather* api для получения информации о городах и погоды в них
- *axios* использовался для упрощения обработки запросов к серверу
- *recharts* использовался для отображения информации в качестве графиков
- *tailwind css* для стилей

### Карта проекта
- Все компоненты находятся в ```src/components```
- Все сущности (эндпоинты, типы) находятся в ```src/entities```
- Все утилитарные функции (получение города, погоды) находятся в ```src/utils```
- Все рендеры страниц находятся в ```src/pages```
