import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = ['Home', 'Explore', 'Categories', 'Blogs', 'Contact'];

    return (
        <motion.nav
            className='flex justify-between items-center px-6 lg:px-28 py-4 bg-white shadow-md sticky top-0 z-50'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className='flex items-center gap-2'>
                <motion.h1
                    className='text-2xl font-bold text-[#2530a0]'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    SimplePlan
                </motion.h1>
            </div>

            <div className='hidden lg:flex gap-8 items-center'>
                {navItems.map((item, index) => (
                    <motion.a
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className='text-[#2530a0] font-medium text-sm relative group'
                        whileHover={{ color: '#1a1f7a' }}
                        transition={{ duration: 0.2 }}
                    >
                        {item}
                        <motion.span
                            className='absolute bottom-0 left-0 w-0 h-0.5 bg-[#2530a0] rounded-full'
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                ))}
            </div>

            <motion.button
                className='bg-[#2530a0] text-white px-6 py-2 rounded-full text-sm font-medium'
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(37, 48, 160, 0.3)' }}
                whileTap={{ scale: 0.95 }}
            >
                Sign In
            </motion.button>
        </motion.nav>
    );
};

export default Navbar;