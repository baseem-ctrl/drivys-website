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
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
const features = [
  {
    icon: '/images/i1.png',
    title: 'Affordable Learning',
    description: 'Drive smarter, spend less',
  },
  {
    icon: '/images/i2.png',
    title: 'Safety Focused',
    description: 'We emphasise defensive driving',
  },
  {
    icon: '/images/i6.png',
    title: 'Flexible Scheduling',
    description: 'Our weekday and weekend hours make it easy',
  },
];

const certificationData = [
  {
    icon: '/images/n3.png', // replace with actual icon
    title: 'Verified Certificates',
    description: 'Each certificate includes a unique digital ID',
  },
  {
    icon: '/images/n2.png',
    title: 'Nationally Recognized',
    description: 'Recognized by driving authorities',
  },
  {
    icon: '/images/n3.png',
    title: 'Instant Access',
    description: 'Get certificates on the app',
  },
];

const schoolData = [
  {
    icon: '/images/as3.png', // replace with your own icon
    title: 'School Dashboard',
    subtitle: 'Comprehensive admin control',
    description:
      'Get a complete overview of your school at a glance—track attendance, monitor performance, and manage operations efficiently from a single dashboard.',
  },
  {
    icon: '/images/as1.png',
    title: 'Resource Planning',
    subtitle: 'Optimize vehicle and trainer allocation',
    description:
      'Optimize and manage your school’s resources—classrooms, staff, and materials—efficiently to ensure smooth operations.',
  },
  {
    icon: '/images/as4.png',
    title: 'Analytics & Reports',
    subtitle: 'Detailed performance insights',
    description:
      'Access detailed analytics and comprehensive reports to track performance, monitor trends, and make data-driven decisions that improve efficiency and outcomes.',
  },
];

const School = () => {
  const sectionRef = useRef(null);
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut' },
    },
  };

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
            <div className="w-full px-4 sm:px-6 lg:px-[80px]">
              <Header />
            </div>

            <section className="w-full px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <div
                  className="relative w-full rounded-[24px] overflow-hidden"
                  style={{
                    backgroundImage: 'url(/images/img_image_29.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="flex flex-col lg:flex-row justify-start items-end w-full min-h-[200px] md:min-h-[280px] lg:min-h-[360px]">
                    <div className="flex flex-col lg:flex-row justify-center items-start w-full mt-[20px] md:mt-[32px] lg:mt-[40px]">
                      <div className="flex flex-col justify-start items-start w-full lg:w-[58%] mt-[24px] md:mt-[36px] lg:mt-[48px] px-4 lg:px-[48px]">
                        {/* Breadcrumb */}
                        <div className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-solid border-transparent rounded-[10px] px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px]">
                          <p
                            className="text-base md:text-lg lg:text-xl font-normal leading-[22px] md:leading-[26px] lg:leading-[30px] text-left text-white"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            <span className="text-white">Home / </span>
                            <span className="text-white font-semibold">School</span>
                          </p>
                        </div>

                        {/* Main Heading */}
                        <h1
                          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[38px] sm:leading-[48px] md:leading-[68px] text-left mt-2 md:mt-3 lg:mt-4"
                          style={{
                            fontFamily: 'Poppins',
                            background:
                              'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          Master Skills. Drive safely.
                        </h1>

                        {/* Description */}
                        <p
                          className="text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2 md:mt-3 lg:mt-4"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          Your journey to becoming a confident driver starts here.
                        </p>
                      </div>

                      {/* Hero Image */}
                      <div className="w-full lg:w-[38%] flex justify-center items-center mt-6 lg:mt-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <motion.section
              ref={sectionRef}
              className="w-full px-4 sm:px-6 lg:pl-[106px] lg:pr-[89px] py-0"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="relative w-full max-w-[1760px] mx-auto rounded-[20px] overflow-hidden h-[90vh] flex items-end"
                style={{
                  backgroundImage: 'url(/images/img_image_31.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

                <div className="relative z-10 flex flex-col justify-end items-center text-center px-4 sm:px-6 lg:px-8 pb-[60px] sm:pb-[80px] lg:pb-[100px] w-full">
                  <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 items-center">
                    <h2
                      className="heading text-[24px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-bold leading-tight"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      <span className="text-white">Our Driving Journey, </span>
                      <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent bg-[length:200%_100%]">
                        On the Go
                      </span>
                    </h2>
                    <p
                      className="subtext text-[14px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Download Now
                    </p>
                    <motion.div className="w-full flex justify-center" variants={fadeUpVariant}>
                      <AppStoreButtons className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* School Management Section */}
            <motion.section
              className="w-full bg-black text-white py-[30px] md:py-[60px] lg:py-[90px]"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-[96px]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-[50px]">
                  <h2
                    className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]"
                    style={{ fontFamily: 'Poppins', marginTop: '20px' }}
                  >
                    School Management. <br />
                    <span className="text-[#f68b2c]">Made Easy.</span>
                  </h2>
                  <p
                    className="text-[#94969c] text-base md:text-lg lg:text-xl max-w-[600px]"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Manage your school effortlessly with smart tools for scheduling, tracking, and
                    communication—all in one place.
                  </p>
                </div>

                <div className="flex flex-col divide-y divide-white/20">
                  {schoolData.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center py-[40px] gap-6"
                    >
                      <div className="flex items-start gap-4 md:gap-6 w-full md:w-[40%]">
                        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full border border-white/20">
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-[28px] h-[28px] object-contain"
                          />
                        </div>
                        <div>
                          <h3
                            className="text-xl md:text-2xl font-bold"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className="text-sm md:text-base text-[#94969c] mt-1"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>
                      <p
                        className="text-base md:text-lg text-[#cccccc] w-full md:w-[55%]"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Digital Certification Section */}
            <motion.section
              className="w-full bg-black text-white py-[60px] md:py-[90px] lg:py-[120px]"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-[96px]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                  <div className="w-full md:w-[40%]">
                    <h2
                      className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-tight"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Digital <span className="text-[#f68b2c]">Certification</span>
                    </h2>
                    <p
                      className="text-[#94969c] text-base md:text-lg lg:text-xl mt-3"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Get your driving certificate with Driyvs.
                    </p>
                  </div>

                  <div className="w-full md:w-[55%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                      {certificationData.map((item, index) => (
                        <motion.div
                          key={index}
                          className={`bg-[#111111] rounded-lg p-[28px] lg:p-[32px] shadow-lg ${
                            index === certificationData.length - 1 ? 'md:col-span-2' : ''
                          }`}
                          variants={fadeUpVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                        >
                          <div className="flex items-center justify-center w-[60px] h-[60px] mb-[16px] rounded-md border border-gray-700 bg-transparent">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="w-[32px] h-[32px] object-contain"
                            />
                          </div>
                          <h3 className="text-[17px] md:text-[21px] lg:text-[23px] font-bold text-white mb-[10px]">
                            {item.title}
                          </h3>
                          <p className="text-[11px] md:text-[13px] lg:text-[15px] font-normal text-gray-400">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default School;
