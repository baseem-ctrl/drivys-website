import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import AppStoreButtons from '../../components/common/AppStoreButtons';

const fadeUpVariant = {
  hidden: { opacity: 1, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const Trainer = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      image: '/images/1.png',
      title: 'Dashboard',
      description:
        'Get a complete overview at a glance—track student progress, manage schedules, and access key insights from a single, easy-to-use dashboard.',
      position: 'left',
    },
    {
      id: 2,
      image: '/images/2.png',
      title: 'Bookings',
      description:
        'Easily manage and schedule driving sessions with a seamless booking system designed for both trainers and learners.',
      position: 'right',
    },
    {
      id: 3,
      image: '/images/3.png',
      title: 'Ratings',
      description:
        'Build trust with real student feedback—trainers get rated for their sessions, helping learners choose with confidence.',
      position: 'left',
    },
    {
      id: 4,
      image: '/images/4.png',
      title: 'Rewards',
      description:
        'Earn points and unlock exclusive benefits as you learn and progress—making every milestone more rewarding.',
      position: 'right',
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Heading animation
      gsap.from('.heading', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Animated gradient text
      gsap.to('.heading span.bg-clip-text', {
        backgroundPosition: '200% 0%',
        duration: 2,
        ease: 'linear',
        repeat: -1,
      });

      // Subtext fade in
      gsap.from('.subtext', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // App buttons stagger
      gsap.from('.app-buttons > div', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // IntersectionObserver for feature cards
      if (typeof window !== 'undefined') {
        const cards = document.querySelectorAll('.feature-card');
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        cards.forEach((card) => observer.observe(card));
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Trainer Tools - Mobile App Features | Drivys Professional Platform
        </title>
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

      <main className="w-full bg-black min-h-screen">
        <div className="w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-[10px] md:gap-[20px] lg:gap-[30px] justify-start items-center">
            <div className="w-full px-4 sm:px-6 lg:px-[80px]">
              <Header />
            </div>

            {/* Hero Section */}
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
                        <div className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-solid border-transparent rounded-[10px] px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px]">
                          <p
                            className="text-base md:text-lg lg:text-xl font-normal leading-[22px] md:leading-[26px] lg:leading-[30px] text-left text-white"
                            style={{ fontFamily: 'Poppins' }}
                          >
                            <span className="text-white">Home / </span>
                            <span className="text-white font-semibold">Trainers </span>
                          </p>
                        </div>

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
                          Powerful Tool for Trainers
                        </h1>

                        <p
                          className="text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2 md:mt-3 lg:mt-4"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          Smart tools to help trainers manage students, track progress, and deliver
                          better lessons.
                        </p>
                      </div>

                      <div className="w-full lg:w-[38%] flex justify-center items-center mt-6 lg:mt-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* GSAP + Motion Section */}
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

                    <motion.div
                      className="w-full flex justify-center app-buttons"
                      variants={fadeUpVariant}
                    >
                      <AppStoreButtons className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Features Section */}
            <section className="w-full py-[20px] md:py-[35px] lg:py-[45px] lg:px-12">
              <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-8 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[80px] w-full">
                  {/* Left Column */}
                  <div className="flex flex-col gap-[25px] md:gap-[40px] lg:gap-[50px] justify-start items-center w-full lg:w-[720px] mb-[120px] md:mb-[200px] lg:mb-[250px]">
                    {features
                      .filter((f) => f.position === 'left')
                      .map((feature, index) => (
                        <div
                          key={feature.id}
                          className="feature-card flex flex-col gap-6 md:gap-8 lg:gap-[30px] justify-start items-center w-full opacity-0"
                          style={{
                            animationDelay: `${index * 0.15}s`,
                            animationFillMode: 'forwards',
                          }}
                        >
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full rounded-lg lg:rounded-[16px]"
                          />
                          <div className="flex flex-col gap-3 md:gap-4 lg:gap-[12px] justify-start items-start w-full pr-[16px] md:pr-[24px] lg:pr-[32px]">
                            <h3
                              className="text-[16px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[44px] text-left text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[20px] sm:leading-[26px] md:leading-[30px] lg:leading-[36px] text-left text-white w-full"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-[25px] md:gap-[40px] lg:gap-[50px] justify-start items-center w-full lg:w-[720px] mt-0 lg:mt-[160px] md:mt-[220px] lg:mt-[280px]">
                    {features
                      .filter((f) => f.position === 'right')
                      .map((feature, index) => (
                        <div
                          key={feature.id}
                          className="feature-card flex flex-col gap-6 md:gap-8 lg:gap-[30px] justify-start items-center w-full opacity-0"
                          style={{
                            animationDelay: `${index * 0.15}s`,
                            animationFillMode: 'forwards',
                          }}
                        >
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full rounded-lg lg:rounded-[16px]"
                          />
                          <div className="flex flex-col gap-3 md:gap-4 lg:gap-[12px] justify-start items-start w-full pr-[16px] md:pr-[24px] lg:pr-[32px]">
                            <h3
                              className="text-[16px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-bold leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[44px] text-left text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[20px] sm:leading-[26px] md:leading-[30px] lg:leading-[36px] text-left text-white w-full"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <style jsx>{`
                @keyframes fadeInUp {
                  0% {
                    opacity: 0;
                    transform: translateY(15px);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                .animate-fadeInUp {
                  animation: fadeInUp 0.6s ease forwards;
                }

                @media (min-width: 1024px) {
                  .lg\\:px-12 {
                    padding-left: 7rem;
                    padding-right: 7rem;
                  }
                }
              `}</style>
            </section>

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Trainer;
