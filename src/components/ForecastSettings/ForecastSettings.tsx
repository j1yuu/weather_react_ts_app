import InputButtonCities from "./microComponents/InputButtonCities"
import GranularityChange from "./microComponents/GranularityChange"
import PropertyChange from "./microComponents/PropertyChange"

export default function ForecastSettings() {
    
    return (
        <div className="w-xs max-lg:mx-auto max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
            <InputButtonCities/>
            <GranularityChange/>
            <PropertyChange/>
        </div>
    )
}