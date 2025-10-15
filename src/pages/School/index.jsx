import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AppStoreButtons from '../../components/common/AppStoreButtons';
import { motion } from 'framer-motion';

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
    transition: { staggerChildren: 0.2 },
  },
};

const features = [
  { icon: '/images/i1.png', title: 'Affordable Learning', description: 'Drive smarter, spend less' },
  { icon: '/images/i2.png', title: 'Safety Focused', description: 'We emphasise defensive driving' },
  { icon: '/images/i6.png', title: 'Flexible Scheduling', description: 'Our weekday and weekend hours make it easy' },
];

const certificationData = [
  { icon: '/images/n3.png', title: 'Verified Certificates', description: 'Each certificate includes a unique digital ID' },
  { icon: '/images/n2.png', title: 'Nationally Recognized', description: 'Recognized by driving authorities' },
  { icon: '/images/n3.png', title: 'Instant Access', description: 'Get certificates on the app' },
];

const schoolData = [
  {
    icon: '/images/as3.png',
    title: 'School Dashboard',
    subtitle: 'Comprehensive admin control',
    description: 'Get a complete overview of your school at a glance—track attendance, monitor performance, and manage operations efficiently from a single dashboard.',
  },
  {
    icon: '/images/as1.png',
    title: 'Resource Planning',
    subtitle: 'Optimize vehicle and trainer allocation',
    description: 'Optimize and manage your school\'s resources—classrooms, staff, and materials—efficiently to ensure smooth operations.',
  },
  {
    icon: '/images/as4.png',
    title: 'Analytics & Reports',
    subtitle: 'Detailed performance insights',
    description: 'Access detailed analytics and comprehensive reports to track performance, monitor trends, and make data-driven decisions that improve efficiency and outcomes.',
  },
];

const School = () => {
  const sectionRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>Trainer Tools - Mobile App Features | Drivys Professional Platform</title>
        <meta
          name="description"
          content="Discover Drivys mobile app features for driving instructors. Dashboard management, booking system, student progress tracking, ratings & rewards program for professional trainers."
        />
        <meta property="og:title" content="Trainer Tools - Mobile App Features | Drivys Professional Platform" />
        <meta property="og:description" content="Discover Drivys mobile app features for driving instructors. Dashboard management, booking system, student progress tracking, ratings & rewards program for professional trainers." />
      </Helmet>

      <main className="w-full bg-black min-h-screen text-white">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col">
            {/* Header */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px] mt-4 mb-6">
              <Header />
            </div>

            {/* App Download Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px] mb-8 md:mb-12 lg:mb-16">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  ref={sectionRef}
                  className="relative w-full rounded-[20px] md:rounded-[30px] lg:rounded-[39px] overflow-hidden h-[90vh] flex items-end"
                  style={{
                    backgroundImage: 'url(/images/img_image_30.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  variants={fadeUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                  <div className="relative z-10 flex flex-col justify-end items-center text-center px-6 sm:px-8 md:px-10 lg:px-[48px] pb-[60px] sm:pb-[80px] lg:pb-[100px] w-full">
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 items-center">
                      <h2
                        className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[68px]"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        <span className="text-white">Our Driving Journey, </span>
                        <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">On the Go</span>
                      </h2>
                      <p
                        className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold text-white"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Download Now
                      </p>
                      <motion.div className="w-full flex justify-center mt-6" variants={fadeUpVariant}>
                        <AppStoreButtons
                          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto"
                          googlePlayLink="https://play.google.com/store/apps/details?id=com.drivys.mobile"
                          appStoreLink="https://apps.apple.com/ae/app/drivys/id6736641175"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>            {/* School Management Section */}
            <section className="w-full py-[50px] md:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="flex flex-col gap-[40px] md:gap-[50px] lg:gap-[60px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
                    <motion.h2
                      className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[34px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] text-left"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpVariant}
                    >
                      <span className="bg-gradient-to-r from-[#cccccc] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent">
                        School Management.{' '}
                      </span>
                      <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                        Made Easy.
                      </span>
                    </motion.h2>

                    <motion.p
                      className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-normal leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-left text-white w-full lg:w-[50%]"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpVariant}
                    >
                      Manage your school effortlessly with smart tools for scheduling, tracking, and communication—all in one place.
                    </motion.p>
                  </div>

                  <div className="flex flex-col divide-y divide-white/20">
                    {schoolData.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-[35px] md:py-[40px] lg:py-[45px] gap-[20px] md:gap-[30px] lg:gap-[40px]"
                        variants={fadeUpVariant}
                      >
                        <div className="flex items-start gap-4 md:gap-5 lg:gap-6 w-full lg:w-[40%]">
                          <div className="w-[56px] md:w-[60px] h-[56px] md:h-[60px] flex justify-center items-center rounded-full border border-white/20 flex-shrink-0">
                            <img src={feature.icon} alt={feature.title} className="w-[30px] md:w-[32px] h-[30px] md:h-[32px] object-contain" />
                          </div>
                          <div>
                            <h3
                              className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-bold text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#94969c] mt-1"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#cccccc] w-full lg:w-[55%] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px]"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Digital Certification Section */}
            <section className="w-full py-[35px] md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
                    <motion.div className="w-full lg:w-[40%]" variants={fadeUpVariant}>
                      <h2
                        className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[34px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px]"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        <span className="bg-gradient-to-r from-[#cccccc] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent">
                          Digital{' '}
                        </span>
                        <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                          Certification
                        </span>
                      </h2>
                      <p
                        className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#94969c] mt-2"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Get your driving certificate with Drivys.
                      </p>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] md:gap-[20px]">
                    {certificationData.map((item, index) => (
                      <motion.div
                        key={index}
                        className={`bg-[#111111] rounded-lg p-[24px] md:p-[28px] lg:p-[32px] shadow-lg ${
                          index === certificationData.length - 1 ? 'md:col-span-2' : ''
                        }`}
                        variants={fadeUpVariant}
                      >
                        <div className="flex items-center justify-center w-[56px] md:w-[60px] h-[56px] md:h-[60px] mb-[14px] md:mb-[16px] rounded-md border border-gray-700 bg-transparent">
                          <img src={item.icon} alt={item.title} className="w-[30px] md:w-[32px] h-[30px] md:h-[32px] object-contain" />
                        </div>
                        <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-white mb-[8px] md:mb-[10px]">
                          {item.title}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-normal text-gray-400 leading-[22px] md:leading-[26px]">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
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

export default School;