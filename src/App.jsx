
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'
import Breakfast from './pages/breakfast/breakfast'
import Lunch from './pages/lunch/Lunch'

function App() {


  return (
    <>
         <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='menu' element={<MenuPage/>}/>
         <Route path='breakfast' element={<Breakfast/>}></Route>
         <Route path='lunch' element={<Lunch/>}/>
         </Routes>
    </>
  )
}

export default App
