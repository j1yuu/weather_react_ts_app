import { useEffect, useState } from "react"
import { useUserForecastContext } from "../providers/ForecastProvider"
import useWindowSize from "../providers/useWindowResize"
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { useUserLangContext } from "../providers/LanguageProvider"
import { IForecast } from "../../entities/types"

export default function ForecastChart() {
    const [chartSizes, setChartSizes] = useState([600, 500])
    const [YLabel, setYLabel] = useState("temperature")
    
    const {forecast, userSettings} = useUserForecastContext()
    const {lang, textFile} = useUserLangContext()
    const [width, _] = useWindowSize()

    useEffect(() => {
        switch(userSettings.propertySelected){
            case "temp":
                setYLabel(textFile.FORECAST.properties[0].text)
                break;
            case "humidity":
                setYLabel(textFile.FORECAST.properties[1].text)
                break;
            case "pressure":
                setYLabel(textFile.FORECAST.properties[2].text)
                break;
            case "wind":
                setYLabel(textFile.FORECAST.properties[3].text)
                break;
        }
    }, [userSettings])

    useEffect(() => {
        if (width < 440) {
            setChartSizes([300, 240])
        }
        else if (width < 540) {
            setChartSizes([400, 240])
        }
        else if (width < 640) {
            setChartSizes([500, 240])
        } else {
            setChartSizes([600, 400])
        }
    }, [width])
    return (
        <div key={width}>
            <LineChart 
                width={chartSizes[0]} 
                height={chartSizes[1]}
                data={userSettings.granularity === "5d" ? forecast : forecast.slice(0, 3)}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    name="date"
                    dataKey={d => userSettings.granularity === "5d" 
                        ? d.date.split(" ")[0].split("-").reverse().slice(0, 2).join(".")
                        : d.date.split(" ")[1].split(":").slice(0, 2).join(":")
                    }
                    label={{
                        value: lang === "en" ? "Date" : "Дата",
                        position: "insideBottomRight",
                        offset: -5
                    }}
                />
                <YAxis
                    label={{
                        value: YLabel,
                        angle: -90,
                        position: "insideLeft"
                    }}
                />
                <Tooltip />
                <Legend />
                {forecast[0].cities.map((el, i) => (
                    <Line 
                        key={i}
                        name={el.name?.[lang]+""}
                        dataKey={(d: IForecast) => {
                            const item = d.cities.find(cEl => cEl.name?.["en"] == el.name?.["en"])?.properties
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