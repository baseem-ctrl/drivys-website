import React from 'react';

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      icon: '/images/img_fi_3172183.svg',
      title: 'Certified & Trusted',
      subtitle: 'Instructor',
      description: 'Learn from certified instructors you can trust for a safe and confident driving experience.',
      bgColor: 'bg-[#141414]'
    },
    {
      id: 2,
      icon: '/images/img_fi_2053323.svg',
      title: 'On-demand',
      subtitle: 'Scheduling',
      description: 'Learn whenever you want with flexible, on-demand driving sessions.',
      bgColor: 'bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)]'
    },
    {
      id: 3,
      icon: '/images/img_fi_10692577.png',
      title: 'Transparent',
      subtitle: 'Pricing',
      description: 'Clear, upfront pricing with no hidden fees—what you see is what you pay.',
      bgColor: 'bg-[#141414]'
    },
    {
      id: 4,
      icon: '/images/img_fi_3798638.svg',
      title: 'Nationally Recognized',
      subtitle: 'Training',
      description: 'Trusted and recognized across the country for quality driving education.',
      bgColor: 'bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)]'
    },
    {
      id: 5,
      icon: '/images/img_fi_13496067.svg',
      title: 'Modern learning',
      subtitle: 'Experience',
      description: 'Experience driving education with the latest tools and innovative teaching methods.',
      bgColor: 'bg-[#141414]'
    }
  ];

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24 overflow-x-auto">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="w-full lg:w-[36%] flex-shrink-0">
            <div className="flex flex-col gap-6 lg:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-black leading-tight lg:leading-[78px] text-left">
                <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                  Why Choose Us – Experience the Drivys Difference
                </span>
              </h2>
              <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c] lg:w-[80%]">
                Your all-in-one platform to manage every steps of your driving journey.
              </p>
            </div>
          </div>

          {/* Right Content - Horizontal Scrolling Cards */}
          <div className="w-full lg:flex-1 overflow-x-auto">
            <div className="flex gap-5 pb-4" style={{ width: 'max-content' }}>
              {features?.map((feature, index) => (
                <div 
                  key={feature?.id} 
                  className={`${feature?.bgColor} rounded-xl p-6 lg:p-8 flex-shrink-0`}
                  style={{ 
                    width: index === 0 ? '530px' : index === 1 ? '400px' : index === 2 ? '390px' : index === 3 ? '384px' : '390px',
                    minHeight: '542px'
                  }}
                >
                  <div className="flex flex-col gap-6 lg:gap-8 h-full">
                    {/* Icon */}
                    <div className="w-fit bg-transparent border border-white rounded-[54px] p-6 lg:p-7 shadow-[0px_4px_52px_#888888ff]">
                      <img 
                        src={feature?.icon} 
                        alt={feature?.title}
                        className="w-[54px] h-[54px] object-contain"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col gap-4 lg:gap-6 flex-1">
                      {/* Title */}
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl md:text-3xl font-poppins font-bold leading-12 text-white">
                          {feature?.title}
                        </h3>
                        <p className="text-xl font-poppins font-normal leading-8 text-center text-white">
                          {feature?.subtitle}
                        </p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-2xl md:text-[25px] font-poppins font-normal leading-9 text-white mt-auto">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;