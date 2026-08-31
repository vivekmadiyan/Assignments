import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Teaching = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 0.6 }}
      className='hidden lg:mt-6 lg:block lg:px-32'
    >
      <div className='flex flex-col lg:flex-row items-center justify-around'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src='https://i.ibb.co/rGj0dFg/hero.png' alt='certified_image' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col text-center lg:text-start justify-center px-4 lg:px-20 gap-2 lg:gap-4'
        >
          <h1 className='text-3xl font-bold text-[#2530a0]'>
            Become a certified <br className='relative lg:block' /> teacher
          </h1>
          <p className='text-gray-600 text-sm'>
            We only have the best and trusted teachers from the globe.
            <br className='relative lg:block' /> Join us if you have the skill and passion to share it.
          </p>
          <p className='text-sm text-gray-600'>
            <span className='text-orange-400'>&#9632; </span> 
            Make your own schedule
          </p>
          <p className='text-sm text-gray-600'>
            <span className='text-orange-400'>&#9632; </span> 
            Teach students on an international platform
          </p>
          <p className='text-sm text-gray-600'>
            <span className='text-orange-400'>&#9632; </span> 
            Become part of an international community of passionate educators.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Teaching;