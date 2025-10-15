import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AppStoreButtons from '../../components/common/AppStoreButtons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

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

// Motion variants
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

const Trainer = () => {
  const sectionRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate download section
      if (downloadRef.current) {
        const downloadContent = downloadRef.current.querySelector('.content-wrapper');
        const downloadHeading = downloadRef.current.querySelector('.heading');
        const subtext = downloadRef.current.querySelector('.subtext');
        const appButtons = downloadRef.current.querySelector('.app-buttons');

        gsap.fromTo(
          downloadContent,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: downloadRef.current, start: 'top 80%' },
          }
        );

        gsap.fromTo(
          [downloadHeading, subtext, appButtons],
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: downloadRef.current, start: 'top 70%' },
          }
        );
      }

      // Animate feature cards
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll('.feature-card');
        const featureImages = sectionRef.current.querySelectorAll('.feature-image');

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

        featureImages.forEach((img) => {
          gsap.to(img, {
            y: -30,
            ease: 'none',
            scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 1 },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
          <div className="flex flex-col">
            {/* Header */}
            <div className="w-full px-4 sm:px-6 lg:px-[80px] mt-4 mb-6">
              <Header />
            </div>

            {/* Hero/App Download Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[80px] mb-8 md:mb-12 lg:mb-16">
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  ref={downloadRef}
                  className="relative w-full rounded-[20px] md:rounded-[30px] lg:rounded-[39px] overflow-hidden h-[90vh] flex items-end"
                  style={{
                    backgroundImage: 'url(/images/img_image_31.jpeg)',
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
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 items-center content-wrapper">
                      <h2
                        className="heading text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-extrabold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[68px]"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        <span className="text-white">Our Driving Journey, </span>
                        <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">On the Go</span>
                      </h2>
                      <p
                        className="subtext text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold text-white"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        Download the Drivys Partner app and manage your training sessions professionally
                      </p>
                      <motion.div className="app-buttons w-full flex justify-center mt-6" variants={fadeUpVariant}>
                        <AppStoreButtons
                          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto"
                          googlePlayLink="https://play.google.com/store/apps/details?id=com.drivys.partner"
                          appStoreLink="https://apps.apple.com/ae/app/drivys-partner/id6737968293"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
            {/* Features Section */}
            <section
              ref={sectionRef}
              className="w-full py-[50px] md:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-[80px]"
            >
              <div className="w-full max-w-[1760px] mx-auto">
                <motion.div
                  className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[80px] justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {/* Left Column */}
                  <div className="flex flex-col gap-[30px] md:gap-[45px] lg:gap-[55px] w-full lg:w-[720px] mb-[50px] md:mb-[80px] lg:mb-[100px]">
                    {features
                      .filter((f) => f.position === 'left')
                      .map((feature, idx) => (
                        <motion.div
                          key={feature.id}
                          className="feature-card flex flex-col gap-5 md:gap-7 lg:gap-9 w-full opacity-0"
                          style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                          variants={fadeUpVariant}
                        >
                          <div className="feature-image-wrapper overflow-hidden rounded-lg">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="feature-image w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
                            <h3
                              className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] font-semibold leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px] text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-[30px] md:gap-[45px] lg:gap-[55px] w-full lg:w-[720px] mt-0 lg:mt-[100px]">
                    {features
                      .filter((f) => f.position === 'right')
                      .map((feature, idx) => (
                        <motion.div
                          key={feature.id}
                          className="feature-card flex flex-col gap-5 md:gap-7 lg:gap-9 w-full opacity-0"
                          style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                          variants={fadeUpVariant}
                        >
                          <div className="feature-image-wrapper overflow-hidden rounded-lg">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="feature-image w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
                            <h3
                              className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[24px] font-semibold leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[34px] text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.title}
                            </h3>
                            <p
                              className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-white"
                              style={{ fontFamily: 'Poppins' }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              </div>

              {/* CSS - Converted to Global Styles */}
              <style>{`
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

                .feature-card {
                  transition: transform 0.3s ease;
                }

                .feature-card:hover {
                  transform: translateY(-5px);
                }

                .feature-card h3 {
                  transition: color 0.3s ease;
                }

                .feature-card:hover h3 {
                  background: linear-gradient(90deg, #f68b2c 0%, #c05a00 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }

                .feature-image-wrapper {
                  position: relative;
                }

                .feature-image-wrapper::after {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: linear-gradient(
                    45deg,
                    transparent 30%,
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 70%
                  );
                  background-size: 200% 200%;
                  opacity: 0;
                  transition: opacity 0.3s ease;
                  pointer-events: none;
                }

                .feature-card:hover .feature-image-wrapper::after {
                  opacity: 1;
                  animation: shimmer 1.5s ease-in-out;
                }

                @keyframes shimmer {
                  0% {
                    background-position: 200% center;
                  }
                  100% {
                    background-position: -200% center;
                  }
                }
              `}</style>
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

export default Trainer;