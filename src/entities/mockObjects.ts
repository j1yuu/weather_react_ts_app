import getRandomArrayItem from "../utils/getRandomArrayItem";
import { HEX_COLORS } from "./texts";

export const mockForecast = [
    {
        date: "01-01-1971 00:00", 
        cities: [
            {
                name: {"ru": "", "en": ""}, 
                properties: {
                    temperature: 300,
                    pressure: 300,
                    wind: 300,
                    humidity: 300
                },
                color: getRandomArrayItem(HEX_COLORS)
            }
        ],
    },
    {
        date: "02-01-1971 00:00", 
        cities: [
            {
                name: {"ru": "", "en": ""}, 
                properties: {
                    temperature: 300,
                    pressure: 300,
                    wind: 300,
                    humidity: 300
                },
                color: getRandomArrayItem(HEX_COLORS)
            }
        ],
    },
    {
        date: "03-01-1971 00:00", 
        cities: [
            {
                name: {"ru": "", "en": ""}, 
                properties: {
                    temperature: 300,
                    pressure: 300,
                    wind: 300,
                    humidity: 300
                },
                color: getRandomArrayItem(HEX_COLORS)
            }
        ],
    },
    {
        date: "04-01-1971 00:00", 
        cities: [
            {
                name: {"ru": "", "en": ""}, 
                properties: {
                    temperature: 300,
                    pressure: 300,
                    wind: 300,
                    humidity: 300
                },
                color: getRandomArrayItem(HEX_COLORS)
            }
        ],
    },
    {
        date: "05-01-1971 00:00", 
        cities: [
            {
                name: {"ru": "", "en": ""}, 
                properties: {
                    temperature: 300,
                    pressure: 300,
                    wind: 300,
                    humidity: 300
                },
                color: getRandomArrayItem(HEX_COLORS)
            }
        ],
    }
]