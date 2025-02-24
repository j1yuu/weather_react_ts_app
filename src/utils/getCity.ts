import axios from "axios";
import { GEOCODING_ENDPOINT } from "../entities/endpoints";

export default async function getCity(city: string) {
    const URL = GEOCODING_ENDPOINT + city + "&limit=1&appid=" + import.meta.env.VITE_API_KEY
    const response = await axios.get(URL)

    return response
}