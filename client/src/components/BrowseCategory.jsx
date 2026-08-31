import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BrowseCardData = [
    {
        id: 1,
        title: "Language",
        imgUrl: "https://i.ibb.co/JkyKQkH/language.jpg"
    },
    {
        id: 2,
        title: "Cooking",
        imgUrl: "https://i.ibb.co/V9yh7TD/cooking.jpg"
    },
    {
        id: 3,
        title: "Music",
        imgUrl: "https://i.ibb.co/C6LJrZN/music.jpg"
    },
    {
        id: 4,
        title: "Art & Craft",
        imgUrl: "https://i.ibb.co/dpNyVc5/art.jpg"
    },
    {
        id: 5,
        title: "Yoga",
        imgUrl: "https://i.ibb.co/JKQ6J5F/yoga.jpg"
    },
    {
        id: 6,
        title: "Academic",
        imgUrl: "https://i.ibb.co/HDj5ghq/academics.jpg"
    },
    {
        id: 7,
        title: "Back to roots",
        imgUrl: "https://i.ibb.co/VxkbzSs/roots.jpg"
    },
    {
        id: 8,
        title: "Funteresting",
        imgUrl: "https://media.istockphoto.com/id/171292804/photo/painted-hands-sign-heart.jpg?s=612x612&w=0&k=20&c=m3Pqlj7lxsSMVp68corQ8sGQwtnbMX1HnD98Ja9Beu4="
    },
];

const BrowseCard = ({ title, imgUrl }) => {
    return (
        <div className='h-48 pb-8 lg:pb-4 lg:w-56 w-full flex flex-col gap-2 border-b-2 hover:text-[#2530a0] hover:border-b-[#2530a0] hover:scale-105 cursor-pointer'>
            <img className='h-full w-full rounded-2xl shadow-xl object-cover' src={imgUrl} alt={`${title}_category_image`} />
            <h4 className='text-center font-semibold'>{title}</h4>
        </div>
    );
};

const BrowseCategory = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            className='my-16 lg:px-28 px-4 flex flex-col'
        >
            <div>
                <h1 className='text-3xl text-center lg:text-start text-[#2530a0] font-bold'>Browse by category</h1>
            </div>
            <div className='flex flex-col lg:px-1 px-16 lg:flex-row flex-wrap gap-24 mt-12'>
                {BrowseCardData.map((browse) => (
                    <BrowseCard key={browse.id} title={browse.title} imgUrl={browse.imgUrl} />
                ))}
            </div>
        </motion.div>
    );
};

export default BrowseCategory;