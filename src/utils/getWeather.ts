import axios from "axios";
import { FORECAST_ENDPOINT } from "../entities/endpoints";

export default async function getWeather(lat: number, lon: number) {
    const URL = FORECAST_ENDPOINT + `lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(URL)
    
    return response
}