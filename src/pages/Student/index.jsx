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

const Student = () => {
  const filterOptions = [
    {
      icon: '/images/fi_2.png',
      title: 'Language',
      description: 'Arabic, English, Urdu, Hindi',
    },
    {
      icon: '/images/fi_4.png',
      title: 'Instructor Gender',
      description: 'Male, Female',
    },
    {
      icon: '/images/fi_1.png',
      title: 'Transformation',
      description: 'Automatic, Manual',
    },
    {
      icon: '/images/fi_3.png',
      title: 'Rating Filter',
      description: '5 Stars Rating',
    },
  ];
  const trainingOptions = [
    {
      icon: '/images/s2.png',
      title: 'Manual Training',
      description:
        'Perfect for learners who want full control of the vehicle and the versatility to drive both manual and automatic cars in the future.',
    },
    {
      icon: '/images/s1.png',
      title: 'Automatic Training',
      description:
        'A stress-free option for those who want a smoother learning experience with easier handling and quick mastery.',
    },
  ];

  const certificationData = [
    {
      icon: "/images/certificate-icon.png", // replace with actual icon
      title: "Verified Certificates",
      description: "Each certificate includes a unique digital ID",
    },
    {
      icon: "/images/national-icon.png",
      title: "Nationally Recognized",
      description: "Recognized by driving authorities",
    },
    {
      icon: "/images/instant-icon.png",
      title: "Instant Access",
      description: "Get certificates on the app",
    },
  ];




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
                          <span className="text-white font-semibold">Students</span>
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

            {/* Features & App Section */}
            <section className="w-full bg-black py-[50px] md:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="flex flex-col lg:flex-row justify-between items-center gap-[25px] md:gap-[37px] lg:gap-[50px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {/* Mobile App Preview */}
                  <motion.div
                    className="w-full lg:w-[35%] flex justify-center"
                    variants={fadeUpVariant}
                  >
                    <div className="relative w-full max-w-[360px] lg:max-w-[420px]">
                      <div className="relative bg-black border border-gray-700 rounded-[55px] md:rounded-[65px] lg:rounded-[74px] p-[3px] md:p-[4px] lg:p-[6px]">
                        <div className="bg-black border-[4px] md:border-[5px] lg:border-[6px] border-transparent rounded-[55px] md:rounded-[65px] lg:rounded-[74px] overflow-hidden">
                          <img
                            src="/images/img_screen.png"
                            alt="Drivys Mobile App"
                            className="w-full h-auto rounded-[40px] md:rounded-[48px] lg:rounded-[54px]"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Features + Download */}
                  <motion.div
                    className="w-full lg:w-[60%] flex flex-col gap-[40px]"
                    variants={staggerContainer}
                  >
                    {/* Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                      {features?.map((feature, index) => (
                        <motion.div
                          key={index}
                          className={`bg-[#111111] rounded-lg p-[28px] lg:p-[32px] shadow-lg ${
                            index === features.length - 1 ? 'md:col-span-2' : ''
                          }`}
                          variants={fadeUpVariant}
                        >
                          <div className="flex items-center justify-center w-[60px] h-[60px] mb-[16px] rounded-md border border-gray-700 bg-transparent">
                            <img
                              src={feature?.icon}
                              alt={feature?.title}
                              className="w-[32px] h-[32px] object-contain"
                            />
                          </div>
                          <h3 className="text-[22px] md:text-[26px] lg:text-[28px] font-bold text-white mb-[10px]">
                            {feature?.title}
                          </h3>
                          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal text-gray-400">
                            {feature?.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Download Section */}
                    <motion.div
                      className="w-full lg:w-3/4 flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left"
                      variants={fadeUpVariant}
                    >
                      <AppStoreButtons className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Training Options Section */}
            <section className="w-full py-[50px] md:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="flex flex-col gap-[40px] md:gap-[560px] lg:gap-[60px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-4">
                    <motion.h2
                      className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-left"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpVariant}
                    >
                      <span className="bg-gradient-to-r from-[#cccccc] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent">
                        Training{' '}
                      </span>
                      <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                        Options
                      </span>
                    </motion.h2>

                    <motion.p
                      className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-normal leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-left text-white w-full lg:w-[50%]"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpVariant}
                    >
                      Select the way you want to learn—manual for full control or automatic for
                      convenience, tailored to your driving goals.
                    </motion.p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[25px] lg:gap-[30px]">
                    {trainingOptions?.map((option, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#111111] rounded-lg p-[25px] md:p-[30px] lg:p-[35px] flex flex-col justify-between"
                        variants={fadeUpVariant}
                      >
                        <div className="flex justify-start mb-[20px]">
                          <img
                            src={option?.icon}
                            alt={option?.title}
                            className="w-[55px] md:w-[60px] lg:w-[65px] h-[55px] md:h-[60px] lg:h-[65px]"
                          />
                        </div>
                        <div className="flex flex-col gap-[15px] mt-24">
                          <h3
                            className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] font-semibold leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px] text-left text-white"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {option?.title}
                          </h3>
                          <p
                            className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-left text-white w-full lg:w-[90%]"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {option?.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Perfect Match Section */}
            <section className="w-full py-[35px] md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-[80px]">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="flex flex-col gap-[15px] md:gap-[25px] lg:gap-[35px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-4">
                    <motion.h2
                      className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-extrabold leading-[36px] sm:leading-[42px] md:leading-[48px] lg:leading-[52px] text-left"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpVariant}
                    >
                      <span className="bg-gradient-to-r from-[#cccccc] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent">
                        Perfect{' '}
                      </span>
                      <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                        Match
                      </span>
                    </motion.h2>

                    <motion.p
                      className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-normal leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-left text-white w-full lg:w-[50%]"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpVariant}
                    >
                      Our advanced filtering system helps you find the ideal instructor based on
                      your preferences.
                    </motion.p>
                  </div>

                  {/* Filter Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[15px] lg:gap-[18px]">
                    {filterOptions?.map((option, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#111111] rounded-xl p-[35px] md:p-[45px] lg:p-[55px] flex flex-col gap-[18px] md:gap-[22px] lg:gap-[26px] justify-center items-center"
                        variants={fadeUpVariant}
                      >
                        {/* Icon */}
                        <div className="bg-transparent border border-border-light rounded-[37px] md:rotate-[43px] lg:rounded-[50px] p-[18px] md:p-[21px] lg:p-[24px] flex justify-center items-center">
                          <img
                            src={option?.icon}
                            alt={option?.title}
                            className="w-[37px] md:w-[43px] lg:w-[50px] h-[37px] md:h-[43px] lg:h-[50px]"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-[5px] md:gap-[7px] lg:gap-[8px] justify-center items-center text-center">
                          <h3
                            className="text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] text-white"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {option?.title}
                          </h3>
                          <p
                            className="text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] text-white"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            {option?.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
            

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Student;
