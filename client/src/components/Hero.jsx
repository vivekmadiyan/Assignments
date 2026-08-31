import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";

const Hero = () => {
   
  const { ref, inView } = useInView({ threshold: 0.1 }); 
    
  return (
    <div className='lg:mt-6 h-[100vh] lg:h-[70vh] flex flex-col lg:flex-row justify-around px-6 lg:pl-28 lg:ml-16'>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }} 
            className='flex flex-col items-start justify-center gap-6'>
            <div className='flex gap-2 text-center mx-auto'>
                <h1 className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'>Hobbies <span className='text-red-500 text-2xl'><FaHeart /></span></h1>
                <h1 className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'>Happiness <span className='text-red-500 text-2xl'><FaHeart /></span></h1>
                <h1 className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'>Home</h1>
            </div>
            <div className='text-center lg:text-start mx-auto'>
                <p className='text-md font-light text-[#2530a0]'>A Nordic startup which brings incredibly <br />
                    interesting hobbies from around the world to <br />
                    people of all ages. 
                </p>
            </div>
            <div className='hidden lg:flex lg:relative'>
                <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className='border border-[#50557d] rounded-full py-0.5 px-5 placeholder:text-sm text-left' 
                />
                <button 
                    className='flex text-sm items-center gap-2 border rounded-full bg-[#2330a0] text-white py-1 px-2 uppercase absolute right-0 translate-x-[70%]'>
                    Start Exploring <FaRegArrowAltCircleRight />
                </button>
            </div>
        </motion.div>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }} 
         className='flex px-8 lg:py-12 mx-auto lg:px-16'>
            <img className='object-contain lg:w-full lg:h-full w-100 h-100' src="https://i.ibb.co/rGj0dFg/hero.png" alt="Hero_section_photo" />
        </motion.div>
        <div className='fixed bottom-10 right-2 lg:right-16'>
            <button className='bg-[#2530a0] text-white p-2.5 text-lg rounded-full'><IoMdChatboxes /></button>
        </div>
    </div>
  )
}

export default Hero