import { useEffect, useState } from "react"
import { useUserForecastContext } from "../providers/ForecastProvider"
import useWindowSize from "../providers/useWindowResize"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useUserLangContext } from "../providers/LanguageProvider"
import { ForecastItem, IForecast } from "../../entities/types"
import getRandomArrayItem from "../../utils/getRandomArrayItem"
import { HEX_COLORS } from "../../entities/texts"

export default function ForecastChart() {
    const [chartSizes, setChartSizes] = useState([800, 400])
    
    const {forecast, userSettings} = useUserForecastContext()
    const {lang} = useUserLangContext()
    const [width, height] = useWindowSize()

    useEffect(() => {
        if (width < 768 && width >=  548) {
            setChartSizes([400, 300])
        }
        if (width < 548) {
            setChartSizes([320, 240])
        }
    }, [width])
    return (
        <div className="">
            <LineChart 
                width={chartSizes[0]} 
                height={chartSizes[1]}
                data={userSettings.granularity === "5d" ? forecast : forecast.slice(0, 3)}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={"date"} />
                <YAxis />
                <Tooltip />
                <Legend />
                {forecast[0].cities.map((el, i) => (
                    <Line 
                        key={i}
                        name={el.name?.[lang] + ""}
                        dataKey={(d: IForecast) => {
                            const item = d.cities.find(cEl => cEl.name == el.name)?.properties
                            switch (userSettings.propertySelected) {
                                case "temp":
                                    return item?.temperature
                                case "humidity":
                                    return item?.humidity
                                case "pressure":
                                    return item?.pressure
                                case "wind":
                                    return item?.wind
                                default:
                                    return item?.temperature
                            }
                        }}
                        stroke={el.color}
                    />
                ))}
            </LineChart>
        </div>
    )
}