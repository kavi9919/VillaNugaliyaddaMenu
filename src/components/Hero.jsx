import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate,} from 'react-router-dom'
const Hero = () => {
    const navigate=useNavigate();
  return (
    <>
         <section className="h-screen overflow-hidden">
                {/* Background image */}
                <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('./assets/hero.jpeg')]">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.65)]">
                    <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <div className='mt-6 mb-16 mx-4 md:mx-16 px-8'>
                            <img src={logo} alt="" />
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="-mt-2.5 text-primary dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
                    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                            fill="currentColor"></path>
                        </svg>
                </div>
            <div className='sm:mt-8 '>
                <div className='mx-8 lg:mx-12 text-center mb-3 text-lg md:text-2xl text-white font-handwrite'>
                    <h1>Harmony of Nature's Bounty: Where Freshness Meets Serenity in Every Bite</h1>
                </div>
                <div className='flex  justify-center sm:my-2 mt-12'>
                    <button class="bg-yelloClr font-jost px-12 rounded-full text-black font-bold py-3 sm:text-xl" 
                    onClick={()=>navigate('menu')}
                    >
                     Food Menu</button>
                </div>
                {/* Background image */}
                </div>
        </section>
    </>
  )
}

export default Hero