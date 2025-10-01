import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

import HeroSection from './HeroSection';
import InstructorSection from './InstructorSection';
import ProgramsSection from './ProgramsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import Footer from '../../components/common/Footer';
import VehicleCarousel from './SliderSection';

const Home = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const [showAd, setShowAd] = useState(false);

  // Greeting screen for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Show Ad after 3 seconds
  useEffect(() => {
    const adTimer = setTimeout(() => setShowAd(true), 7000);
    return () => clearTimeout(adTimer);
  }, []);

  const confettiColors = ['#FFD700', '#FF4C4C', '#4CFF4C', '#4CB8FF', '#FF4CD1'];
  const confettiArray = Array.from({ length: 50 });

  return (
    <>
      <Helmet>
        <title>
          Professional Driving School | Certified Instructors & Flexible Training | Drivys
        </title>
        <meta
          name="description"
          content="Learn to drive with certified professional instructors at Drivys. Choose from car, bus, and truck training programs with flexible scheduling, real-time booking, and comprehensive packages starting from 599 AED. Trusted by 1000+ students across the UAE."
        />
      </Helmet>

      <main className="w-full bg-black relative overflow-hidden">
        {/* Launch Animation */}
        <AnimatePresence>
          {showGreeting && (
            <motion.div
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {confettiArray.map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-6 rounded-full"
                  style={{
                    backgroundColor:
                      confettiColors[Math.floor(Math.random() * confettiColors.length)],
                    left: `${Math.random() * 100}%`,
                    top: '-10%',
                  }}
                  initial={{ y: -50, rotate: 0, opacity: 1 }}
                  animate={{
                    y: ['-10%', '110%'],
                    rotate: [0, 360, 720],
                    x: [`0%`, `${Math.random() * 20 - 10}%`],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              <motion.img
                src="/images/img_logo_animation_2.gif"
                alt="Drivys Logo"
                className="w-72 md:w-96 lg:w-[500px] z-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />

              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold mt-12 text-center z-10 
             text-[rgb(192,90,0)] font-poppins"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
              >
                Welcome to the new era of driving
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white mt-6 text-center z-10 font-poppins"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                Let’s hit the road with confidence
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ad Modal */}
        <AnimatePresence>
          {showAd && !showGreeting && (
            <motion.div
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative  rounded-2xl shadow-2xl p-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Ad Image */}
                <img
                  src="/images/mid.jpeg"
                  alt="Advertisement"
                  className="max-w-[90vw] max-h-[80vh] rounded-xl"
                />

                {/* Close button */}
                <button
                  onClick={() => setShowAd(false)}
                  className="absolute top-2 right-2 bg-black text-white rounded-full px-3 py-1 text-sm hover:bg-gray-700"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        {!showGreeting && (
          <>
            <HeroSection />
            <InstructorSection />
            <ProgramsSection />
            <div className="hidden lg:block">
              <WhyChooseUsSection />
            </div>
            <VehicleCarousel />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-6">
              <div className="w-full h-[1px] bg-white/40 mb-8"></div>
              <Footer />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
