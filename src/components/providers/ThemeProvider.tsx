import { createContext, useContext, useState } from "react";
import { IThemeContext, theme } from "../../entities/types";


export const ThemeProvider = createContext<IThemeContext>({theme: "light", toggleTheme: () => {}})

export default function UserThemeContext({children} : {children: React.ReactNode}) {
    const [theme, setTheme] = useState<theme>("dark")

    function toggleTheme(theme: theme) {
        setTheme(theme)
    }
    return (
        <ThemeProvider.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeProvider.Provider>
    )
}

export const useUserThemeContext = () => {
    const context = useContext(ThemeProvider)

    if (!context) {
        console.warn("Error using userThemeContext")
    }

    return context
}