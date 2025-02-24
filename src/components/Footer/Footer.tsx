import { textFile } from "../../entities/types"
import { useUserLangContext } from "../providers/LanguageProvider"

export default function Footer() {
    const {textFile}: {textFile: textFile} = useUserLangContext()

    function modifyText(text: string, amount: number) {
        const textArray = text.split(" ")
        const last = textArray.splice(textArray.length - amount, amount).join(" ")
        const first = textArray.join(" ")

        return [last, first]
    }

    const link = modifyText(textFile.FOOTER.source_code, 1)
    const name = modifyText(textFile.FOOTER.made_by, 2)
    return (
        <footer className="w-full flex flex-col items-center text-sm pb-6">
            <p>
                <span>{link[1]}</span>
                {" "}
                <a className="text-[#6E78A6] font-bold underline" href={textFile.FOOTER.source_link}>{link[0]}</a>
            </p>
            <p>
                <span>{name[1]}</span>
                {" "}
                <a className="text-[#6E78A6] font-bold underline" href="https://career.habr.com/othlebnul" target="_blank">{name[0]}</a>
            </p>
            <p>{textFile.FOOTER.year}</p>
        </footer>
    )
}