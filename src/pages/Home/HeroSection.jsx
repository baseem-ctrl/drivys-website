import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import AppStoreButtons from '../../components/common/AppStoreButtons';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const logos = [
    { gray: '/images/Logo01.png', color: '/images/color_logo/Logo01.png', alt: 'Logo 1' },
    { gray: '/images/Logo02.png', color: '/images/color_logo/Logo02.png', alt: 'Logo 2' },
    { gray: '/images/Logo03.png', color: '/images/color_logo/Logo03.png', alt: 'Logo 3' },
    { gray: '/images/Logo04.png', color: '/images/color_logo/Logo04.png', alt: 'Logo 4' },
    { gray: '/images/Logo05.png', color: '/images/color_logo/Logo05.png', alt: 'Logo 5' },
    { gray: '/images/Logo06.png', color: '/images/color_logo/Logo06.png', alt: 'Logo 6' },
    { gray: '/images/Logo07.png', color: '/images/color_logo/Logo07.png', alt: 'Logo 7' },
    { gray: '/images/Logo08.png', color: '/images/color_logo/Logo08.png', alt: 'Logo 8' },
    { gray: '/images/Logo09.png', color: '/images/color_logo/Logo09.png', alt: 'Logo 9' },
    { gray: '/images/Logo10.png', color: '/images/color_logo/Logo10.png', alt: 'Logo 10' },
    { gray: '/images/Logo11.png', color: '/images/color_logo/Logo11.png', alt: 'Logo 11' },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
    }),
  };

  return (
    <section
      className="w-full min-h-screen bg-black relative"
      style={{
        backgroundImage: 'url(/images/img_image_29.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hero Wrapper */}
      <div className="w-full max-w-[1920px] mx-auto px-[clamp(1rem,4vw,6rem)]">
        <div className="flex flex-col items-center w-full">
          <Header />

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row items-center w-full mt-6 mb-6 sm:mt-12 sm:mb-12 gap-6 sm:gap-12">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                src="/images/img_logo_animation_2.gif"
                alt="Drivys Animation"
                className="w-[220px] sm:w-[clamp(240px,40vw,880px)] h-auto object-contain"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 items-center lg:items-start text-center lg:text-left">
              {/* Badge */}
              <motion.div
                className="flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-[rgba(255,255,255,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <img
                  src="/images/img_frame_5.png"
                  alt="Trusted Badge"
                  className="w-10 sm:w-[clamp(40px,6vw,72px)] h-auto object-contain"
                />
                <span className="text-sm sm:text-[clamp(0.75rem,2vw,1.25rem)] font-poppins text-white">
                  Trusted by 1k users
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="font-poppins font-black text-[1.5rem] sm:text-[clamp(1.5rem,4vw,4.5rem)] leading-snug sm:leading-[clamp(2rem,5vw,4.8rem)]"
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent block"
                  custom={1}
                  variants={textVariant}
                >
                  Certified Instructors Guide Your First Drive.
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent block mt-2 sm:mt-3"
                  custom={2}
                  variants={textVariant}
                >
                  Roads Await.
                </motion.span>
              </motion.h1>

              {/* Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <AppStoreButtons className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="w-full overflow-hidden py-4 sm:py-8 relative">
        <motion.div
          className="flex gap-6 sm:gap-10"
          style={{
            width: 'max-content',
            display: 'flex',
            animation: 'scroll 40s linear infinite',
          }}
        >
          {[...Array(2)].map((_, i) =>
            logos.map((logo, idx) => (
              <Link to="/partners" key={`${i}-${idx}`}>
                <div className="relative flex-shrink-0 w-[120px] sm:w-[clamp(100px,12vw,220px)]">
                  <img
                    src={logo.gray}
                    alt={logo.alt}
                    className="w-full h-auto object-contain transition-opacity duration-500"
                  />
                  <img
                    src={logo.color}
                    alt={logo.alt}
                    className="absolute top-0 left-0 w-full h-auto object-contain opacity-0 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </Link>
            ))
          )}
        </motion.div>

        {/* Infinite Scroll Animation */}
        <style>
          {`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
        </style>
      </div>
    </section>
  );
};

export default HeroSection;
