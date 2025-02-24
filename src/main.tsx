import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserThemeContext from './components/providers/ThemeProvider.tsx'
import UserLangContext from './components/providers/LanguageProvider.tsx'
import { BrowserRouter } from 'react-router'
import UserForecastContext from './components/providers/ForecastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserThemeContext>
        <UserLangContext>
          <UserForecastContext>
            <App />
          </UserForecastContext>
        </UserLangContext>
      </UserThemeContext>
    </BrowserRouter>
  </StrictMode>
)
