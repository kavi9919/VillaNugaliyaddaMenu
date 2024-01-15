import React from 'react'
import lunch from '../assets/lunch.png'
import { FaRegClock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
const MenuCard = (prop) => {
  const navigate=useNavigate();

  
  const handleCardClick = () => {
    // Use navigate to redirect to the specified destination
    navigate(destination);
  };

  return (
    <>
      <motion.div
            variants={{
              hidden:{opacity:0, y:75, scale:1.2},
              visible:{opacity:1, y:1, scale:1}
          }}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5 , delay:0.25}}
          viewport={{ once: true }}
      >
          <Link  to={prop.destination}>
            <div onClick={handleCardClick}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-primary my-2 
            transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105">
            <img className="w-full" src={prop.url} alt="Sunset in the mountains" />
            <div className="px-8 py-4 md:py-8 text-white">
              <div className="font-bold font-jost text-xl md:text-2xl mb-2 text-center">{prop.title}</div>
              
              <div className="text-white text-base font-semibold font-poppins">
                <div className='flex gap-2 items-center justify-center'>
                  <FaRegClock />
                  {prop.time}
                </div>
                
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

export default MenuCard