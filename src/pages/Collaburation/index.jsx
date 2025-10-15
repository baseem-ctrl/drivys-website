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
  // Function to determine if item needs right border
  const needsRightBorder = (index, cols) => {
    return (index % cols) < (cols - 1);
  };

  // Function to determine if item needs bottom border
  const needsBottomBorder = (index, totalItems, cols) => {
    const row = Math.floor(index / cols);
    const totalRows = Math.ceil(totalItems / cols);
    return row < (totalRows - 1);
  };

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
        <style>{`
          .gradient-border-right {
            position: relative;
          }
          .gradient-border-right::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, 
              rgba(255, 102, 0, 0) 0%, 
              rgba(255, 102, 0, 0.8) 30%, 
              rgba(255, 102, 0, 1) 50%, 
              rgba(255, 102, 0, 0.8) 70%, 
              rgba(255, 102, 0, 0) 100%
            );
          }
          
          .gradient-border-bottom {
            position: relative;
          }
          .gradient-border-bottom::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: linear-gradient(90deg, 
              rgba(255, 102, 0, 0) 0%, 
              rgba(255, 102, 0, 0.8) 30%, 
              rgba(255, 102, 0, 1) 50%, 
              rgba(255, 102, 0, 0.8) 70%, 
              rgba(255, 102, 0, 0) 100%
            );
          }
          
          .gradient-border-both {
            position: relative;
          }
          .gradient-border-both::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(180deg, 
              rgba(255, 102, 0, 0) 0%, 
              rgba(255, 102, 0, 0.8) 30%, 
              rgba(255, 102, 0, 1) 50%, 
              rgba(255, 102, 0, 0.8) 70%, 
              rgba(255, 102, 0, 0) 100%
            );
          }
          .gradient-border-both::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            background: linear-gradient(90deg, 
              rgba(255, 102, 0, 0) 0%, 
              rgba(255, 102, 0, 0.8) 30%, 
              rgba(255, 102, 0, 1) 50%, 
              rgba(255, 102, 0, 0.8) 70%, 
              rgba(255, 102, 0, 0) 100%
            );
          }
        `}</style>

        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col">
            {/* Header */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px] mt-4 mb-6">
              <Header />
            </div>

            {/* Hero Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px] mb-8 md:mb-12 lg:mb-16">
              <div className="w-full max-w-[1760px] mx-auto">
                <div
                  className="relative w-full rounded-[20px] md:rounded-[30px] lg:rounded-[39px] overflow-hidden flex items-center"
                  style={{
                    backgroundImage: 'url(/images/mobile-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '360px',
                  }}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-center w-full px-6 sm:px-8 md:px-10 lg:px-[48px] py-8 md:py-12 lg:py-16">
                    <div className="flex flex-col justify-center items-start w-full lg:w-[58%]">
                      <div className="bg-white/10 rounded-[10px] px-4 py-2">
                        <p className="text-white text-sm md:text-base">
                          <span>Home / </span>
                          <span className="font-semibold">Schools</span>
                        </p>
                      </div>
                      <h1
                        className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold mt-4 leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[68px]"
                        style={{
                          fontFamily: 'Poppins',
                          background:
                            'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        Our Partner Schools
                      </h1>
                      <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#94969c] w-full lg:w-[64%] mt-4">
                        Drivys partners with leading driving schools to ensure safe, modern, and
                        flexible learning.
                      </p>
                    </div>
                    <div className="w-full lg:w-[38%] flex justify-center items-center"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Logos Grid Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px] py-[50px] md:py-[70px] lg:py-[90px]">
              <div className="w-full max-w-[1760px] mx-auto">
                {/* Desktop Grid (4 columns) */}
                <div className="hidden lg:grid lg:grid-cols-4">
                  {logos.map((logo, index) => {
                    const hasRight = needsRightBorder(index, 4);
                    const hasBottom = needsBottomBorder(index, logos.length, 4);
                    let borderClass = '';

                    if (hasRight && hasBottom) {
                      borderClass = 'gradient-border-both';
                    } else if (hasRight) {
                      borderClass = 'gradient-border-right';
                    } else if (hasBottom) {
                      borderClass = 'gradient-border-bottom';
                    }

                    return (
                      <motion.div
                        key={index}
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`relative flex items-center justify-center bg-black p-12 group ${borderClass}`}
                        style={{ minHeight: '200px' }}
                      >
                        {/* Gray Logo */}
                        <img
                          src={logo.gray}
                          alt={logo.alt}
                          className="w-40 h-auto transition-all duration-500 group-hover:opacity-0 filter brightness-75"
                          style={{ maxWidth: '160px' }}
                        />
                        {/* Color Logo on Hover */}
                        <img
                          src={logo.color}
                          alt={logo.alt}
                          className="w-40 h-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100"
                          style={{ maxWidth: '160px' }}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Tablet Grid (3 columns) */}
                <div className="hidden sm:grid sm:grid-cols-3 lg:hidden">
                  {logos.map((logo, index) => {
                    const hasRight = needsRightBorder(index, 3);
                    const hasBottom = needsBottomBorder(index, logos.length, 3);
                    let borderClass = '';

                    if (hasRight && hasBottom) {
                      borderClass = 'gradient-border-both';
                    } else if (hasRight) {
                      borderClass = 'gradient-border-right';
                    } else if (hasBottom) {
                      borderClass = 'gradient-border-bottom';
                    }

                    return (
                      <motion.div
                        key={index}
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`relative flex items-center justify-center bg-black p-8 group ${borderClass}`}
                        style={{ minHeight: '180px' }}
                      >
                        {/* Gray Logo */}
                        <img
                          src={logo.gray}
                          alt={logo.alt}
                          className="w-32 h-auto transition-all duration-500 group-hover:opacity-0 filter brightness-75"
                        />
                        {/* Color Logo on Hover */}
                        <img
                          src={logo.color}
                          alt={logo.alt}
                          className="w-32 h-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100"
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Grid (2 columns) */}
                <div className="grid grid-cols-2 sm:hidden">
                  {logos.map((logo, index) => {
                    const hasRight = needsRightBorder(index, 2);
                    const hasBottom = needsBottomBorder(index, logos.length, 2);
                    let borderClass = '';

                    if (hasRight && hasBottom) {
                      borderClass = 'gradient-border-both';
                    } else if (hasRight) {
                      borderClass = 'gradient-border-right';
                    } else if (hasBottom) {
                      borderClass = 'gradient-border-bottom';
                    }

                    return (
                      <motion.div
                        key={index}
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`relative flex items-center justify-center bg-black p-6 group ${borderClass}`}
                        style={{ minHeight: '150px' }}
                      >
                        {/* Gray Logo */}
                        <img
                          src={logo.gray}
                          alt={logo.alt}
                          className="w-24 h-auto transition-all duration-500 group-hover:opacity-0 filter brightness-75"
                        />
                        {/* Color Logo on Hover */}
                        <img
                          src={logo.color}
                          alt={logo.alt}
                          className="w-24 h-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px]">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Partners;