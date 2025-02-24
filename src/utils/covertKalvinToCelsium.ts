export default function convertKalvinToCelsium(t: number) {
    return Math.floor((t  - 273.15) * 10) / 10
}