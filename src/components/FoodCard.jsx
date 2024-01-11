import React from 'react'
import milkrice from '../assets/milkrice.png'

const FoodCard = () => {
  return (
    <div className='flex justify-center my-2 px-4 md:px-8 w-full'>
    <a href="#" className="flex items-center justify-center bg-primary rounded-lg shadow flex-row max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover h-[150px] w-[150px] rounded-2xl md:h-[198px] md:w-[210px] p-1 md:px-3 md:py-2" src={milkrice
    } alt="" />
      <div className="flex flex-col justify-between pr-[30px] py-4 leading-normal">
        <h1 className="md:mb-2 text-lg md:text-3xl font-bold tracking-tight text-white font-jost">Milk Rice</h1>
        <p className="mb-3 font-medium text-xs md:text-sm text-white font-poppins">
                                Three pieces of Milk Rice & one Imbul kiribath
                                With Katta Sambol or Sini Sambol,
                                Fish Ambulthiyal & Banana
                                Tea or Coffee </p>
        <p className='flex justify-end text-lg md:text-2xl text-yelloClr font-semibold font-poppins'>$5.00</p>
      </div>
    </a>
    </div>
  )
}

export default FoodCard