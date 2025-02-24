import { createContext, useContext, useState } from "react";
import { ILangContext, lang, textFile } from "../../entities/types";
import { en, ru } from "../../entities/texts";


const LanguageProvider = createContext<ILangContext>({
    lang: "en",
    textFile: en,
    toggleLanguage: () => {}
})

export default function UserLangContext({children} : {children: React.ReactNode}) {
    const [lang, setLang] = useState<lang>("ru")
    const [textFile, setTextFile] = useState<textFile>(ru)

    function toggleLanguage(lang: lang) {
        setLang(lang)
        setTextFile(ru)
    }

    return (
        <LanguageProvider.Provider value={{
            lang,
            textFile,
            toggleLanguage
        }}>
            {children}
        </LanguageProvider.Provider>
    )
}

export const useUserLangContext = () => {
    const context = useContext(LanguageProvider)

    if (!context) {
        console.warn("Error using userThemeContext")
    }

    return context
}