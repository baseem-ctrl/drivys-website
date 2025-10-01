import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const About = () => {
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
          <div className="flex flex-col gap-[50px] md:gap-[75px] lg:gap-[100px] justify-start items-center">
            {/* Header */}
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
                            <span className="text-white font-semibold">About Us</span>
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
                          About Drivys
                        </h1>

                        {/* Description */}
                        <p
                          className="text-base md:text-xl lg:text-2xl font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-[#94969c] w-full lg:w-[64%] mt-2 md:mt-3 lg:mt-4"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          Drivys makes learning to drive simple, safe, and flexible with trusted
                          instructors and modern tools.
                        </p>
                      </div>

                      {/* Hero Image */}
                      <div className="w-full lg:w-[38%] flex justify-center items-center mt-6 lg:mt-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full px-4 sm:px-6 lg:px-20">
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col items-left w-full">
                  {/* Section Title */}
                  <h2 className="p-10 text-left text-5xl sm:text-4xl md:text-6xl font-extrabold leading-tight w-full lg:w-2/3 font-poppins bg-gradient-to-r from-[#ccc] via-white to-[#ccc] bg-clip-text text-transparent">
                    Bridging Learners with Expert Driving{' '}
                    <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                      UAE
                    </span>
                  </h2>

                  {/* Content Row */}
                  <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-8 lg:mt-12 gap-10">
                    {/* Left Image */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-start">
                      <img
                        src="/images/img_freepik_the_st.png"
                        alt="Driving instructor teaching a student"
                        className="w-full max-w-[320px] md:max-w-[480px] lg:max-w-[620px] h-auto rounded-xl md:rounded-2xl lg:rounded-3xl"
                      />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col items-start w-full lg:w-[58%] lg:self-center">
                      {/* Main Description */}
                      <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white w-full lg:w-11/12 font-poppins">
                        At Driyvs, we believe that learning to drive should be simple, safe, and
                        confidence-building. With over 22 years of expertise in training
                        professional driving instructors, our platform was created to bridge the gap
                        between learners and top-tier trainers, delivering a modern, smart driving
                        education experience powered by technology and innovation. We are a fully
                        integrated digital platform that connects students with certified driving
                        instructors across the UAE.
                      </p>

                      {/* Our Story Section */}
                      <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-12 lg:mt-20 font-poppins bg-gradient-to-r from-[#ccc] via-white to-[#ccc] bg-clip-text text-transparent">
                        Our{' '}
                        <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
                          Story
                        </span>
                      </h3>

                      <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#94969c] w-full mt-3 lg:mt-5 font-poppins">
                        Driyvs was created to transform driving education with certified trainers,
                        modern tools, and flexible learning — making every learner's journey safe
                        and simple.
                      </p>

                      <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-white w-full lg:w-11/12 mt-6 lg:mt-10 font-poppins">
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
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full px-4 sm:px-6 lg:px-[80px] bg-black">
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-[60px]">
                  {/* Left Content */}
                  <div className="flex flex-col justify-start items-start w-full lg:w-[40%] mt-[40px] lg:mt-[120px]">
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
                      At Driyvs, we believe that learning to drive is not just a skill— it’s a
                      transformational journey towards confidence and responsibility. That’s why our
                      services are carefully crafted to serve students, trainer, and driving schools
                      with a strong commitment to quality and professionalism.
                    </p>
                  </div>

                  {/* Right Services Grid */}
                  <div className="flex flex-col md:flex-row justify-start items-start w-full lg:w-[60%] gap-[20px]">
                    {/* Left Column (goes down a bit) */}
                    <div className="flex flex-col gap-[20px] w-full md:w-1/2 mt-0 lg:mt-[60px]">
                      {/* Service 01 */}
                      <div className="bg-[#141414] rounded-[16px] p-[28px] w-full">
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
                      </div>

                      {/* Service 03 */}
                      <div className="bg-[#141414] rounded-[16px] p-[28px] w-full">
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
                      </div>
                    </div>

                    {/* Right Column (higher) */}
                    <div className="flex flex-col gap-[20px] w-full md:w-1/2">
                      {/* Service 02 */}
                      <div className="bg-[#141414] rounded-[16px] p-[28px] w-full">
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
                      </div>

                      {/* Service 05 */}
                      <div className="bg-[#141414] rounded-[16px] p-[28px] w-full">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full px-4 sm:px-6 lg:px-[132px] py-[32px] md:py-[48px] lg:py-[64px] bg-black">
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col justify-start items-center w-full gap-[40px] md:gap-[60px] lg:gap-[80px]">
                  <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-center w-full">
                    {/* Section Title */}
                    <h2
                      className="text-[26px] sm:text-[39px] md:text-[52px] font-black leading-[34px] sm:leading-[50px] md:leading-[67px] text-center"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      <span className="text-white">Our </span>
                      <span className="text-[#f68c2d]">Vision</span>
                    </h2>

                    {/* Content Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
                      {/* Left Icon */}
                      <div className="bg-[#141414] rounded-[12px] md:rounded-[18px] lg:rounded-[24px] p-[50px] md:p-[75px] lg:p-[100px_56px] w-full lg:w-[36%] flex justify-center items-center">
                        <img
                          src="/images/img_fi_6179903.png"
                          alt="Vision icon"
                          className="w-[150px] h-[150px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px]"
                        />
                      </div>

                      {/* Right Content */}
                      <div className="flex flex-col gap-[24px] w-full lg:w-[48%]">
                        {visionData?.map((item, index) => (
                          <div key={index} className="relative w-full">
                            <div className="relative rounded-[12px] p-[22px] md:p-[30px] lg:p-[36px] w-full border border-white bg-black bg-clip-padding">
                              {/* Number inside border */}
                              <span className="absolute -top-3 left-6 bg-black px-2 text-[18px] md:text-[22px] lg:text-[24px] font-bold text-white">
                                {item?.id}
                              </span>

                              {/* Text */}
                              <p
                                className="relative z-10 text-sm md:text-lg lg:text-[20px] font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-white"
                                style={{ fontFamily: 'Poppins' }}
                              >
                                {item?.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="w-full px-4 sm:px-6 lg:px-[132px] py-[32px] md:py-[48px] lg:py-[64px] bg-black">
              <div className="w-full max-w-[1760px] mx-auto">
                <div className="flex flex-col justify-start items-center w-full gap-[40px] md:gap-[60px] lg:gap-[80px]">
                  <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] justify-start items-center w-full">
                    {/* Section Title */}
                    <h2
                      className="text-[26px] sm:text-[39px] md:text-[52px] font-black leading-[34px] sm:leading-[50px] md:leading-[67px] text-center"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      <span className="text-white">Our </span>
                      <span className="text-[#f68c2d]">Mission</span>
                    </h2>

                    {/* Content Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
                      {/* Left Content */}
                      <div className="flex flex-col gap-[24px] w-full lg:w-[48%]">
                        {missionData?.map((item, index) => (
                          <div key={index} className="relative w-full">
                            <div className="relative rounded-[12px] p-[22px] md:p-[30px] lg:p-[36px] w-full border border-white bg-black bg-clip-padding">
                              {/* Number inside border */}
                              <span className="absolute -top-3 left-6 bg-black px-2 text-[18px] md:text-[22px] lg:text-[24px] font-bold text-white">
                                {item?.id}
                              </span>

                              {/* Text */}
                              <p
                                className="relative z-10 text-sm md:text-lg lg:text-[20px] font-normal leading-[24px] md:leading-[30px] lg:leading-[34px] text-left text-white"
                                style={{ fontFamily: 'Poppins' }}
                              >
                                {item?.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Icon */}
                      <div className="bg-[#141414] rounded-[12px] md:rounded-[18px] lg:rounded-[24px] p-[50px] md:p-[75px] lg:p-[100px_56px] w-full lg:w-[36%] flex justify-center items-center">
                        <img
                          src="/images/img_fi_1628441.png"
                          alt="Mission icon"
                          className="w-[150px] h-[150px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-start py-12 lg:py-20 px-4 sm:px-6 lg:px-32 gap-12 lg:gap-24">
              {/* Left Side - Image with Orange Background */}
              <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[520px]">
                  {/* Orange border only on left & bottom */}
                  <div className="absolute -left-[2px] -bottom-[2px] w-full h-full rounded-[20px] border-l-[10px] border-b-[10px] border-[#F97316]"></div>

                  {/* Image */}
                  <img
                    src="/images/img_rectangle_34624998.png"
                    alt="Professional Trainer"
                    className="relative w-full h-auto object-cover rounded-[20px] z-10"
                  />
                </div>

                {/* Overlapping Content Box */}
                <div className="absolute left-1/2 lg:left-[100%] top-full lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 lg:-translate-x-1/4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[130%] max-w-[800px] mt-6 lg:mt-0 z-20">
                  <div className="bg-[#1A1A1A] rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl border border-gray-800">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                      Professional <span className="text-[#F97316]">Trainer</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-white leading-">
                      At Driyvs, we take pride in our team of certified, highly experienced driving
                      trainers who are dedicated to providing the highest quality of education. Each
                      instructor is not only skilled in their craft but also passionate about
                      helping students build confidence. With personalized trainers, they focus on
                      your individual needs, ensuring that you master every aspect of driving safely
                      and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative w-full px-4 sm:px-6 lg:px-[136px] py-[100px] md:py-[150px] lg:py-[200px] overflow-hidden">
              {/* Full-Width Background Scrolling Text */}
              <div className="absolute top-[20%] left-0 w-full overflow-hidden z-0">
                <div
                  className="whitespace-nowrap animate-marquee font-black text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] opacity-20 uppercase tracking-[0.1em] text-transparent"
                  style={{
                    fontFamily: 'Poppins',
                    WebkitTextStrokeWidth: '3px',
                    WebkitTextStrokeColor: 'white',
                  }}
                >
                  Your Road to the Road • Your Road to the Road • Your Road to the Road • Your Road
                  to the Road •
                </div>
              </div>

              <div className="w-full max-w-[1760px] mx-auto relative z-10">
                <div className="flex justify-center items-center w-full relative">
                  {/* Main Box - stays centered */}
                  <div
                    className="bg-[#141414] rounded-[12px] md:rounded-[18px] lg:rounded-[24px] w-full lg:w-[92%] relative z-10 flex justify-center"
                    data-aos="zoom-in"
                  >
                    {/* Content - centered box, left aligned text */}
                    <div className="w-full max-w-[850px] flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px] p-[13px] md:p-[20px] lg:p-[26px] relative z-10 mt-10">
                      {/* Section Title */}
                      <h2
                        className="text-[26px] sm:text-[39px] md:text-[52px] font-black leading-[39px] sm:leading-[59px] md:leading-[72px] text-left"
                        style={{
                          fontFamily: 'Poppins',
                          background:
                            'linear-gradient(270deg, #cccccc 0%, #ffffff 50%, #cccccc 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                        data-aos="fade-up"
                      >
                        <span>Our Leadership </span>
                        <span
                          style={{
                            background: 'linear-gradient(90deg, #f68b2c 0%, #c05a00 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                          data-aos="zoom-in"
                          data-aos-delay="100"
                        >
                          Message
                        </span>
                      </h2>

                      {/* Paragraph */}
                      <div
                        className="w-full py-6 md:py-8 lg:py-10"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        style={{ fontSize:'20px' }}
                      >
                        <p
                          className="text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed md:leading-[26px] lg:leading-[30px] text-left text-white"
                          style={{ fontFamily: 'Poppins',
                            fontSize:'20px'
                           }}
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
                      </div>
                    </div>
                  </div>
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
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
