import { createContext, useContext, useEffect, useState } from "react";

import { GeocodingCity, IForecast, IForecastContext, IRequestsResult, IUserSettings, WeatherResponse } from "../../entities/types";
import { mockForecast } from "../../entities/mockObjects";
import { HEX_COLORS } from "../../entities/texts";

import getCity from "../../utils/getCity";
import getWeather from "../../utils/getWeather";
import convertKalvinToCelsium from "../../utils/covertKalvinToCelsium";
import getRandomArrayItem from "../../utils/getRandomArrayItem";

/**
 * ForecastContext - интерфейс ReactContext для управления информацией о городах и прогнозах погоды для них.
 * @param cities - массив городов типа GeocodingCity.
 * @param data - массив сводок погоды для городов из списка cities
 * @method getData(city) - метод для получения информации о городе и его погоде с помощью GeocodingApi и openwethermapAPI. Принимает название города в формате string. Обновляет массивы setCities и setData.
 * @method removeCity(city) - метод для того, чтобы удалить конкретный город. Принимает информацию о городе типа GeocodingCity. Обновляет массивы cities и data.
*/
const ForecastContext = createContext<IForecastContext>({
    cities: [],
    data: [],
    userSettings: {granularity: "5d", propertySelected: "temp"},
    forecast: [],
    getData: () => Promise.resolve({complete: true, error: null}),
    removeCity: () => {},
    resetCities: () => {},
    changeSettings: () => {}
})


export default function UserForecastContext({
    children
} : {
    children: React.ReactNode
}) {
    const [cities, setCities] = useState<GeocodingCity[]>([])
    const [data, setData] = useState<WeatherResponse[]>([])
    const [forecast, setForecast] = useState<IForecast[]>(mockForecast)
    const [userSettings, setUserSettings] = useState<IUserSettings>({
        granularity: "5d",
        propertySelected: "temp"
    })

    async function getData(city: string) {
        let result: IRequestsResult = {complete: false, error: null}
        const response: GeocodingCity[] = await getCity(city)
                                                    .then(res => res.data)
                                                    .catch(err => {
                                                        result = {complete: true, error: "CITY"}
                                                        return err
                                                    })
        if (response.length) {
            const weather = await getWeather(response[0].lat, response[0].lon)
                                                    .then(res => res.data)
                                                    .catch(err => {
                                                        result = {complete: true, error: "WEATHER"}
                                                        return err
                                                    })
            if (weather) {
                result = {complete: true, error: null}
                setCities(prev => [...prev, response[0]])
                setData(prev => [...prev, weather])
            }
        } else {
            result = {complete: true, error: "CITY"}
        }

        return result
    }

    function removeCity(city: GeocodingCity) {
        const index = cities.findIndex(obj => obj.name === city.name)
        setCities(prev => prev.filter((_, i) => i !== index))
        setData(prev => prev.filter((_, i) => i !== index))
    }

    function resetCities() {
        setCities([])
        setData([])
    }

    function changeSettings(value: IUserSettings) {
        setUserSettings(value)
    }

    useEffect(() => {
        if (data.length) {
            let forecastData: IForecast[] = []

            for (let n = 0; n < 40; n++) {
                let forecastCities: IForecast["cities"] = []
                for (let i = 0; i < data.length; i++) {
                    const forecastDateData = data[i].list[n]
                    
                    const engName = cities[i].local_names?.["en"]
                    const ruName = cities[i].local_names?.["ru"]

                    forecastCities.push({
                        name: {
                            "en": engName ? engName : cities[i].name,
                            "ru": ruName ? ruName : cities[i].name
                        },
                        properties: {
                            temperature: convertKalvinToCelsium(forecastDateData.main.temp),
                            pressure: Math.floor(forecastDateData.main.pressure / 1.333),
                            wind: forecastDateData.wind.speed,
                            humidity: forecastDateData.main.humidity
                        },
                        color: getRandomArrayItem(HEX_COLORS)
                    })
                }

                forecastData.push({
                    date: data[0].list[n].dt_txt,
                    cities: forecastCities,
                })
            }

            setForecast(forecastData)
        } else {
            setForecast(mockForecast)
        }

        console.log(cities)
    }, [data])

    return (
        <ForecastContext.Provider value={{
            cities,
            data,
            userSettings,
            forecast,
            getData,
            removeCity,
            resetCities,
            changeSettings
        }}>
            {children}
        </ForecastContext.Provider>
    )
}

export const useUserForecastContext = () => {
    const context = useContext(ForecastContext)

    if (!context) {
        console.warn("Error occured using userForecastContext")
    }

    return context
}