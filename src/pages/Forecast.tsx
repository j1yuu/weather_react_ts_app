import ForecastChart from "../components/ForecastChart/ForecastChart";
import ForecastSettings from "../components/ForecastSettings/ForecastSettings";
import Header from "../components/Header/Header";
import { useUserForecastContext } from "../components/providers/ForecastProvider";
import { useUserLangContext } from "../components/providers/LanguageProvider";

export default function Forecast() {

    const {userSettings} = useUserForecastContext()
    const {textFile} = useUserLangContext()

    return (
        <>
            <Header/>
            <section className="xl:w-300 md:w-150 @min-xs:w-100 mx-auto ">
                <h1 className="w-fit mx-auto mb-8 text-4xl font-bold color-black pb-2.5 border-b">{
                    userSettings.granularity === "5d" ?
                    textFile.FORECAST.forecast_5d : textFile.FORECAST.forecast_3h  
                }</h1>
                <div className="flex lg:flex-row max-lg:flex-col gap-12 w-fit mx-auto mb-20">
                    <ForecastChart/>
                    <ForecastSettings/>
                </div>
            </section>
        </>
    )
}