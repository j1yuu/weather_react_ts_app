import { useState } from "react"
import { useUserLangContext } from "../../providers/LanguageProvider"
import { useUserForecastContext } from "../../providers/ForecastProvider"

export default function InputButtonCities() {
    const [city, setCity] = useState("")
    const [_, setLoading] = useState(false)
    const [error, setError] = useState("")
    
    const {textFile, lang} = useUserLangContext()
    const {cities, getData, removeCity} = useUserForecastContext()
    
    async function onClick() {
        setLoading(true)

        const data = await getData(city).then(res => res)

        if (data.error) {
            if (error === "CITY") {
                setError(textFile.CITY_ERROR)
            } else {
                setError(textFile.WEATHER_ERROR)
            }
        } else {
            setCity("")
        }
        setLoading(false)
    }

    return (
        <div className="mb-6 w-full">
            <p className="text-black text-[16] mb-3 max-lg:text-center">{textFile.FORECAST.add_city}</p>
            <div className="flex items-center gap-3 mb-3 max-lg:justify-center">
                <input 
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    className="lg:w-44 max-lg:w-full border-2 text-xs outline-0 px-3 py-2 rounded-full transition-all border-[#6E78A6] text-[#0F0F0A] focus:border-[#0F0F0A]" 
                    placeholder={textFile.MAIN.placeholder}
                    type="text"/>
                <button 
                    onClick={onClick}
                    className="flex items-center justify-center rounded-full p-1.5 bg-[#6E78A6] transition-all hover:bg-[#7384CE]"
                ><img className="w-3 h-3" src="/arrow_right_white.svg" alt="->" /></button>
            </div>
            <div className="flex flex-row flex-wrap gap-x-3 gap-y-1.5">
                {cities.map((el, i) => (
                    <button
                        key={i}
                        onClick={() => {removeCity(el)}}
                        className="bg-[#7384CE] px-3 py-1.5 text-xs text-white rounded-full"
                    >
                    {el.local_names?.[lang]+""}</button>
                ))}
            </div>
        </div>
    )
}