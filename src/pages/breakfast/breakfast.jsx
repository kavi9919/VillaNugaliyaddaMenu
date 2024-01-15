import React from 'react'
import { foods } from './data';
import { useState } from 'react';
import { motion } from "framer-motion"
import Footer from '../../components/Footer';
const Breakfast = () => {
  const [data,setData]= useState(foods); 
  return (
    <div className='bg-secondary'>
      {data.map((section) => (
        <div key={section.id}>
          <h1 className='flex justify-center uppercase font-bold font-jost text-3xl py-8 mx-0'>{section.title}</h1>

          {section.items.map((food) => (
            <motion.div key={food.id} className='flex justify-center my-2 px-4 md:px-8 w-full'
            variants={{
              hidden:{opacity:0, y:75, scale:1.2},
              visible:{opacity:1, y:1, scale:1}
          }}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5 , delay:0.25}}
          viewport={{ once: true }}
            >
              <a href="#" className="flex items-center justify-center bg-primary rounded-lg shadow flex-row max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover h-[150px] w-[150px] rounded-2xl md:h-[198px] md:w-[210px] p-1 md:px-3 md:py-2" src={food.imageSrc} alt="" />
                <div className="flex flex-col justify-between pr-[30px] py-4 leading-normal">
                  <h1 className="md:mb-2 text-lg md:text-3xl font-bold tracking-tight text-white font-jost">{food.name}</h1>
                  <p className="mb-3 font-medium text-xs md:text-sm text-white font-poppins">{food.description}</p>
                  <p className='flex justify-end text-lg md:text-2xl text-yelloClr font-semibold font-poppins'>${food.price.toFixed(2)}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      ))}
      <Footer/>
    </div>
  );}

export default Breakfast

