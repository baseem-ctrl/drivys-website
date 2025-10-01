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
    description: 'Optimize and manage your school’s resources—classrooms, staff, and materials—efficiently to ensure smooth operations.',
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
        <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-[10px] md:gap-[20px] lg:gap-[30px]">
          <div className="w-full px-4 sm:px-6 lg:px-[80px]">
            <Header />
          </div>

         <section className="w-full px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <div
                  className="relative w-full rounded-[24px] overflow-hidden flex items-center"
                  style={{
                    backgroundImage: 'url(/images/mobile-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '360px', // ensures enough height for centering
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
                          <span className="text-white font-semibold">Schools</span>
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


          {/* App Download Section */}
          <motion.section
            ref={sectionRef}
            className="w-full px-4 sm:px-6 lg:px-[80px] py-[50px] md:py-[75px] lg:py-[100px]"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative w-full max-w-[1760px] mx-auto rounded-[20px] overflow-hidden h-[90vh] flex items-end" style={{ backgroundImage: 'url(/images/img_image_31.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
              <div className="relative z-10 flex flex-col justify-end items-center text-center px-4 sm:px-6 lg:px-8 pb-[60px] sm:pb-[80px] lg:pb-[100px] w-full">
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 items-center">
                  <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px]" style={{ fontFamily: 'Poppins' }}>
                    <span className="text-white">Our Driving Journey, </span>
                    <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">On the Go</span>
                  </h2>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-bold text-white" style={{ fontFamily: 'Poppins' }}>
                    Download Now
                  </p>
                  <motion.div className="w-full flex justify-center mt-6" variants={fadeUpVariant}>
                    <AppStoreButtons className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* School Management Section */}
          <motion.section className="w-full bg-black text-white py-[50px] md:py-[75px] lg:py-[100px]" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-[80px]">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[25px] md:gap-[37px] lg:gap-[50px] mb-[50px]">
                <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px]" style={{ fontFamily: 'Poppins' }}>
                  School Management. <span className="text-[#f68b2c]">Made Easy.</span>
                </h2>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#94969c] w-full lg:w-[50%]" style={{ fontFamily: 'Poppins' }}>
                  Manage your school effortlessly with smart tools for scheduling, tracking, and communication—all in one place.
                </p>
              </div>

              <div className="flex flex-col divide-y divide-white/20">
                {schoolData.map((feature, index) => (
                  <div key={index} className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-[40px] gap-[25px] md:gap-[37px] lg:gap-[50px]">
                    <div className="flex items-start gap-4 md:gap-6 w-full lg:w-[40%]">
                      <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full border border-white/20">
                        <img src={feature.icon} alt={feature.title} className="w-[32px] h-[32px] object-contain" />
                      </div>
                      <div>
                        <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-white" style={{ fontFamily: 'Poppins' }}>
                          {feature.title}
                        </h3>
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#94969c] mt-1" style={{ fontFamily: 'Poppins' }}>
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#cccccc] w-full lg:w-[55%]" style={{ fontFamily: 'Poppins' }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Digital Certification Section */}
          <motion.section className="w-full bg-black text-white py-[50px] md:py-[75px] lg:py-[100px]" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-[80px]">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-[25px] md:gap-[37px] lg:gap-[50px]">
                <div className="w-full lg:w-[40%]">
                  <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px]" style={{ fontFamily: 'Poppins' }}>
                    Digital <span className="text-[#f68b2c]">Certification</span>
                  </h2>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#94969c] mt-2" style={{ fontFamily: 'Poppins' }}>
                    Get your driving certificate with Drivys.
                  </p>
                </div>

                <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  {certificationData.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`bg-[#111111] rounded-lg p-[28px] lg:p-[32px] shadow-lg ${index === certificationData.length - 1 ? 'md:col-span-2' : ''}`}
                      variants={fadeUpVariant}
                    >
                      <div className="flex items-center justify-center w-[60px] h-[60px] mb-[16px] rounded-md border border-gray-700 bg-transparent">
                        <img src={item.icon} alt={item.title} className="w-[32px] h-[32px] object-contain" />
                      </div>
                      <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-white mb-[10px]">{item.title}</h3>
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal text-gray-400">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default School;
