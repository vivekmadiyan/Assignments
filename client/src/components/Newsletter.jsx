import React from 'react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Newsletter = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className='my-24 lg:px-28 flex flex-col'
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='p-16 lg:rounded-full bg-[#fb7356] w-[100%] lg:w-[100%] h-auto flex flex-col text-center items-center justify-center gap-6'
            >
                <h2 className='text-3xl text-white font-bold'>
                    Start learning new skills today and <br /> pursue your passion
                </h2>
                <p className='text-md text-white'>
                    Join the community of global learners and start exploring today.
                </p>
                <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-2'>
                    <input
                        type={"text"}
                        placeholder="Enter your email"
                        className='text-sm rounded-full py-1 pl-6 bg-inherit pr-24 placeholder:text-start placeholder:text-white border border-white'
                    />
                    <button className='uppercase text-sm font-medium bg-white py-1 px-4 text-[#fb7356] rounded-full flex items-center gap-2'>
                        Get Started <FaRegArrowAltCircleRight />
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='relative'
            >
                <div className='absolute right-2'>
                    <button
                        className='text-6xl text-[#2530a0]'
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <IoIosArrowDropup />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Newsletter;