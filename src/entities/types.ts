
/**
 * Интерфейс ответа API о городе в поиске городов.
 */
export interface GeocodingCity { 
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
};

/**
 * Тип возвращаемой информации о погоде в данном городе.
 * возвращает время и основную погодную сводку.
 */
export type ForecastItem = {
    dt: number;
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level?: number,
        grnd_level?: number,
        humidity: number,
        temp_kf: number
    };
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }[];
    clouds: {
        all: number
    };
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    visibility: number;
    pop: number;
    rain?: {
        "3h": number
    };
    sys: {
        "pod": "d" | "n"
    };
    dt_txt: string;
};
  
/**
 * Тип возвращаемого значения о городе, для которого делалась сводка.
 */
export type City = {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
};

/**
 * WeatherResponse - интерфейс ответа API со сводкой погоды.
 * cod, message, cnt - информация о запросе.
 * list - массив с информацией о погоде
 * city - информация о городе, для которого делался данный запрос
*/
export interface WeatherResponse{
    cod: string;
    message: number;
    cnt: number; 
    list: ForecastItem[];
    city: City; 
};

export type lang = "en" | "ru"

export type theme = "light" | "dark"

export type textFile = {
    name: string,
    MAIN: {
        subtext: string,
        description: string,
        placeholder: string,
        error: string,
        button: string,
    },
    FORECAST: {
        forecast_5d: string,
        forecast_3h: string,
        add_city: string,
        add_city_placeholder: string,
        switch_granularity: string,
        d_5: string,
        h_3: string,
        switch_property: string,
        properties: {text: string, stands_for: property}[]
    },
    FOOTER: {
        source_code: string,
        source_link: string,
        made_by: string,
        year: string
    }
    CITY_ERROR: string,
    WEATHER_ERROR: string,
    NO_CITY: string
}

/**
 * ILangContext - интерфейс ReactContext для хранения информации о выбранном языке и изменении этого языка.
 * @param lang - сам выбранный язык.
 * @method toggleLanguage - метод для смены выбранного языка. Принимает значения "ru" или "en".
 */

export interface ILangContext {
    lang: lang,
    textFile: textFile,
    toggleLanguage: (lang: lang) => void;
}

/**
 * IThemeContext - интерфейс ReactContext для хранения информации о выбранной теме и изменении этой самой темы.
 * @param theme - сама выбранная тема.
 * @method toggleTheme(theme) - метод для смены выбранной темы. Принимает значения "light" или "dark".
 */

export interface IThemeContext {
    theme: theme;
    toggleTheme: (theme: theme) => void
}

export interface IRequestsResult {
    complete: boolean,
    error: "CITY" | "WEATHER" | null
}

export type granularity = "5d" | "3h"
export type property = "temp" | "humidity" | "pressure" | "wind"

export interface IUserSettings {
    granularity: granularity,
    propertySelected: property
}

export interface IForecast {
    date: string,
    cities: {
        name: Record<string, string> | undefined,
        properties: {
            temperature: number,
            pressure: number,
            wind: number,
            humidity: number
        },
        color: string
    }[],
}

export interface IForecastContext {
    cities: GeocodingCity[],
    data: WeatherResponse[],
    userSettings: IUserSettings,
    forecast: IForecast[],
    getData: (city: string) => Promise<IRequestsResult>,
    removeCity: (city: GeocodingCity) => void,
    resetCities: () => void,
    changeSettings: (value: IUserSettings) => void
}