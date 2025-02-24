import { useState } from "react"
import { useUserLangContext } from "../providers/LanguageProvider"
import { useUserForecastContext } from "../providers/ForecastProvider"
import { useNavigate } from "react-router"

export default function MainInput() {
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    
    const {textFile} = useUserLangContext()
    const {getData, resetCities} = useUserForecastContext()
    
    async function onClick() {
        setLoading(true)
        resetCities()

        const data = await getData(city).then(res => res)

        if (data.error) {
            if (error === "CITY") {
                setError(textFile.CITY_ERROR)
            } else {
                setError(textFile.WEATHER_ERROR)
            }
        } else {
            navigate("/forecast")
        } 
        setLoading(false)
    }

    return (
        <div className="flex flex-col">
            <input
                onKeyDown={(e) => {e.key === "Enter" ? onClick() : ""}}
                onChange={e => setCity(e.target.value)}
                className="w-80 border-2 outline-0 mb-4 px-3 py-2 rounded-full transition-all border-[#6E78A6] text-[#0F0F0A] focus:border-[#0F0F0A]" 
                placeholder={textFile.MAIN.placeholder}
            />
            <button
                disabled={loading}
                className={"w-80 border-0 text-white px-3 py-2 rounded-full " 
                                + (loading ? "bg-[gray] hover:bg-[grray" : "bg-[#6E78A6] hover:bg-[#7384CE]")}
                onClick={onClick}>{textFile.MAIN.button}
            </button>
            {error? (<span className="mt-2.5 text-xs text-red-600">{error}</span>) : (<></>)}
        </div>
    )
}