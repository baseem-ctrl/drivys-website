import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../components/ui/Button';

const VehicleTrainingSection = () => {
  const trainingOptions = [
    {
      id: 1,
      number: '01',
      title: 'Car',
      description: 'Learn everyday driving skills for city and highway roads with confidence.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_vector.png',
      hoverColor: '#6EBF75', // Green
    },
    {
      id: 2,
      number: '02',
      title: 'Bus',
      description: 'Get trained for public transport and commercial bus driving.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_vector_white_a700_296x562.png',
      hoverColor: '#FBBC01', // Yellow
    },
    {
      id: 3,
      number: '03',
      title: 'Truck',
      description: 'Master heavy vehicle handling for logistics and long-distance routes.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_group_179.png',
      hoverColor: '#D52C2C', // Red
    },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-6 mb-20">
          <div className="flex flex-col gap-3 items-start text-left">
            <Button
              text="Vehicle Options"
              className="text-white text-md sm:text-2xl font-normal px-4 py-2 rounded-lg w-fit mx-0"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
              <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                Choose Your{" "}
              </span>
              <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                Training Path
              </span>
            </h2>
          </div>
          <div className="lg:w-[28%] text-center lg:text-left mt-4 lg:mt-0">
            <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
              With 400+ active vehicles, we deliver reliable and timely service.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="relative">
          {trainingOptions.map((option, index) => (
            <Card key={option.id} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ option, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [index * 50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, zIndex: index + 1 }}
      whileHover={{ backgroundColor: option.hoverColor }}
      transition={{ duration: 0.5 }}
      className="group relative sticky top-24 w-full bg-[#141414] rounded-2xl p-8 md:p-12 shadow-2xl mb-20 overflow-hidden"
    >
      {/* ✨ Left-side Color Fading Overlay */}
      <motion.div
        className="absolute left-0 top-0 w-1/3 h-full pointer-events-none transition-all duration-500"
        initial={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.08), transparent)',
        }}
        whileHover={{
          background: `linear-gradient(to right, ${option.hoverColor}40, transparent)`, // 40 = 25% opacity
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      ></motion.div>

      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center relative z-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Number Button */}
          <Button
            text={option.number}
            className="!border-white !bg-none !bg-transparent !text-white text-4xl md:text-5xl font-bold px-6 py-4 rounded-sm w-fit transition-colors group-hover:!text-black group-hover:!border-black"
          />

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#f68c2d] transition-colors group-hover:text-black">
            {option.title}
          </h3>

          {/* Description */}
          <p className="text-lg md:text-xl text-white transition-colors group-hover:text-black">
            {option.description}
          </p>

          {/* Features */}
          <div className="flex flex-col gap-3">
            {option.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src="/images/img_frame.svg" className="w-6 h-6 transition-all" alt="feature" />
                <span className="text-white text-lg transition-colors group-hover:text-black">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            text="Choose Vehicle"
            className="!border-white !bg-none !bg-transparent !text-white text-xl font-bold px-4 py-2 rounded-lg w-fit mt-6 transition-colors group-hover:!text-black group-hover:!border-black"
          />
        </div>

        {/* Right Side (Vehicle Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={option.vehicleImage}
            className="max-w-[500px] w-full object-contain"
            alt={option.title}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleTrainingSection;

