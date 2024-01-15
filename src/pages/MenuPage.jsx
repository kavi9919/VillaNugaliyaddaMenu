import React from 'react'
import MenuCard from '../components/MenuCard'
import logoblack from '../assets/logo-black.png'
import breakfastImg from '../assets/breakfast.png'
import lunchImg from '../assets/lunch.png'
import DinnerImg from '../assets/dinner.png'
import Footer from '../components/Footer'

const MenuPage = () => {
  return (
   <div className='bg-secondary'>
    <div>
        <div className='flex justify-center px-12 pt-8 '> 
            <img src={logoblack} alt="" />
        </div>   
        <div className='flex-row gap-3 md:flex items-center justify-center py-8 md:py-20 px-8 bg-secondary'>
            <MenuCard title="Breakfast" url={breakfastImg} time='08:00 - 10:00' destination="/breakfast" />
            <MenuCard title="Lunch" url={lunchImg} time='12:00 - 13:00'destination="/lunch" />
            <MenuCard title="Dinner" url={DinnerImg} time='18:00 - 21:00' destination="/dinner" />
        </div>
    </div>
      <Footer/>
  </div>
  )
}

export default MenuPage