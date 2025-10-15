import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/common/Header';
import AppStoreButtons from '../../components/common/AppStoreButtons';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const logos = [
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-01.png',
      color: '/images/color_logo/Logo01.png',
      alt: 'Logo 1',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-02.png',
      color: '/images/color_logo/Logo02.png',
      alt: 'Logo 2',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-03.png',
      color: '/images/color_logo/Logo03.png',
      alt: 'Logo 3',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-04.png',
      color: '/images/color_logo/Logo04.png',
      alt: 'Logo 4',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-05.png',
      color: '/images/color_logo/Logo05.png',
      alt: 'Logo 5',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-06.png',
      color: '/images/color_logo/Logo06.png',
      alt: 'Logo 6',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-07.png',
      color: '/images/color_logo/Logo07.png',
      alt: 'Logo 7',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-08.png',
      color: '/images/color_logo/Logo08.png',
      alt: 'Logo 8',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-09.png',
      color: '/images/color_logo/Logo09.png',
      alt: 'Logo 9',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-10.png',
      color: '/images/color_logo/Logo10.png',
      alt: 'Logo 10',
    },
    {
      gray: '/images/Drivys-Patners/Drivys-Patner-11.png',
      color: '/images/color_logo/Logo11.png',
      alt: 'Logo 11',
    },
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
      className="w-full min-h-[70vh] md:min-h-screen bg-black relative"
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
          <div className="flex flex-col lg:flex-row items-center w-full mt-[clamp(3rem,8vw,8rem)] mb-[clamp(3rem,8vw,8rem)] gap-[clamp(2rem,5vw,4rem)]">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <motion.img
                src="/images/img_logo_animation_2.gif"
                alt="Drivys Animation"
                className="w-[350px] md:w-[450px] lg:w-[clamp(200px,40vw,880px)] h-auto object-contain"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>

            {/* Right Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
              {/* Badge */}
              <motion.div
                className="flex items-center gap-3 rounded-lg px-4 py-3 bg-[rgba(255,255,255,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <img
                  src="/images/img_frame_5.png"
                  alt="Trusted Badge"
                  className="w-[clamp(48px,6vw,72px)] h-auto object-contain"
                />
                <span className="text-[clamp(0.8rem,2vw,1.25rem)] font-poppins text-white">
                  Trusted by 1k users
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="
                                    font-poppins font-black
                                    text-[clamp(1.5rem,4vw,4.5rem)]
                                    leading-[clamp(2rem,5vw,4.8rem)]
                                "
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
                  className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent block mt-3"
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
                <AppStoreButtons
                  className="mt-6 flex flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
                  googlePlayLink="https://play.google.com/store/apps/details?id=com.drivys.mobile"
                  appStoreLink="https://apps.apple.com/ae/app/drivys/id6736641175"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="w-full overflow-hidden py-[clamp(1rem,3vw,3rem)] mt-6 sm:mt-0 relative">
        <motion.div
          className="flex gap-[clamp(1rem,3vw,2rem)]"
          style={{
            width: 'max-content',
            display: 'flex',
            animation: 'scroll 40s linear infinite',
          }}
        >
          {[...Array(2)].map((_, i) =>
            logos.map((logo, idx) => (
              <Link to="/partners" key={`${i}-${idx}`}>
                <div className="relative w-[clamp(100px,18vw,200px)] flex-shrink-0 sm:w-[clamp(60px,10vw,200px)]">
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
