import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExploreCardData = [
    {
        id: 1,
        title: "Learn something new",
        description: "Explore your passion and go beyond the physical and mental boundaries of time, age, gender or geography",
        imgUrl: "https://i.ibb.co/74trvvy/Paint.png"
    },
    {
        id: 2,
        title: "Skilled & Passionate Teachers",
        description: "We offers Interactive classes by experts who are qualified and trusted.",
        imgUrl: "https://i.ibb.co/GRdt69p/Teacher.png"
    },
    {
        id: 3,
        title: "Take classes anytime, anywhere",
        description: "Join sessions at your own convenience and pace, from the comforts of your home.",
        imgUrl: "https://i.ibb.co/yhGGS1z/Student.png"
    },
    {
        id: 4,
        title: "Pay as you go",
        description: "No enrollment fee for our classes. You only pay for the classes that you take. Your payment is Safe and secure with us.",
        imgUrl: "https://i.ibb.co/L0j4Ps7/Money.png"
    }
];

const ExploreCard = ({ imgUrl, title, description }) => {
    return (
        <div className='flex flex-col items-center text-center flex-1 gap-2'>
            <img className='h-20 w-20' src={imgUrl} alt={title} />
            <h4 className='text-lg text-[#2530a0] font-semibold'>
                {title}
            </h4>
            <p className='text-md px-4 text-[#717696]'>
                {description}
            </p>
        </div>
    );
};

const Explore = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col'
        >
            <div className='px-4 flex flex-col gap-6 items-center justify-center'>
                <img src='https://cdn.prod.website-files.com/647123ea2886adf856db6043/64712ba2d5227bcec7019c49_KL-arrow-1.svg' className='h-40 w-40' alt='down-arrow'/>
                <h1 className='text-3xl font-bold font-sans text-[#2530a0] text-center'>
                    Explore. Enroll. Have Fun. Repeat - <br className='hidden lg:block' />
                    here hobby meet happiness
                </h1>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-12 mt-12 px-16 py-8'>
                {ExploreCardData.map((exp) => (
                    <ExploreCard key={exp.id} title={exp.title} description={exp.description} imgUrl={exp.imgUrl} />
                ))}
            </div>
        </motion.div>
    );
};

export default Explore;