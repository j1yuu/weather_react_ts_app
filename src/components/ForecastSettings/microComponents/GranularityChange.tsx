import { useUserForecastContext } from "../../providers/ForecastProvider"
import { useUserLangContext } from "../../providers/LanguageProvider"

export default function GranularityChange() {
    const {textFile} = useUserLangContext()
    const {userSettings, changeSettings} = useUserForecastContext()

    function onClick(granularity: "5d" | "3h") {
        changeSettings({...userSettings, granularity})
    }

    return (
        <div className="mb-6">
            <p className="text-black text-[16] mb-3">{textFile.FORECAST.switch_granularity}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                <button
                // 6E78A6
                    className={"hover:bg-[#7384CE] hover:border-[#7384CE] transition-all hover:text-white border-1 border-[#6E78A6] px-3 py-1.5 text-xs rounded-full" + (
                        userSettings.granularity === "5d" ? " bg-[#6E78A6] text-white" : " text-black"
                    )}
                    onClick={() => {onClick("5d")}}
                >{textFile.FORECAST.d_5}</button>
                <button
                    className={"hover:bg-[#7384CE] hover:border-[#7384CE] transition-all hover:text-white border-1 border-[#6E78A6] px-3 py-1.5 text-xs rounded-full" + (
                        userSettings.granularity === "3h" ? " bg-[#6E78A6] text-white" : " text-black"
                    )}
                    onClick={() => {onClick("3h")}}
                >{textFile.FORECAST.h_3}</button>
            </div>
        </div>
    )
}