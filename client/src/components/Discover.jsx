import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInUp, containerVariants, hoverLift, buttonHover } from '../hooks/useAnimationVariants';

const DiscoverCard = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className='flex flex-col items-start h-full lg:w-[23%] rounded-md bg-[#e9efff] border shadow-lg overflow-hidden cursor-pointer'
            variants={slideInUp}
            custom={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(37, 48, 160, 0.2)" }}
            transition={{ duration: 0.3 }}
        >
            <div className='w-full overflow-hidden'>
                <motion.img 
                    className='h-40 object-cover rounded-t-md w-full'
                    src='https://i.ibb.co/BrRtmKy/Discover-Card.jpg' 
                    alt='discover_card'
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className='py-2 px-4'>
                <h4 className='text-md font-medium uppercase text-[#2530a0]'>Language</h4>
            </div>
            <div className='px-4'>
                <p className='text-black font-medium text-md'>
                    Class name - Lorem ipsum sit elit varsit lectusi sit amet
                </p>
                <p className='text-sm text-[#7b7b7b] my-1'>
                    by John Doe <span className='text-[#ffb150]'>★ 4.7</span>
                </p>
                <p className='text-[#3e3e3e] text-sm font-light my-4'>
                    Lorem ipsum dolor sit amet, varius
                    consectetur varius entat consectet
                    adipiscing elit. Ullamcorper...
                </p>
            </div>
            <motion.div 
                className='bg-[#2530a0] flex w-full items-center text-white px-4 py-1 rounded-b-lg justify-between'
                whileHover={{ backgroundColor: '#1a1f7a' }}
                transition={{ duration: 0.2 }}
            >
                <div className=''>
                    <h4 className='text-sm'>kr1000 <span className='text-xs text-[#bec4ff] line-through'>kr2000</span></h4>
                </div>
                <motion.div 
                    className=''
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <h4 className='text-md font-medium cursor-pointer'>Enroll Now</h4>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Discover = () => {
    const { ref, inView } = useScrollAnimation(0.15);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className='my-8 lg:px-28 px-4 flex flex-col'
        >
            <motion.div 
                className='flex flex-col lg:flex-row justify-between'
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
            >
                <div className='flex items-baseline gap-4'>
                    <h1 className='text-3xl text-[#2530a0] font-bold'>Discover classes</h1>
                    <motion.p 
                        className='uppercase text-sm text-red-500 underline cursor-pointer'
                        whileHover={{ scale: 1.1, color: '#dc2626' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Show all
                    </motion.p>
                </div>
                <div className='flex justify-between lg:flex-row mt-2 items-center gap-4'>
                    <h4>Show prices in: </h4>
                    <div>
                        <motion.button 
                            className='bg-[#2530a0] py-2 px-6 rounded-l-full text-white text-sm font-medium'
                            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(37, 48, 160, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            NOK
                        </motion.button>
                        <motion.button 
                            className='bg-[#f5f7fa] py-2 px-6 rounded-r-full text-sm font-light'
                            whileHover={{ scale: 1.05, backgroundColor: '#e0e7ff' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            INR
                        </motion.button>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className='mt-6'
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <h4 className='text-[#51557d] text-sm'>Choose from a variety of classes from around the world.</h4>
            </motion.div>
            <div className='mt-12'>
                <div className='flex lg:flex-row flex-col flex-wrap justify-between h-auto w-full gap-8'>
                    {[0, 1, 2, 3].map((index) => (
                        <DiscoverCard key={index} index={index} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Discover;