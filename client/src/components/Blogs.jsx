import React from 'react';
import { IoChatbubbleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogCardData = [
    {
        id: 1,
        title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        desc: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        imgUrl: "https://i.ibb.co/wM32W0G/blog1.png",
        comNo: 0
    },
    {
        id: 2,
        title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        desc: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        imgUrl: "https://i.ibb.co/FY1hfN1/blog2.jpg",
        comNo: 12
    },
    {
        id: 3,
        title: "Blog name - Lorem ipsum dolor sit amet, et varius et consectetur",
        desc: "Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...",
        imgUrl: "https://i.ibb.co/VM2yyqf/blog3.jpg",
        comNo: 6
    },
];

const BlogCard = ({ title, desc, imgUrl, comNo, inView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col gap-6 text-center lg:text-start items-center lg:w-[30%] border border-[#d3deeb] rounded-md p-4`}
        >
            <div className='w-full'>
                <img className='h-40 w-full object-cover rounded-md' src={imgUrl} alt='discover_card' />
                <h4 className='font-semibold text-lg mt-2'>
                    {title}
                </h4>
                <p className='text-[#666a8d] text-sm my-2 border-b pb-6'>
                    {desc}
                </p>
                <div className='flex justify-between items-center'>
                    <p className='text-sm text-[#323da6] font-semibold'>
                        Publisher name
                    </p>
                    <p className='flex items-center gap-2'>
                        <IoChatbubbleOutline /> {comNo}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Blogs = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.6 }}
            className='my-8 lg:px-28 px-4 flex flex-col'
        >
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='flex mx-auto lg:mx-0 items-baseline gap-8'>
                    <h1 className='text-3xl text-center lg:text-start text-[#2530a0] font-bold'>Our Blogs</h1>
                    <p className='uppercase text-center lg:text-start text-sm text-red-500 underline'>Show all</p>
                </div>
            </div>
            <div className='mt-12 flex flex-col lg:flex-row gap-8'>
                {
                    BlogCardData.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            desc={blog.desc}
                            imgUrl={blog.imgUrl}
                            comNo={blog.comNo}
                            inView={inView}
                        />
                    ))
                }
            </div>
        </motion.div>
    );
};

export default Blogs;