import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import AppStoreButtons from '../../components/common/AppStoreButtons';

const features = [
  {
    id: 1,
    icon: '/images/drivys_booking.gif',
    title: 'Real-time instructor booking',
    description:
      'Schedule driving lessons instantly with certified instructors, offering flexibility and convenience that fits your lifestyle.',
  },
  {
    id: 2,
    imageOnly: true,
    image: '/images/mid.jpeg',
    hasDownloadSection: true,
  },
  {
    id: 3,
    icon: '/images/drivys-time-management.gif',
    title: 'Flexible scheduling',
    description:
      'Plan your lessons around your busy life, making learning to drive convenient, stress-free, and fully tailored to you.',
  },
  {
    id: 4,
    icon: '/images/drivys_analytics.gif',
    title: 'Track your progress',
    description:
      'Follow your growth, stay aligned with your instructor, track every lesson, and learn efficiently.',
  },
  {
    id: 5,
    icon: '/images/drivys-certificate.gif',
    title: 'Digital certifications',
    description: ' Receive official school-certified digital certificates upon course completion.',
  },
];

const ProgramsSection = () => {
  return (
    <section className="w-full bg-black py-16 lg:py-24">
      <motion.div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
          <div className="flex flex-col gap-3">
            <Button
              text="Features"
              className="text-white text-base font-normal px-4 py-2 rounded-lg w-fit"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
              <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                The Drivys
              </span>{' '}
              <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                Platform
              </span>
            </h2>
          </div>
          <div className="lg:w-[28%]">
            <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
              Your all-in-one platform to manage every step of your driving journey.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={`flex flex-col gap-6 ${feature.hasDownloadSection ? 'lg:row-span-2' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: feature.id * 0.1 }}
            >
              {/* Image-only feature with zoom effect */}
              {feature.imageOnly ? (
                <motion.div
                  className="w-full h-full cursor-pointer overflow-hidden rounded-md shadow-lg"
                  whileHover="hover"
                >
                  <motion.img
                    src={feature.image}
                    alt="Track your progress"
                    className="w-full h-full object-cover rounded-md"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </motion.div>
              ) : (
                // Feature Card
                <motion.div
                  className="bg-[#121212] rounded-md p-6 lg:p-8 flex flex-col h-full hover:scale-[1.03] transition-transform duration-300 shadow-lg group"
                  initial="initial"
                  whileHover="hover"
                  style={{ perspective: 1000 }}
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                      {/* Icon wrapper (no color change effect now) */}
                      <motion.div
                        className="w-fit p-4 rounded-[60px] shadow-lg"
                        style={{
                          background: 'linear-gradient(to top right, #ffffff40, #ffffff00)',
                        }}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }} // subtle scale only
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{feature.description}</p>
                    </div>
                    {/* Bottom bar */}
                    <div className="relative w-full h-[2px] rounded bg-gray-800 overflow-hidden mt-6">
                      <div className="absolute left-0 top-0 h-full w-full bg-orange-500 shadow-md origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Download Section for special feature */}
              {feature.hasDownloadSection && (
                <div className="bg-[#1a1a1a]/70 rounded-md p-8 flex flex-col items-center text-center shadow-[0px_0px_80px_#ffffff1a]">
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                    Download Now
                  </h4>
                  <h5 className="text-2xl md:text-lg font-semibold text-white mb-6">
                    And Book Your First Lesson Instantly
                  </h5>
                  <AppStoreButtons
                    className="justify-center mt-4"
                    googlePlayLink="https://play.google.com/store/apps/details?id=com.drivys.mobile"
                    appStoreLink="https://apps.apple.com/ae/app/drivys/id6736641175"
                  />{' '}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProgramsSection;
