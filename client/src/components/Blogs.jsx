import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { slideInUp, containerVariants } from '../hooks/useAnimationVariants';

const blogData = [
    {
        id: 1,
        title: "Why Learning New Hobbies is Important",
        excerpt: "Discover the benefits of exploring new hobbies and how they can enrich your life.",
        img: "https://i.ibb.co/sW9cNfX/blog1.png",
        author: "Jane Doe",
        date: "March 15, 2024"
    },
    {
        id: 2,
        title: "Getting Started with Online Learning",
        excerpt: "Tips and tricks for beginners starting their online learning journey.",
        img: "https://i.ibb.co/R7Y0G9j/blog2.jpg",
        author: "John Smith",
        date: "March 10, 2024"
    },
    {
        id: 3,
        title: "Building a Community of Learners",
        excerpt: "How to connect with like-minded individuals and grow together.",
        img: "https://i.ibb.co/DkfWMsT/blog3.jpg",
        author: "Mike Johnson",
        date: "March 5, 2024"
    },
];

const BlogCard = ({ title, excerpt, img, author, date, index }) => {
    return (
        <motion.div
            className='rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300'
            variants={slideInUp}
            custom={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <div className='overflow-hidden h-48'>
                <motion.img
                    src={img}
                    alt={title}
                    className='w-full h-full object-cover'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
            </div>
            <div className='p-6'>
                <motion.h3
                    className='text-lg font-bold text-[#2530a0] mb-2 line-clamp-2 hover:text-blue-700'
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h3>
                <p className='text-[#717696] text-sm mb-4 line-clamp-3'>
                    {excerpt}
                </p>
                <div className='flex justify-between items-center text-xs text-[#51557d]'>
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                <motion.button
                    className='mt-4 w-full bg-[#2530a0] text-white py-2 rounded-lg font-medium text-sm'
                    whileHover={{ scale: 1.02, boxShadow: '0 5px 15px rgba(37, 48, 160, 0.3)' }}
                    whileTap={{ scale: 0.98 }}
                >
                    Read More
                </motion.button>
            </div>
        </motion.div>
    );
};

const Blogs = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className='px-4 lg:px-28 py-12 bg-[#f9faff]'
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className='text-center mb-12'
            >
                <h1 className='text-3xl font-bold text-[#2530a0] mb-3'>Latest Blogs</h1>
                <p className='text-[#717696] text-md'>Stay updated with our latest insights and articles</p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {blogData.map((blog, index) => (
                    <BlogCard
                        key={blog.id}
                        title={blog.title}
                        excerpt={blog.excerpt}
                        img={blog.img}
                        author={blog.author}
                        date={blog.date}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default Blogs;