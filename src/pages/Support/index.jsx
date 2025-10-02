import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { motion } from 'framer-motion';
import AppStoreButtons from '../../components/common/AppStoreButtons'; 

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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Trainer Tools - Mobile App Features | Drivys Professional Platform</title>
        <meta
          name="description"
          content="Discover Drivys mobile app features for driving instructors. Dashboard management, booking system, student progress tracking, ratings & rewards program for professional trainers."
        />
        <meta
          property="og:title"
          content="Trainer Tools - Mobile App Features | Drivys Professional Platform"
        />
        <meta
          property="og:description"
          content="Discover Drivys mobile app features for driving instructors. Dashboard management, booking system, student progress tracking, ratings & rewards program for professional trainers."
        />
      </Helmet>

      <main className="w-full bg-black min-h-screen text-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-[10px] md:gap-[20px] lg:gap-[30px] justify-start items-center">
            
            <div className="w-full px-4 sm:px-6 lg:px-[80px] mt-4">
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
                    {/* Text Area */}
                    <div className="flex flex-col justify-center items-start w-full lg:w-[58%]">
                      {/* Breadcrumb */}
                      <div className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-solid border-transparent rounded-[10px] px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px]">
                        <p
                          className="text-base md:text-lg lg:text-xl font-normal leading-[22px] md:leading-[26px] lg:leading-[30px] text-left text-white"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          <span className="text-white">Home / </span>
                          <span className="text-white font-semibold">Join with Us</span>
                        </p>
                      </div>

                      {/* Main Heading */}
                      <h1
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[38px] sm:leading-[48px] md:leading-[68px] text-left mt-2"
                        style={{
                          fontFamily: 'Poppins',
                          background:
                            'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        About Drivys
                      </h1>

                      {/* Description */}
                      <p
                        className="text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Drivys makes learning to drive simple, safe, and flexible with trusted
                        instructors and modern tools.
                      </p>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full lg:w-[38%] flex justify-center items-center"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Join / Partnership Form Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px] mt-12 mb-12">
              <motion.div
                className="w-full max-w-[1200px] mx-auto bg-[#1a1a1a] rounded-[24px] p-8 md:p-12 flex flex-col gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="text-3xl md:text-5xl font-extrabold text-white text-center"
                  variants={fadeUpVariant}
                >
                  Join With Us / Partnership
                </motion.h2>

                <motion.p
                  className="text-[#94969c] text-center text-lg md:text-xl"
                  variants={fadeUpVariant}
                >
                  Become a part of Drivys network. Fill out the form below and we will get in touch with you.
                </motion.p>

                <motion.form
                  className="flex flex-col gap-4"
                  variants={fadeUpVariant}
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for joining! We will contact you soon.");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#00a79d]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#00a79d]"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#00a79d]"
                    required
                  />

                  <textarea
                    placeholder="Your Message / Proposal"
                    className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#00a79d] resize-none"
                    rows={5}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full md:w-[200px] mx-auto py-4 px-6 rounded-lg bg-[#00a79d] text-white font-semibold text-lg hover:bg-[#009688] transition-colors"
                  >
                    Submit
                  </button>
                </motion.form>
              </motion.div>
            </section>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Support;
