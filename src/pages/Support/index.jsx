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


            {/* Join / Partnership Form Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px] mt-12 mb-12">
              <motion.div
                className="w-full max-w-[1200px] mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[24px] p-8 md:p-12 flex flex-col gap-8 border border-[#FF6B35]/20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  className="text-3xl md:text-5xl font-extrabold text-white text-center bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent"
                  variants={fadeUpVariant}
                >
                  Join With Us / Partnership
                </motion.h2>

                <motion.p
                  className="text-gray-300 text-center text-lg md:text-xl"
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
                      className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                      required
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    required
                  />

                  <textarea
                    placeholder="Your Message / Proposal"
                    className="w-full p-4 rounded-lg border border-gray-700 bg-[#121212] text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 resize-none transition-all"
                    rows={5}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full md:w-[200px] mx-auto py-4 px-6 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-semibold text-lg hover:from-[#F7931E] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#FF6B35]/30"
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