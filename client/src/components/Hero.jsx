import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import {motion} from "framer-motion"
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
   
  const { ref, inView } = useScrollAnimation(0.3);
     
  return (
    <div className='lg:mt-6 h-[100vh] lg:h-[70vh] flex flex-col lg:flex-row justify-around px-6 lg:pl-28 lg:ml-16'>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }} 
            className='flex flex-col items-start justify-center gap-6'>
            <div className='flex gap-2 text-center mx-auto flex-wrap'>
                <motion.h1 
                    className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'
                    whileHover={{ scale: 1.05, color: '#1a1f7a' }}
                    transition={{ duration: 0.2 }}
                >
                    Hobbies <span className='text-red-500 text-2xl animate-bounce'><FaHeart /></span>
                </motion.h1>
                <motion.h1 
                    className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'
                    whileHover={{ scale: 1.05, color: '#1a1f7a' }}
                    transition={{ duration: 0.2 }}
                >
                    Happiness <span className='text-red-500 text-2xl animate-bounce' style={{ animationDelay: '0.2s' }}><FaHeart /></span>
                </motion.h1>
                <motion.h1 
                    className='flex font-bold items-center gap-2 text-xl text-[#2530a0]'
                    whileHover={{ scale: 1.05, color: '#1a1f7a' }}
                    transition={{ duration: 0.2 }}
                >
                    Home
                </motion.h1>
            </div>
            <motion.div 
                className='text-center lg:text-start mx-auto'
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p className='text-md font-light text-[#2530a0]'>A Nordic startup which brings incredibly <br />
                    interesting hobbies from around the world to <br />
                    people of all ages. 
                </p>
            </motion.div>
            <motion.div 
                className='hidden lg:flex lg:relative'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <motion.input 
                    type="text" 
                    placeholder="Enter your email" 
                    className='border border-[#50557d] rounded-full py-0.5 px-5 placeholder:text-sm text-left focus:outline-none focus:ring-2 focus:ring-[#2530a0]'
                    whileFocus={{ boxShadow: '0 0 20px rgba(37, 48, 160, 0.2)' }}
                    transition={{ duration: 0.2 }}
                />
                <motion.button 
                    className='flex text-sm items-center gap-2 border rounded-full bg-[#2330a0] text-white py-1 px-2 uppercase absolute right-0 translate-x-[70%] font-medium'
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(37, 48, 160, 0.3)', backgroundColor: '#1a1f7a' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    Start Exploring <FaRegArrowAltCircleRight />
                </motion.button>
            </motion.div>
        </motion.div>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }} 
            className='flex px-8 lg:py-12 mx-auto lg:px-16'
            whileHover={{ scale: 1.02 }}
        >
            <motion.img 
                className='object-contain lg:w-full lg:h-full w-100 h-100' 
                src="https://i.ibb.co/rGj0dFg/hero.png" 
                alt="Hero_section_photo"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.div>
        <motion.div className='fixed bottom-10 right-2 lg:right-16'>
            <motion.button 
                className='bg-[#2530a0] text-white p-2.5 text-lg rounded-full shadow-lg'
                whileHover={{ scale: 1.15, boxShadow: '0 20px 40px rgba(37, 48, 160, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <IoMdChatboxes />
            </motion.button>
        </motion.div>
    </div>
  )
}

export default Hero