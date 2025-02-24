import MainInput from "../components/MainInput/MainInput"
import {useUserLangContext} from "../components/providers/LanguageProvider"
import { textFile } from "../entities/types"

export default function Main() {
    const {textFile}: {textFile: textFile} = useUserLangContext()

    return (
        <section className="flex items-center flex-col w-[100vw] min-h-[80vh] pt-[20vh] pb-[20vh]">
            <p className="text-xs lg:mb-12 max-lg:mb-6 max-md:max-w-[80%] text-center">{textFile.MAIN.subtext}</p>
            <h1 className="flex align-middle lg:text-6xl max-lg:text-5xl font-bold mb-8 sm:mb-4">
                <span className="text-[#6E78A6]">{textFile.name.slice(0, 7)}</span>
                <span>{textFile.name.slice(7, 10)}</span>
                <img className="lg:w-20 lg:h-20 max-lg:w-14" src="/cloud_sun.svg"/>
            </h1>
            <p className="mb-8">{textFile.MAIN.description}</p>
            <MainInput/>
        </section>
    )
}