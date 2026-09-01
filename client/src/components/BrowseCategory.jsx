import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInUp, containerVariants } from '../hooks/useAnimationVariants';

const categoryData = [
    { id: 1, name: "Academics", img: "https://i.ibb.co/n1g9d5Q/academics.jpg" },
    { id: 2, name: "Art", img: "https://i.ibb.co/6wN8Dkm/art.jpg" },
    { id: 3, name: "Language", img: "https://i.ibb.co/qF7v7Xs/language.jpg" },
    { id: 4, name: "Music", img: "https://i.ibb.co/y7LTvBy/music.jpg" },
    { id: 5, name: "Cooking", img: "https://i.ibb.co/0BqNhFR/cooking.jpg" },
    { id: 6, name: "Yoga", img: "https://i.ibb.co/Q6ZpPBM/yoga.jpg" },
];

const CategoryCard = ({ name, img, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className='relative rounded-lg overflow-hidden h-48 cursor-pointer shadow-md'
            variants={slideInUp}
            custom={index}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(37, 48, 160, 0.2)' }}
            transition={{ duration: 0.3 }}
        >
            <motion.img
                src={img}
                alt={name}
                className='w-full h-full object-cover'
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
            />
            <motion.div
                className='absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center'
                animate={isHovered ? { backgroundColor: 'rgba(37, 48, 160, 0.6)' } : { backgroundColor: 'rgba(0, 0, 0, 0)' }}
                transition={{ duration: 0.3 }}
            >
                <motion.h3
                    className='text-white font-bold text-xl'
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                >
                    {name}
                </motion.h3>
            </motion.div>
        </motion.div>
    );
};

const BrowseCategory = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className='px-4 lg:px-28 py-12'
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className='text-center mb-12'
            >
                <h1 className='text-3xl font-bold text-[#2530a0] mb-3'>Browse by Category</h1>
                <p className='text-[#717696] text-md'>Discover hobbies across different categories</p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {categoryData.map((category, index) => (
                    <CategoryCard
                        key={category.id}
                        name={category.name}
                        img={category.img}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default BrowseCategory;