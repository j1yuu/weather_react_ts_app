import { useState } from "react"
import { GeocodingCity, WeatherResponse } from "../../entities/types"
import getCity from "../../utils/getCity"
import getWeather from "../../utils/getWeather"
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

export default function InputTest() {
    const [input, setInput] = useState<string>("")
    const [openCharts, setOpenCharts] = useState<boolean>(false)
    const [data, setData] = useState<null | WeatherResponse>(null)
    const [city, setCity] = useState<string>("")

    async function onClick() {
        const city = (await getCity(input))[0]
        const data = await getWeather(city.lat, city.lon)
        
        setCity(city.local_names? city.local_names["ru"] : data.city.name)
        setData(data)
        setOpenCharts(true)
    }

    return (
        <>
            <input 
                type="text" 
                placeholder="Введите ваш город" 
                onChange={(e) => {setInput(e.target.value)}}
            />
            <button onClick={onClick}>Показать прогноз</button>

            {!openCharts && !data ? 
                (
                    <></>
                ) : (
                    <>
                        <LineChart
                            width={730}
                            height={250}
                            data={data?.list}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray={"1 10"}/>
                            <XAxis dataKey={"dt_txt"}/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line type={"monotone"} name={city} dataKey={(d) => Math.floor((d["main"]["temp"]  - 273.15) * 10) / 10} stroke="#FFCC00"/>
                        </LineChart>
                    </>
                )
            }
        </>
    )
}