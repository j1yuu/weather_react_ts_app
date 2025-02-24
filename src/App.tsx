import { Route, Routes } from 'react-router'

import Main from './pages/Main'
import Forecast from './pages/Forecast'

import './App.css'
import Footer from './components/Footer/Footer'
import Settings from './components/Settings'

function App() {
  return (
    <div className={`bg-[#F9F9FA] min-h-[100vh] text-black`}>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="forecast" element={<Forecast/>}/>
      </Routes>
      <Settings/>
      <Footer/>
    </div>
  )
}

export default App
