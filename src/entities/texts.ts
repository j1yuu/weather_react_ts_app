import { textFile } from "./types"

export const ru: textFile = {
    name: "WeatherApp",
    MAIN: {
        subtext: "Небольшое веб-приложение, сделанное с помощью React+Typescript",
        description: "Введите город снизу и подготовьтесь ко всему",
        placeholder: "Введите ваш город",
        error: "Ошибка в обработке вашего запроса. Проверьте введенные данные или попробуйте позже.",
        button: "Посмотреть погоду",
    },
    FORECAST: {
        forecast_5d: "Прогноз на 5 дней",
        forecast_3h: "Прогноз на 3 часа",
        add_city: "Добавьте ещё один город",
        add_city_placeholder: "Введите название города",
        switch_granularity: "5 дневный / 3 часовой прогноз",
        d_5: "на 5 дней",
        h_3: "на 3 часа",
        switch_property: "Выберите отображаемую информацию",
        properties: [
            {
                text: "Температура",
                stands_for: "temp"
            },
            {
                text: "Влажность",
                stands_for: "humidity"
            },
            {
                text: "Давление",
                stands_for: "pressure"
            },
            {
                text: "Ветер",
                stands_for: "wind"
            },
        ]
    },
    FOOTER: {
        source_code: "Исходный код доступен здесь",
        source_link: "https://github.com/j1yuu/weather_react_ts_app/tree/main",
        made_by: "Сделано Константином Кашиным",
        year: "2025"
    },
    CITY_ERROR: "Возникла ошибка при попытке получить информацию о городе.",
    WEATHER_ERROR: "Возникла ошибка при попытке получить информацию о погоде.",
    NO_CITY: "Город не выбран"
}

export const en: textFile = {
    name: "WeatherApp",
    MAIN: {
        subtext: "Small frontend web-application made w/ React+Typescript",
        description: "Write down city and prepare for anything",
        placeholder: "Type your city name here",
        error: "Error: unable to get data about the city or the weather. Check your data or try again later.",
        button: "Look for the weather",
    },
    FORECAST: {
        forecast_5d: "5 day forecast",
        forecast_3h: "3 hour forecast",
        add_city: "Add another city to the list",
        add_city_placeholder: "Type your city name here",
        switch_granularity: "5 days / 3 hour forecast",
        d_5: "5 days",
        h_3: "3 hours",
        switch_property: "Choose a property to display",
        properties: [
            {
                text: "Temperature",
                stands_for: "temp"
            },
            {
                text: "Humidity",
                stands_for: "humidity"
            },
            {
                text: "Pressure",
                stands_for: "pressure"
            },
            {
                text: "Wind",
                stands_for: "wind"
            },
        ]
    },
    FOOTER: {
        source_code: "Source code is avaliable here",
        source_link: "https://github.com/j1yuu/weather_react_ts_app/tree/main",
        made_by: "Made by Konstantin Kashin",
        year: "2025"
    },
    CITY_ERROR: "Error occured while getting data about the city.",
    WEATHER_ERROR: "Error occured while getting data about the weather.",
    NO_CITY: "No city selected"
}

export const HEX_COLORS = [
    "#cd4975", "#8432d6", "#5ede91", "#b6825e",
    "#36d7d3", "#8bd939", "#d32db9", "#70fbbf",
    "#4dcdf2", "#9b51b1", "#be448e", "#fe73f1",
    "#fd48a1", "#6593ad", "#b5b851", "#c37fbd"
]