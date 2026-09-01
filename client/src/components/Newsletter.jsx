import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Newsletter = () => {
    const { ref, inView } = useScrollAnimation(0.3);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className='px-4 lg:px-28 py-12'
        >
            <motion.div
                className='bg-gradient-to-r from-[#2530a0] to-[#1a1f7a] rounded-lg p-12 text-center text-white'
                whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(37, 48, 160, 0.3)' }}
                transition={{ duration: 0.3 }}
            >
                <motion.h2
                    className='text-3xl font-bold mb-4'
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Subscribe to Our Newsletter
                </motion.h2>
                <motion.p
                    className='text-lg mb-8 text-blue-100'
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Get the latest updates on new hobbies and exclusive offers delivered to your inbox.
                </motion.p>
                
                <motion.div
                    className='flex flex-col md:flex-row gap-4 max-w-md mx-auto'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.input
                        type="email"
                        placeholder="Enter your email"
                        className='flex-1 px-6 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-300'
                        whileFocus={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.button
                        className='bg-red-500 text-white px-8 py-3 rounded-full font-bold whitespace-nowrap'
                        whileHover={{ scale: 1.05, backgroundColor: '#dc2626', boxShadow: '0 10px 20px rgba(255, 0, 0, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        Subscribe
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Newsletter;