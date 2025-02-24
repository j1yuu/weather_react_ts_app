import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import App from './App.tsx'
import UserLangContext from './components/providers/LanguageProvider.tsx'
import UserForecastContext from './components/providers/ForecastProvider.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <UserLangContext>
          <UserForecastContext>
            <App />
          </UserForecastContext>
        </UserLangContext>
    </BrowserRouter>
  </StrictMode>
)
