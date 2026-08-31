import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CommunityCardData = [
    {
        id: 1,
        name: "Karandeep",
        message: "It is nice to be on an international platform where there are teachers from around the world.",
        imgUrl: "https://i.ibb.co/xL4wPSK/person1.jpg"
    },
    {
        id: 2,
        name: "Kalpana",
        message: "The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.",
        imgUrl: "https://i.ibb.co/mtwmgHT/person2.jpg"
    },
    {
        id: 3,
        name: "Kirti",
        message: "As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.",
        imgUrl: "https://i.ibb.co/ccJD6Rt/person3.webp"
    },
];

const CommunityCard = ({ id, name, message, imgUrl }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className={`flex flex-col gap-4 text-center w-[80%] mx-auto items-center lg:w-[30%] border border-[#d3deeb] rounded-md p-4 ${
                id === 2 ? 'bg-[#2330a0]' : ''
            }`}
        >
            <div>
                <img className='h-20 w-20 rounded-full' src={imgUrl} alt='Reason' />
            </div>
            <div className='flex flex-col gap-4 px-2'>
                <h4 className={`text-lg ${id === 2 ? 'text-white' : 'text-[#a7a7a7]'} font-semibold`}>{name}</h4>
                <p className={`text-md ${id === 2 ? 'text-white' : 'text-[#4d4d4d]'}`}>
                    {message}
                </p>
            </div>
        </motion.div>
    );
};

const Community = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            className='my-16 px-4 lg:px-28'
        >
            <div>
                <h1 className='text-3xl text-center lg:text-start text-[#2530a0] font-bold'>Love from community</h1>
            </div>
            <div className='flex flex-row flex-wrap h-auto mt-12 gap-8'>
                {CommunityCardData.map((com) => (
                    <CommunityCard key={com.id} id={com.id} name={com.name} message={com.message} imgUrl={com.imgUrl} />
                ))}
            </div>
        </motion.div>
    );
};

export default Community;