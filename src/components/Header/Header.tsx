import { Link } from "react-router";
import { useUserLangContext } from "../providers/LanguageProvider";
import { useUserForecastContext } from "../providers/ForecastProvider";

export default function Header() {
    const {lang, textFile} = useUserLangContext()
    const {cities} = useUserForecastContext()
    
    return (
        <header className="lg:min-w-5xl md:w-2xl sm:w-xl max-sm:max-w-[90%] max mx-auto mb-20 sticky top-0 flex items-center pt-6 justify-between bg-white pb-3 z-50">
            <Link to="/" className="flex align-middle lg:text-4xl md:text-3xl max-md:text-2xl font-bold">
                <span className="text-[#6E78A6]">{textFile.name.slice(0, 7)}</span>
                <span>{textFile.name.slice(7, 10)}</span>
                <img className="md:w-9 md:h-9 max-md:w-6 md:mt-1.5" src="/cloud_sun.svg"/>
            </Link>
            <a href="" target="_blank" className="max-md:hidden">funny <span className="text-[#6E78A6]">cat</span> image</a>
            <p className="text-[16px] font-medium">
                {cities.length ? (
                    cities[0].local_names?.[lang] + (cities.length > 1 ? ` +${cities.length - 1}` : "")
                ) : (textFile.NO_CITY)}
            </p>
        </header>
    )
}