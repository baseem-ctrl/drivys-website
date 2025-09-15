import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/common/Header";
import AppStoreButtons from "../../components/common/AppStoreButtons";

const HeroSection = () => {
  const logos = [
    { gray: "/images/Logo01.png", color: "/images/color_logo/Logo01.png", alt: "Logo 1" },
    { gray: "/images/Logo02.png", color: "/images/color_logo/Logo02.png", alt: "Logo 2" },
    { gray: "/images/Logo03.png", color: "/images/color_logo/Logo03.png", alt: "Logo 3" },
    { gray: "/images/Logo04.png", color: "/images/color_logo/Logo04.png", alt: "Logo 4" },
    { gray: "/images/Logo05.png", color: "/images/color_logo/Logo05.png", alt: "Logo 5" },
    { gray: "/images/Logo06.png", color: "/images/color_logo/Logo06.png", alt: "Logo 6" },
    { gray: "/images/Logo07.png", color: "/images/color_logo/Logo07.png", alt: "Logo 7" },
    { gray: "/images/Logo08.png", color: "/images/color_logo/Logo08.png", alt: "Logo 8" },
    { gray: "/images/Logo09.png", color: "/images/color_logo/Logo09.png", alt: "Logo 9" },
    { gray: "/images/Logo10.png", color: "/images/color_logo/Logo10.png", alt: "Logo 10" },
    { gray: "/images/Logo11.png", color: "/images/color_logo/Logo11.png", alt: "Logo 11" },
  ];

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="w-full min-h-screen bg-black relative"
      style={{
        backgroundImage: "url(/images/img_image_29.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start items-center w-full">
          <Header />

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row justify-start items-center w-full mt-12 sm:mt-16 lg:mt-32 mb-12 sm:mb-16 lg:mb-32">
            {/* Animation Logo */}
            <div className="w-full lg:w-1/2 mb-6 sm:mb-8 lg:mb-0 flex justify-center">
              <motion.img
                src="/images/img_logo_animation_2.gif"
                alt="Drivys Animation"
                className="w-2/3 sm:w-1/2 md:w-1/2 lg:w-full max-w-[880px] h-auto object-contain"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Text Area */}
            <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left">
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-[rgba(255,255,255,0.1)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <img
                  src="/images/img_frame_5.png"
                  alt="Trusted Badge"
                  className="w-[64px] sm:w-[72px] h-[28px] sm:h-[32px] object-contain"
                />
                <span className="text-sm sm:text-base md:text-lg font-poppins font-normal text-white">
                  Trusted by 1k users
                </span>
              </motion.div>

              <motion.h1
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-poppins font-black leading-snug lg:leading-[66px]"
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent block"
                  custom={1}
                  variants={textVariant}
                >
                  Learn from Certified{"\n"}Instructors. Book Instantly.
                </motion.span>
                <motion.span
                  className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent block mt-2 sm:mt-3"
                  custom={2}
                  variants={textVariant}
                >
                  Drive Smarter.
                </motion.span>
              </motion.h1>

              <motion.div
                className="w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <AppStoreButtons className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Continuous Sliding */}
      <div className="w-full overflow-hidden py-6 sm:py-8 relative bg-gradient-to-r from-transparent to-transparent">
        <motion.div
          className="flex gap-6 sm:gap-8 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...Array(2)].map((_, i) =>
            logos.map((logo, idx) => (
              <motion.div
                key={`${i}-${idx}`}
                className="relative w-[80px] sm:w-[120px] md:w-[160px] flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={logo.gray}
                  alt={logo.alt}
                  className="w-full h-auto object-contain"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.img
                  src={logo.color}
                  alt={logo.alt}
                  className="absolute top-0 left-0 w-full h-auto object-contain opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
