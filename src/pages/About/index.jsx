import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import AnimatedText from "./AnimatedText";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

import { Typewriter } from "react-simple-typewriter";

// Smooth fade-up animation variant with slower timing
const fadeUpSmooth = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1] // Custom smooth easing
    }
  },
};

// Slower fade-in for hero sections
const fadeInSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  },
};

// Staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Individual item animation for staggered effect
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

// Image fade from left
const imageVariantLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
};

// Content fade from right
const contentVariantRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.2
    }
  },
};

const About = () => {
  // Declare refs at component level
  const sectionRef = useRef(null);
  const leftSideRef = useRef(null);
  const rightSideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left side from left with smoother easing
      gsap.from(leftSideRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate right side from right with smoother easing
      gsap.from(rightSideRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  const servicesData = [
    {
      id: '01',
      title:
        'Get personalized lessons tailored to your needs, covering city driving, highway skills, parking techniques, and more — with top certified instructors guiding you every step.',
    },
    {
      id: '02',
      title:
        'Quickly find your perfect instructor using our advanced, location-based filtering system—matching you by language, vehicle type, gender, and more.',
    },
    {
      id: '03',
      title:
        'Master the skills to drive buses and trucks professionally through specialized, safety-focused programs delivered by experienced trainers.',
    },
    {
      id: '05',
      title:
        "Streamline your school's operations with our smart dashboard for scheduling, student tracking, digital certifications, and detailed performance analytics.",
    },
  ];

  const visionData = [
    {
      id: '01',
      title:
        'Our goal is to transform the driving learning experience into one that is smarter, safer, and more efficient by integrating technology with hands-on expertise, enabling students to learn in a modern,',
    },
    {
      id: '02',
      title:
        'We aim to equip individuals with the necessary skills and full confidence to navigate the roads safely. We believe that driving starts with self-assurance, and we are here to be a key partner in their journey towards success.',
    },
    {
      id: '03',
      title:
        'By providing advanced solutions for scheduling, progress tracking, and digital certificate issuance, we help driving schools and instructors improve their services and deliver an outstanding educational experience to students.',
    },
  ];

  const missionData = [
    {
      id: '01',
      title:
        'Deliver High-Quality Driving Education: Provide learners with professional, accessible, and modern driving instruction to build safer roads for everyone.',
    },
    {
      id: '02',
      title:
        'Empower Instructors and Schools: Equip driving trainers and schools with smart, efficient tools to enhance their services and operations.',
    },
    {
      id: '03',
      title:
        'Promote a Culture of Safe Driving: Foster a strong commitment to responsible and confident driving across all communities we serve.',
    },
  ];

  const text = `We do not just provide a service… we deliver a mission.

For more than twenty-five years, we have believed that leadership is not merely about steering a wheel or shifting gears—it is a journey built on honesty, integrity, discipline, and responsibility, both toward yourself and those who share the road with you. At Drivys, we are not here just to teach driving; we are here to instill confidence and nurture a generation of drivers who lead with ethics before leading with their vehicles.

We have crafted our experience with deep expertise and vision, bringing together the most committed instructors and the latest educational technologies that ensure learners not only acquire skills but live a complete journey—building confidence and a sense of responsibility in every step they take on the road.

We believe that teaching driving is shaping the future, and a safer future begins here, at Drivys, where we passionately work to create a conscious and safe community, contributing to better roads for everyone.

With Drivys, you do not just learn to drive—you discover your path toward confidence, safety, and excellence.

Drivys… Your Road to the Road`;


  return (
    <>
      <Helmet>
        <title>About Drivys - Expert Driving Instructors & Professional Training UAE</title>
        <meta
          name="description"
          content="Learn about Drivys mission to bridge learners with expert driving instructors across UAE. 22+ years experience in professional driving education with modern technology and certified trainers."
        />
        <meta
          property="og:title"
          content="About Drivys - Expert Driving Instructors & Professional Training UAE"
        />
        <meta
          property="og:description"
          content="Learn about Drivys mission to bridge learners with expert driving instructors across UAE. 22+ years experience in professional driving education with modern technology and certified trainers."
        />
      </Helmet>
      <main className="w-full bg-black min-h-screen">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col">
            {/* Header */}
            <motion.div
              className="w-full px-4 sm:px-6 lg:px-[80px] mt-4 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Header />
            </motion.div>

            {/* Hero Section */}
            <motion.section
              className="w-full px-4 sm:px-6 lg:px-[80px]"
              initial="hidden"
              animate="visible"
              variants={fadeInSlow}
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="relative w-full rounded-[39px] overflow-hidden flex items-center"
                  style={{
                    backgroundImage: 'url(/images/mobile-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '360px',
                  }}
                  variants={fadeUpSmooth}
                >
                  <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-[48px]">
                    {/* Text Area */}
                    <motion.div
                      className="flex flex-col justify-center items-start w-full lg:w-[58%]"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Breadcrumb */}
                      <motion.div
                        className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-solid border-transparent rounded-[10px] px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px]"
                        variants={itemVariants}
                      >
                        <p
                          className="text-base md:text-lg lg:text-xl font-normal leading-[22px] md:leading-[26px] lg:leading-[30px] text-left text-white"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          <span className="text-white">Home / </span>
                          <span className="text-white font-semibold">About</span>
                        </p>
                      </motion.div>

                      {/* Main Heading */}
                      <motion.h1
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[38px] sm:leading-[48px] md:leading-[68px] text-left mt-2"
                        style={{
                          fontFamily: 'Poppins',
                          background:
                            'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                        variants={itemVariants}
                      >
                        About Drivys
                      </motion.h1>

                      {/* Description */}
                      <motion.p
                        className="text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2"
                        style={{ fontFamily: 'Poppins' }}
                        variants={itemVariants}
                      >
                        Drivys makes learning to drive simple, safe, and flexible with trusted
                        instructors and modern tools.
                      </motion.p>
                    </motion.div>

                    {/* Hero Image */}
                    <div className="w-full lg:w-[38%] flex justify-center items-center"></div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Main Content Section */}
            <motion.section
              className="w-full py-[50px] md:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-[80px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpSmooth}
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col items-left w-full">
                  {/* Section Title */}
                  <motion.h2
                    className="p-10 text-left text-5xl sm:text-4xl md:text-6xl font-extrabold leading-tight w-full lg:w-2/3 font-poppins bg-gradient-to-r from-[#ccc] via-white to-[#ccc] bg-clip-text text-transparent"
                    variants={fadeUpSmooth}
                  >
                    Bridging Learners with Expert Driving{' '}
                    <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                      UAE
                    </span>
                  </motion.h2>

                  {/* Content Row */}
                  <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-8 lg:mt-12 gap-10">
                    {/* Left Image */}
                    <motion.div
                      className="w-full lg:w-auto flex justify-center lg:justify-start"
                      variants={imageVariantLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <img
                        src="/images/img_freepik_the_st.jpg"
                        alt="Driving instructor teaching a student"
                        className="w-full max-w-[320px] md:max-w-[480px] lg:max-w-[620px] h-auto rounded-xl md:rounded-2xl lg:rounded-3xl"
                      />
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                      className="flex flex-col items-start w-full lg:w-[58%] lg:self-center"
                      variants={contentVariantRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-white w-full lg:w-11/12 font-poppins">
                        At Driyvs, we believe that learning to drive should be simple, safe, and
                        confidence-building. With over 22 years of expertise in training
                        professional driving instructors, our platform was created to bridge the gap
                        between learners and top-tier trainers, delivering a modern, smart driving
                        education experience powered by technology and innovation. We are a fully
                        integrated digital platform that connects students with certified driving
                        instructors across the UAE.
                      </p>


                      {/* Our Story Section */}
                      <motion.h3
                        className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-12 lg:mt-20 font-poppins bg-gradient-to-r from-[#ccc] via-white to-[#ccc] bg-clip-text text-transparent"
                        variants={fadeUpSmooth}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        Our{' '}
                        <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                          Story
                        </span>
                      </motion.h3>

                      <motion.p
                        className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#94969c] w-full mt-3 lg:mt-5 font-poppins"
                        variants={fadeUpSmooth}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        Driyvs was created to transform driving education with certified trainers,
                        modern tools, and flexible learning — making every learner's journey safe
                        and simple.
                      </motion.p>

                      <motion.p
                        className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white w-full lg:w-11/12 mt-6 lg:mt-10 font-poppins"
                        variants={fadeUpSmooth}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        With over 22 years of hands-on experience training driving instructors and
                        developing innovative teaching methods, we recognized a gap: learners needed
                        a modern, accessible, and professional platform to connect with trusted
                        instructors and achieve their driving goals with confidence.
                        <br />
                        <br />
                        Thus, Driyvs was created — a powerful blend of expertise, technology, and a
                        deep commitment to student success. From humble beginnings, we have grown
                        into a dynamic network connecting thousands of learners with certified,
                        top-rated instructors across the country.
                        <br />
                        <br />
                        Every mile driven, every skill mastered, and every license earned is a
                        testament to our unwavering mission: to build safer roads and more confident
                        drivers for tomorrow. We drive dreams forward.
                      </motion.p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
              className="w-full py-[35px] md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-[80px] bg-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[60px]">
                  {/* Left Content */}
                  <motion.div
                    className="flex flex-col justify-start items-start w-full lg:w-[40%] mt-[40px] lg:mt-[120px]"
                    variants={fadeUpSmooth}
                  >
                    <h2
                      className="text-[38px] sm:text-[44px] md:text-[50px] font-extrabold leading-[58px] md:leading-[64px] text-left"
                      style={{
                        fontFamily: 'Poppins',
                        background:
                          'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Our{' '}
                      <span
                        style={{
                          background: 'linear-gradient(90deg, #f68b2c 0%, #c05a00 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        Services
                      </span>
                    </h2>

                    <p
                      className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] text-left text-[#b3b3b3] w-full lg:w-[92%] mt-[20px]"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      At Driyvs, we believe that learning to drive is not just a skill— it's a
                      transformational journey towards confidence and responsibility. That's why our
                      services are carefully crafted to serve students, trainer, and driving schools
                      with a strong commitment to quality and professionalism.
                    </p>
                  </motion.div>

                  {/* Right Services Grid */}
                  <motion.div
                    className="flex flex-col md:flex-row justify-start items-start w-full lg:w-[60%] gap-[20px]"
                    variants={containerVariants}
                  >
                    {/* Left Column */}
                    <motion.div
                      className="flex flex-col gap-[20px] w-full md:w-1/2 mt-0 lg:mt-[60px]"
                      variants={containerVariants}
                    >
                      {/* Service 01 */}
                      <motion.div
                        className="bg-[#141414] rounded-[16px] p-[28px] w-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col gap-[16px] items-start">
                          <div className="border border-[#fff] rounded-[6px] px-3 py-1">
                            <span className="text-white text-[18px] font-semibold font-poppins">
                              01
                            </span>
                          </div>
                          <p className="text-white text-[16px] leading-[26px] font-normal font-poppins">
                            Get personalized lessons tailored to your needs, covering city driving,
                            highway skills, parking techniques, and more — with top certified
                            instructors guiding you every step.
                          </p>
                        </div>
                      </motion.div>

                      {/* Service 03 */}
                      <motion.div
                        className="bg-[#141414] rounded-[16px] p-[28px] w-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col gap-[16px] items-start">
                          <div className="border border-[#fff] rounded-[6px] px-3 py-1">
                            <span className="text-white text-[18px] font-semibold font-poppins">
                              03
                            </span>
                          </div>
                          <p className="text-white text-[16px] leading-[26px] font-normal font-poppins">
                            Master the skills to drive buses and trucks professionally through
                            specialized, safety-focused programs delivered by experienced trainers.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                      className="flex flex-col gap-[20px] w-full md:w-1/2"
                      variants={containerVariants}
                    >
                      {/* Service 02 */}
                      <motion.div
                        className="bg-[#141414] rounded-[16px] p-[28px] w-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col gap-[16px] items-start">
                          <div className="border border-[#fff] rounded-[6px] px-3 py-1">
                            <span className="text-white text-[18px] font-semibold font-poppins">
                              02
                            </span>
                          </div>
                          <p className="text-white text-[16px] leading-[26px] font-normal font-poppins">
                            Quickly find your perfect instructor using our advanced, location-based
                            filtering system—matching you by language, vehicle type, gender, and
                            more.
                          </p>
                        </div>
                      </motion.div>

                      {/* Service 05 */}
                      <motion.div
                        className="bg-[#141414] rounded-[16px] p-[28px] w-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col gap-[16px] items-start">
                          <div className="border border-[#fff] rounded-[6px] px-3 py-1">
                            <span className="text-white text-[18px] font-semibold font-poppins">
                              05
                            </span>
                          </div>
                          <p className="text-white text-[16px] leading-[26px] font-normal font-poppins">
                            Streamline your school's operations with our smart dashboard for
                            scheduling, student tracking, digital certifications, and detailed
                            performance analytics.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Vision Section */}
            <motion.section
              className="w-full py-[32px] md:py-[48px] lg:py-[64px] px-4 sm:px-6 lg:px-[80px] bg-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpSmooth}
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col justify-start items-center w-full gap-[40px] md:gap-[60px] lg:gap-[80px]">
                  <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-center w-full">
                    {/* Section Title */}
                    <motion.h2
                      className="text-[26px] sm:text-[39px] md:text-[52px] font-black leading-[34px] sm:leading-[50px] md:leading-[67px] text-center"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpSmooth}
                    >
                      <span className="text-white">Our </span>
                      <span className="text-[#f68c2d]">Vision</span>
                    </motion.h2>

                    {/* Content Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
                      {/* Left Icon */}
                      <motion.div
                        className="bg-[#141414] rounded-[12px] md:rounded-[18px] lg:rounded-[24px] p-[50px] md:p-[75px] lg:p-[100px_56px] w-full lg:w-[36%] flex justify-center items-center"
                        variants={imageVariantLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <img
                          src="/images/drivys_vision.gif"
                          alt="Vision icon"
                          className="w-[150px] h-[150px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px]"
                        />
                      </motion.div>

                      {/* Right Content */}
                      <motion.div
                        className="flex flex-col gap-[24px] w-full lg:w-[48%]"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {visionData?.map((item, index) => (
                          <motion.div
                            key={index}
                            className="relative w-full"
                            variants={itemVariants}
                            custom={index}
                          >
                            <div className="relative rounded-[12px] p-[22px] md:p-[30px] lg:p-[36px] w-full border border-white bg-black bg-clip-padding">
                              <span className="absolute -top-3 left-6 bg-black px-2 text-[18px] md:text-[22px] lg:text-[24px] font-bold text-white">
                                {item?.id}
                              </span>
                              <p
                                className="relative z-10 text-sm md:text-lg lg:text-[20px] font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-white"
                                style={{ fontFamily: 'Poppins' }}
                              >
                                {item?.title}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Mission Section */}
            <motion.section
              className="w-full py-[32px] md:py-[48px] lg:py-[64px] px-4 sm:px-6 lg:px-[80px] bg-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpSmooth}
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col justify-start items-center w-full gap-[40px] md:gap-[60px] lg:gap-[80px]">
                  <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-center w-full">
                    {/* Section Title */}
                    <motion.h2
                      className="text-[26px] sm:text-[39px] md:text-[52px] font-black leading-[34px] sm:leading-[50px] md:leading-[67px] text-center"
                      style={{ fontFamily: 'Poppins' }}
                      variants={fadeUpSmooth}
                    >
                      <span className="text-white">Our </span>
                      <span className="text-[#f68c2d]">Mission</span>
                    </motion.h2>

                    {/* Content Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
                      {/* Left Content */}
                      <motion.div
                        className="flex flex-col gap-[24px] w-full lg:w-[48%]"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        {missionData?.map((item, index) => (
                          <motion.div
                            key={index}
                            className="relative w-full"
                            variants={itemVariants}
                            custom={index}
                          >
                            <div className="relative rounded-[12px] p-[22px] md:p-[30px] lg:p-[36px] w-full border border-white bg-black bg-clip-padding">
                              <span className="absolute -top-3 left-6 bg-black px-2 text-[18px] md:text-[22px] lg:text-[24px] font-bold text-white">
                                {item?.id}
                              </span>
                              <p
                                className="relative z-10 text-sm md:text-lg lg:text-[20px] font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-white"
                                style={{ fontFamily: 'Poppins' }}
                              >
                                {item?.title}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Right Icon */}
                      <motion.div
                        className="bg-[#141414] rounded-[12px] md:rounded-[18px] lg:rounded-[24px] p-[50px] md:p-[75px] lg:p-[100px_56px] w-full lg:w-[36%] flex justify-center items-center"
                        variants={contentVariantRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <img
                          src="/images/drivys_mission.gif"
                          alt="Mission icon"
                          className="w-[150px] h-[150px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px]"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Professional Trainer Section */}
            <section
              ref={sectionRef}
              className="w-full py-[32px] md:py-[48px] lg:py-[64px] px-4 sm:px-6 lg:px-[80px]"
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between relative">
                  {/* Left Side - Image with Orange Border */}
                  <div
                    ref={leftSideRef}
                    className="relative w-full lg:w-1/2 flex justify-center lg:justify-end lg:-mr-[10%] mb-8 lg:mb-0"
                  >
                    <div className="relative w-full max-w-[680px]">
                      {/* Orange border only on left & bottom */}
                      <div className="absolute -left-[2px] -bottom-[2px] w-full h-full rounded-[20px] border-l-[10px] border-b-[10px] border-[#F97316]"></div>

                      {/* Image */}
                      <img
                        src="/images/img_rectangle_34624998.png"
                        alt="Professional Trainer"
                        className="relative w-full h-auto object-cover rounded-[20px] z-10"
                      />
                    </div>
                  </div>

                  {/* Right Side - Content Box */}
                  <div
                    ref={rightSideRef}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                  >
                    <div className="bg-[#1A1A1A] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-gray-800 w-full max-w-[800px]">
                      {/* Heading popping out */}
                      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight relative -top-4 lg:-top-6 z-10">
                        Professional <span className="text-[#F97316]">Trainer</span>
                      </h2>
                      <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white leading-loose mt-6 font-poppins">
                        At Driyvs, we believe that learning to drive should be simple, safe, and
                        confidence-building. With over 22 years of expertise in training
                        professional driving instructors, our platform was created to bridge the gap
                        between learners and top-tier trainers, delivering a modern, smart driving
                        education experience powered by technology and innovation. We are a fully
                        integrated digital platform that connects students with certified driving
                        instructors across the UAE.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Leadership Message Section */}
            <motion.section
              className="relative w-full py-[60px] md:py-[100px] lg:py-[140px] px-4 sm:px-6 lg:px-[80px] overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpSmooth}
            >
              {/* Full-Width Background Scrolling Text */}
              <motion.div
                className="absolute top-[15%] left-0 w-full overflow-hidden z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1.5 }}
              >
                <div
                  className="whitespace-nowrap animate-marquee font-black text-[40px] sm:text-[50px] md:text-[70px] lg:text-[120px] opacity-20 uppercase tracking-[0.08em] text-transparent"
                  style={{
                    fontFamily: 'Poppins',
                    WebkitTextStrokeWidth: '2px',
                    WebkitTextStrokeColor: 'white',
                  }}
                >
                  Your Road to the Road • Your Road to the Road • Your Road to the Road • Your Road
                  to the Road •
                </div>
              </motion.div>

              <div className="w-full max-w-[1760px] mx-auto relative z-10">
                <div className="flex justify-center items-center w-full relative">
                  {/* Main Box */}
                  <motion.div
                    className="bg-[#141414] rounded-[12px] md:rounded-[18px] lg:rounded-[24px] w-full lg:w-[92%] relative z-10 flex justify-center"
                    variants={fadeUpSmooth}
                  >
                    {/* Content */}
                    <div className="w-full max-w-[850px] flex flex-col gap-[6px] md:gap-[8px] lg:gap-[10px] p-[12px] md:p-[18px] lg:p-[22px] relative z-10 mt-8">
                      {/* Section Title */}
                      <motion.h2
                        className="text-[22px] sm:text-[32px] md:text-[44px] lg:text-[60px] font-black leading-[32px] sm:leading-[44px] md:leading-[60px] text-left"
                        style={{
                          fontFamily: 'Poppins',
                          background:
                            'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                        variants={fadeUpSmooth}
                      >
                        <span>Our Leadership </span>
                        <span
                          style={{
                            background: 'linear-gradient(90deg, #f68b2c 0%, #c05a00 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          Message
                        </span>
                      </motion.h2>

                      {/* Paragraph */}
                      <motion.div
                        className="w-full py-4 md:py-6 lg:py-8"
                        variants={fadeUpSmooth}
                      >
                        <p
                          className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] text-left text-white fade-in-text"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          We do not just provide a service… we deliver a mission.
                          <br />
                          <br />
                          For more than twenty-five years, we have believed that leadership is not
                          merely about steering a wheel or shifting gears—it is a journey built on
                          honesty, integrity, discipline, and responsibility, both toward yourself
                          and those who share the road with you. At Drivys, we are not here just to
                          teach driving; we are here to instill confidence and nurture a generation
                          of drivers who lead with ethics before leading with their vehicles.
                          <br />
                          <br />
                          We have crafted our experience with deep expertise and vision, bringing
                          together the most committed instructors and the latest educational
                          technologies that ensure learners not only acquire skills but live a
                          complete journey—building confidence and a sense of responsibility in
                          every step they take on the road.
                          <br />
                          <br />
                          We believe that teaching driving is shaping the future, and a safer future
                          begins here, at Drivys, where we passionately work to create a conscious
                          and safe community, contributing to better roads for everyone.
                          <br />
                          <br />
                          With Drivys, you do not just learn to drive—you discover your path toward
                          confidence, safety, and excellence.
                          <br />
                          <br />
                          Drivys… Your Road to the Road
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Scrolling animation style */}
              <style jsx>{`
                @keyframes marquee {
                  0% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .animate-marquee {
                  display: inline-block;
                  min-width: 200%;
                  animation: marquee 25s linear infinite;
                }
              `}</style>
            </motion.section>

            {/* Footer */}
            <motion.div
              className="w-full px-4 sm:px-6 lg:px-[80px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Footer />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;