import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DarkModeButtonComp from './components/public/DarkModeButtonComp'
import FooterComp from './components/public/FooterComp'
import HeaderComp from './components/public/HeaderComp'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'

function App() {

  return (
    <div className='dark:bg-[#111827] h-full'>
      
      <HeaderComp/>

      <div className='max-w-screen-xl px-4 mx-auto '>

          <Routes>
            <Route path='/'  element={<HomePage/>}/>
            <Route path='/portfolio'  element={<PortfolioPage/>}/>
          </Routes>

      </div>

      <FooterComp/>
    </div>
  )
}

export default App
