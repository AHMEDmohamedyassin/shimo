import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DarkModeButtonComp from './components/public/DarkModeButtonComp'
import FooterComp from './components/public/FooterComp'
import HeaderComp from './components/public/HeaderComp'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <div className='dark:bg-[#111827] min-h-[100vb] flex flex-col'>
      
      <HeaderComp/>

      <div className='max-w-screen-xl w-full px-4 mx-auto min-h-full flex-1'>

          <Routes>
            <Route path='/'  element={<HomePage/>}/>
            <Route path='/portfolio'  element={<PortfolioPage/>}/>
            <Route path='/contact'  element={<ContactPage/>}/>
          </Routes>

      </div>

      <FooterComp/>
    </div>
  )
}

export default App
