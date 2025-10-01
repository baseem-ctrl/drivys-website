import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { motion } from 'framer-motion';

// Logos data
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

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Driving Schools - Drivys</title>
        <meta
          name="description"
          content="Discover Drivys partner driving schools."
        />
      </Helmet>

      <main className="w-full bg-black min-h-screen text-white">
        <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-[20px]">
          <div className="w-full px-4 sm:px-6 lg:px-[80px]">
            <Header />
          </div>

          {/* Hero Section */}
          <section className="w-full px-4 sm:px-6 lg:px-[80px]">
            <div className="w-full max-w-[1760px] mx-auto">
              <div
                className="relative w-full rounded-[24px] overflow-hidden flex items-center"
                style={{
                  backgroundImage: 'url(/images/img_image_29.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minHeight: '360px',
                }}
              >
                <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-[48px]">
                  <div className="flex flex-col justify-center items-start w-full lg:w-[58%]">
                    <div className="bg-white/10 rounded-[10px] px-4 py-2">
                      <p className="text-white">
                        <span>Home / </span>
                        <span className="font-semibold">Schools</span>
                      </p>
                    </div>
                    <h1
                      className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-2"
                      style={{
                        fontFamily: 'Poppins',
                        background:
                          'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Our Partner Schools
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl text-[#94969c] w-full lg:w-[64%] mt-2">
                      Drivys partners with leading driving schools to ensure safe, modern, and
                      flexible learning.
                    </p>
                  </div>
                  <div className="w-full lg:w-[38%] flex justify-center items-center"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Logos Grid */}
          <section className="w-full px-4 sm:px-6 lg:px-[80px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 border-t border-l border-[#ff6600]">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative flex items-center justify-center bg-black border-b border-r border-[#ff6600] p-6 group"
                >
                  {/* Gray Logo */}
                  <img
                    src={logo.gray}
                    alt={logo.alt}
                    className="w-32 h-auto transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Color Logo */}
                  <img
                    src={logo.color}
                    alt={logo.alt}
                    className="w-32 h-auto absolute transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Partners;
