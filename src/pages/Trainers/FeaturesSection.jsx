import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      image: '/images/img_11728353_1.png',
      title: 'Dashboard',
      description: 'Get a complete overview at a glance—track student progress, manage schedules, and access key insights from a single, easy-to-use dashboard.',
      position: 'left'
    },
    {
      id: 2,
      image: '/images/img_11728359_1.png',
      title: 'Bookings',
      description: 'Easily manage and schedule driving sessions with a seamless booking system designed for both trainers and learners.',
      position: 'right'
    },
    {
      id: 3,
      image: '/images/img_11728359_2.png',
      title: 'Ratings',
      description: 'Build trust with real student feedback—trainers get rated for their sessions, helping learners choose with confidence.',
      position: 'left'
    },
    {
      id: 4,
      image: '/images/img_11728353_5.png',
      title: 'Rewards',
      description: 'Earn points and unlock exclusive benefits as you learn and progress—making every milestone more rewarding.',
      position: 'right'
    }
  ];

  return (
    <section className="w-full py-[25px] md:py-[38px] lg:py-[50px]">
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-[35px] md:gap-[53px] lg:gap-[70px] w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-[25px] md:gap-[38px] lg:gap-[50px] justify-start items-center w-full lg:w-[844px] mb-[137px] md:mb-[206px] lg:mb-[274px]">
            {features?.filter(feature => feature?.position === 'left')?.map((feature) => (
              <div key={feature?.id} className="flex flex-col gap-6 md:gap-8 lg:gap-[32px] justify-start items-center w-full">
                <img 
                  src={feature?.image} 
                  alt={feature?.title}
                  className="w-full rounded-xl lg:rounded-[24px]"
                />
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px] justify-start items-start w-full pr-[17px] md:pr-[26px] lg:pr-[34px]">
                  <h3 
                    className="text-[18px] sm:text-[27px] md:text-[32px] lg:text-[36px] font-bold leading-[27px] sm:leading-[41px] md:leading-[48px] lg:leading-[54px] text-left text-white"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {feature?.title}
                  </h3>
                  <p 
                    className="text-[13px] sm:text-[20px] md:text-[23px] lg:text-[26px] font-normal leading-[21px] sm:leading-[32px] md:leading-[37px] lg:leading-[42px] text-left text-white w-full"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-[25px] md:gap-[38px] lg:gap-[50px] justify-start items-center w-full lg:w-[844px] mt-0 lg:mt-[158px] md:mt-[237px] lg:mt-[316px]">
            {features?.filter(feature => feature?.position === 'right')?.map((feature) => (
              <div key={feature?.id} className="flex flex-col gap-6 md:gap-8 lg:gap-[32px] justify-start items-center w-full">
                <img 
                  src={feature?.image} 
                  alt={feature?.title}
                  className="w-full rounded-xl lg:rounded-[24px]"
                />
                <div className="flex flex-col gap-3 md:gap-4 lg:gap-[16px] justify-start items-start w-full pr-[17px] md:pr-[26px] lg:pr-[34px]">
                  <h3 
                    className="text-[18px] sm:text-[27px] md:text-[32px] lg:text-[36px] font-bold leading-[27px] sm:leading-[41px] md:leading-[48px] lg:leading-[54px] text-left text-white"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {feature?.title}
                  </h3>
                  <p 
                    className="text-[13px] sm:text-[20px] md:text-[23px] lg:text-[26px] font-normal leading-[21px] sm:leading-[32px] md:leading-[37px] lg:leading-[42px] text-left text-white w-full"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    {feature?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;