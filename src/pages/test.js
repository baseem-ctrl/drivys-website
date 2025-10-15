import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AppStoreButtons from '../../components/common/AppStoreButtons';

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

const Trainer = () => {
  const downloadRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      if (heroRef.current) {
        const breadcrumb = heroRef.current.querySelector('.breadcrumb');
        const heading = heroRef.current.querySelector('.hero-heading');
        const description = heroRef.current.querySelector('.hero-description');

        gsap.fromTo(
          breadcrumb,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        );

        gsap.fromTo(
          heading,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
        );

        gsap.fromTo(
          description,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );
      }

      // Animate the download section
      const downloadContent = downloadRef.current.querySelector('.content-wrapper');
      const heading = downloadRef.current.querySelector('.heading');
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
          scrollTrigger: {
            trigger: downloadRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger animation for download section elements
      gsap.fromTo(
        [heading, subtext, appButtons],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: downloadRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate feature cards with intersection observer
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

      // Parallax effect for feature images
      const featureImages = document.querySelectorAll('.feature-image');
      featureImages.forEach((img) => {
        gsap.to(img, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, downloadRef);

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
      </Helmet>

      <main className="w-full bg-black min-h-screen text-white">
        <div className="w-full flex flex-col gap-[20px] lg:gap-[30px]">
          {/* Header */}
          <div className="w-full mt-4 flex justify-center">
            <Header />
          </div>

          {/*<section ref={heroRef} className="w-full flex justify-center px-4 sm:px-6">*/}
          {/*  <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1440px]">*/}
          {/*    <div*/}
          {/*      className="relative w-full rounded-[39px] overflow-hidden flex items-center"*/}
          {/*      style={{*/}
          {/*        backgroundImage: 'url(/images/mobile-bg.png)',*/}
          {/*        backgroundSize: 'cover',*/}
          {/*        backgroundPosition: 'center',*/}
          {/*        backgroundRepeat: 'no-repeat',*/}
          {/*        minHeight: '360px',*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-[48px]">*/}
          {/*        /!* Text Area *!/*/}
          {/*        <div className="flex flex-col justify-center items-start w-full lg:w-[58%]">*/}
          {/*          /!* Breadcrumb *!/*/}
          {/*          <div className="breadcrumb bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-solid border-transparent rounded-[10px] px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px] hover-glow">*/}
          {/*            <p*/}
          {/*              className="text-base md:text-lg lg:text-xl font-normal leading-[22px] md:leading-[26px] lg:leading-[30px] text-left text-white"*/}
          {/*              style={{ fontFamily: 'Poppins' }}*/}
          {/*            >*/}
          {/*              <span className="text-white">Home / </span>*/}
          {/*              <span className="text-white font-semibold">Trainer</span>*/}
          {/*            </p>*/}
          {/*          </div>*/}

          {/*          /!* Main Heading *!/*/}
          {/*          <h1*/}
          {/*            className="hero-heading text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[38px] sm:leading-[48px] md:leading-[68px] text-left mt-2"*/}
          {/*            style={{*/}
          {/*              fontFamily: 'Poppins',*/}
          {/*              background:*/}
          {/*                'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',*/}
          {/*              WebkitBackgroundClip: 'text',*/}
          {/*              WebkitTextFillColor: 'transparent',*/}
          {/*              backgroundClip: 'text',*/}
          {/*            }}*/}
          {/*          >*/}
          {/*            Trainer*/}
          {/*          </h1>*/}

          {/*          /!* Description *!/*/}
          {/*          <p*/}
          {/*            className="hero-description text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2"*/}
          {/*            style={{ fontFamily: 'Poppins' }}*/}
          {/*          >*/}
          {/*            Drivys makes learning to drive simple, safe, and flexible with trusted*/}
          {/*            instructors and modern tools.*/}
          {/*          </p>*/}
          {/*        </div>*/}

          {/*        /!* Hero Image *!/*/}
          {/*        <div className="w-full lg:w-[38%] flex justify-center items-center"></div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* App Download Section */}
          <section
            ref={downloadRef}
            className="w-full flex justify-center px-4 sm:px-6 py-[50px] md:py-[75px] lg:py-[100px]"
          >
            <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1440px]">
              <div
                className="relative w-full rounded-[20px] overflow-hidden h-[60vh] download-card"
                style={{
                  backgroundImage: 'url(/images/img_image_30.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

                {/* Content near bottom */}
                <div className="content-wrapper relative z-10 flex flex-col justify-end items-center text-center h-full px-4 sm:px-6 lg:px-8 pb-10">
                  <h2 className="heading text-[24px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-bold leading-tight text-white">
                    <span>Our Driving Journey, </span>
                    <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent bg-[length:200%_100%] gradient-shimmer">
                      On the Go
                    </span>
                  </h2>
                  <p className="subtext text-[14px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold text-white mt-3">
                    Download Now
                  </p>
                  <div className="w-full flex justify-center app-buttons mt-4">
                   <AppStoreButtons
  className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto"
  googlePlayLink="https://apps.apple.com/ae/app/drivys-partner/id6737968293"
  appStoreLink="https://play.google.com/store/apps/details?id=com.drivys.partner"
/>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full flex justify-center px-4 sm:px-6 py-[50px] md:py-[75px] lg:py-[100px] font-[Poppins]">
            <div className="w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1440px]">
              <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[80px] justify-center">
                {/* Left Column */}
                <div className="flex flex-col gap-[30px] md:gap-[45px] lg:gap-[55px] w-full lg:w-[720px] mb-[100px] md:mb-[160px] lg:mb-[200px]">
                  {features
                    .filter((f) => f.position === 'left')
                    .map((feature, idx) => (
                      <div
                        key={feature.id}
                        className="feature-card flex flex-col gap-5 md:gap-7 lg:gap-9 w-full opacity-0"
                        style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                      >
                        <div className="feature-image-wrapper overflow-hidden rounded-lg">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="feature-image w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
                          <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold text-white">
                            {feature.title}
                          </h3>
                          <p className="text-[15px] md:text-[17px] lg:text-[19px] text-white leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-[30px] md:gap-[45px] lg:gap-[55px] w-full lg:w-[720px] mt-0 lg:mt-[160px]">
                  {features
                    .filter((f) => f.position === 'right')
                    .map((feature, idx) => (
                      <div
                        key={feature.id}
                        className="feature-card flex flex-col gap-5 md:gap-7 lg:gap-9 w-full opacity-0"
                        style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: 'forwards' }}
                      >
                        <div className="feature-image-wrapper overflow-hidden rounded-lg">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="feature-image w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 w-full">
                          <h3 className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold text-white">
                            {feature.title}
                          </h3>
                          <p className="text-[15px] md:text-[17px] lg:text-[19px] text-white leading-relaxed">
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

              @keyframes shimmer {
                0% {
                  background-position: 200% center;
                }
                100% {
                  background-position: -200% center;
                }
              }

              @keyframes pulse-glow {
                0%,
                100% {
                  box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
                }
                50% {
                  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
                }
              }

              .animate-fadeInUp {
                animation: fadeInUp 0.6s ease forwards;
              }

              .gradient-shimmer {
                animation: shimmer 3s ease-in-out infinite;
              }

              .hover-glow {
                transition: all 0.3s ease;
              }

              .hover-glow:hover {
                box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
              }

              .download-card {
                transition: transform 0.3s ease;
              }

              .download-card:hover {
                transform: scale(1.01);
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
              }

              .feature-card:hover .feature-image-wrapper::after {
                opacity: 1;
                animation: shimmer 1.5s ease-in-out;
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
            `}</style>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Trainer;
