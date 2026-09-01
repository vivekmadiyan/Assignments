import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { containerVariants, fadeInUp } from '../hooks/useAnimationVariants';

const Footer = () => {
    const { ref, inView } = useScrollAnimation(0.2);

    const footerSections = [
        {
            title: "About",
            links: ["About Us", "Careers", "Blog", "Press"]
        },
        {
            title: "Community",
            links: ["Help Center", "Contact Us", "Community Forum", "Events"]
        },
        {
            title: "Legal",
            links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Licenses"]
        },
        {
            title: "Social",
            links: ["Facebook", "Twitter", "Instagram", "LinkedIn"]
        }
    ];

    return (
        <motion.footer
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className='bg-[#2530a0] text-white px-4 lg:px-28 py-12'
        >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8'>
                <motion.div
                    variants={fadeInUp}
                    className='col-span-1'
                >
                    <motion.h3
                        className='text-2xl font-bold mb-4'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        SimplePlan
                    </motion.h3>
                    <p className='text-blue-200 text-sm'>
                        Bringing hobbies and happiness to people around the world.
                    </p>
                </motion.div>

                {footerSections.map((section, sectionIndex) => (
                    <motion.div
                        key={sectionIndex}
                        variants={fadeInUp}
                        custom={sectionIndex + 1}
                        className='col-span-1'
                    >
                        <h4 className='font-bold mb-4 text-lg'>{section.title}</h4>
                        <ul className='space-y-2'>
                            {section.links.map((link, linkIndex) => (
                                <motion.li key={linkIndex}>
                                    <motion.a
                                        href="#"
                                        className='text-blue-200 text-sm hover:text-white'
                                        whileHover={{ x: 5, color: 'white' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className='border-t border-blue-400 pt-8 flex flex-col md:flex-row justify-between items-center'
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <p className='text-blue-200 text-sm'>
                    &copy; 2024 SimplePlan Media. All rights reserved.
                </p>
                <div className='flex gap-4 mt-4 md:mt-0'>
                    {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            className='w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-sm font-bold'
                            whileHover={{ scale: 1.2, rotate: 10, backgroundColor: '#ef4444' }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            {social[0]}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;