import { useState } from "react"
import { useUserLangContext } from "./providers/LanguageProvider"

export default function Settings() {
    const [opened, setOpened] = useState(false)

    const {lang, toggleLanguage} = useUserLangContext()
    return (
        <div className="fixed flex flex-col left-3 bottom-3 text-sm">
            <div className={
                "transition-all " +
                (opened? "opacity-100" : "opacity-0")
            }>
                <div className="flex gap-3">
                    <button
                        onClick={() => {toggleLanguage("ru")}}
                        className={
                            "w-9" + (
                                lang === "ru" ? "" : " opacity-50"
                            )
                        }
                    ><img src="/russian.svg" alt="" /></button>
                    <button
                        onClick={() => {toggleLanguage("en")}}
                        className={
                            "w-9" + (
                                lang === "en" ? "" : " opacity-50"
                            )
                        }
                    ><img src="/english.svg" alt="" /></button>
                </div>
            </div>            
            <button
                className={
                    "px-2 py-1 w-8 h-8 border-1 rounded-full text-center border-[#6E78A6] bg-white transition-all"
                    + (opened ? " text-white bg-[#6E78A6!important]" : " ")
                }
                onClick={() => {setOpened(prev => !prev)}}>+</button>
        </div>
    )
}