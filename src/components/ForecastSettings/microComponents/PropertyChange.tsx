import { property } from "../../../entities/types"
import { useUserForecastContext } from "../../providers/ForecastProvider"
import { useUserLangContext } from "../../providers/LanguageProvider"

export default function PropertyChange() {
    const {textFile} = useUserLangContext()
    const {userSettings, changeSettings} = useUserForecastContext()   
    
    return (
        <div>
            <p className="text-black text-[16] mb-3">{textFile.FORECAST.switch_property}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                {textFile.FORECAST.properties.map((el, i) => (
                    <button
                        key={i}
                        className={"hover:bg-[#7384CE] hover:border-[#7384CE] transition-all hover:text-white border-1 border-[#6E78A6] px-3 py-1.5 text-xs rounded-full" + (
                            userSettings.propertySelected === el.stands_for ? " bg-[#6E78A6] text-white" : " text-black")}
                        onClick={() => {changeSettings({...userSettings, propertySelected: el.stands_for})}}
                    >{el.text}</button>
                ))}
            </div>
        </div>
    )
}