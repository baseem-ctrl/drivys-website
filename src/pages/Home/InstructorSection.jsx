import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const InstructorSection = () => {
    const instructors = [
        {
            id: 1,
            name: 'Michael Chen',
            image: '/images/img_instructor_1.png',
            specialties: 'Automatic | Manual | Defensive Driving'
        },
        {
            id: 2,
            name: 'Lynn P. Holt',
            image: '/images/img_instructor_3.png',
            specialties: 'Automatic | Manual | Defensive Driving'
        },
        {
            id: 3,
            name: 'Scott Everett',
            image: '/images/img_instructor_2.png',
            specialties: 'Automatic | Manual | Defensive Driving'
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 12 }
        },
    };

    return (
        <section className="w-full bg-black py-12 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-16">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
                    <div className="flex flex-col gap-3">
                        <Button
                            text="Trainers"
                            className=" text-white text-2xl font-normal px-4 py-2 rounded-lg
                            w-fit"
                        />
                        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
                            <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)]
                               bg-clip-text text-transparent">
                                Learn From
                            </span>
                            <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)]
                               bg-clip-text text-transparent">
                                The Best
                            </span>
                        </h2>
                    </div>
                    <div className="lg:w-[28%]">
                        <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
                            Wide selection of expertise, language preference, and gender selection.
                        </p>
                    </div>
                </div>

                {/* Instructors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={instructor.id}
                            className="relative w-full h-[520px] rounded-xl overflow-hidden cursor-pointer shadow-lg group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: index * 0.2 }}
                        >

                            {/* Instructor Image with parallax hover */}
                            <motion.img
                                src={instructor.image}
                                alt={instructor.name}
                                className="w-full h-full object-cover rounded-xl transform transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Overlay shimmer */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/30 to-transparent overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-[-50%] w-1/2 h-full bg-white/10 blur-xl"
                                    animate={{ x: ['-50%', '150%'] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                />
                            </div>

                            {/* Glassy Info Card with glow */}
                            <motion.div
                                className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 group-hover:shadow-[0_0_40px_#f68b2c80] transition-shadow duration-500"
                                whileHover={{ y: -15 }}
                            >
                                <motion.h3
                                    className="text-lg md:text-xl font-poppins font-bold text-white text-center"
                                    whileHover={{ scale: 1.05, opacity: 1 }}
                                >
                                    {instructor.name}
                                </motion.h3>
                                <motion.p
                                    className="text-sm md:text-md font-poppins text-white text-center mt-1"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <span className="font-bold">Specialties: </span>
                                    {instructor.specialties}
                                </motion.p>
                            </motion.div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default InstructorSection;
