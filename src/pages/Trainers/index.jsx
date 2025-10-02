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

  useEffect(() => {
    // Animate the download section once
    const ctx = gsap.context(() => {
      const downloadContent = downloadRef.current.querySelector('.content-wrapper');
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
            toggleActions: 'play none none none', // animate once
          },
        }
      );

      // Animate feature cards individually
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
        <div className="w-full max-w-[1920px] mx-auto flex flex-col gap-[20px] lg:gap-[30px]">
          {/* Header */}
          <div className="px-4 sm:px-6 lg:px-[80px] mt-4">
            <Header />
          </div>

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
                          <span className="text-white font-semibold">About Us</span>
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
          <section
            ref={downloadRef}
            className="w-full px-4 sm:px-6 lg:px-[80px] py-[50px] md:py-[75px] lg:py-[100px]"
          >
            <div
              className="relative w-full max-w-[1760px] mx-auto rounded-[20px] overflow-hidden h-[60vh]"
              style={{
                backgroundImage: 'url(/images/img_image_30.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

              {/* Content near bottom */}
              <div className="relative z-10 flex flex-col justify-end items-center text-center h-full px-4 sm:px-6 lg:px-8 pb-10">
                <h2 className="heading text-[24px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-bold leading-tight text-white">
                  <span>Our Driving Journey, </span>
                  <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent bg-[length:200%_100%]">
          On the Go
        </span>
                </h2>
                <p className="subtext text-[14px] sm:text-[20px] md:text-[24px] lg:text-[26px] font-bold text-white mt-3">
                  Download Now
                </p>
                <div className="w-full flex justify-center app-buttons mt-4">
                  <AppStoreButtons className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-auto" />
                </div>
              </div>
            </div>
          </section>


          {/* Features Section */}
          <section className="w-full py-[50px] md:py-[75px] lg:py-[100px] px-4 sm:px-6 lg:px-[80px] font-[Poppins]">
            <div className="w-full max-w-[1760px] mx-auto flex flex-col lg:flex-row gap-[40px] md:gap-[60px] lg:gap-[80px] justify-center">
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
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-contain rounded-lg"
                      />
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
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-contain rounded-lg"
                      />
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
            `}</style>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Trainer;
