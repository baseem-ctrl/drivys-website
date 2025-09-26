import React from 'react';

const FeaturedTrainersSection = () => {
  const trainers = [
    {
      id: 1,
      name: 'Michael Chen',
      image: '/images/img_instructor_1.png',
      specialties: 'Automatic | Manual | Defensive Driving'
    },
    {
      id: 2,
      name: 'Lynn P. Holt',
      image: '/images/img_instructor_3.png',
      specialties: 'Automatic | Manual | Defensive Driving'
    },
    {
      id: 3,
      name: 'Scott Everett',
      image: '/images/img_instructor_2.png',
      specialties: 'Automatic | Manual | Defensive Driving'
    }
  ];

  return (
    <section className="w-full py-[50px] md:py-[75px] lg:py-[100px]">
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[25px] md:gap-[38px] lg:gap-[50px] justify-start items-center w-full">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
            <h2 
              className="text-[26px] sm:text-[39px] md:text-[45px] lg:text-[52px] font-bold leading-[39px] sm:leading-[59px] md:leading-[68px] lg:leading-[78px] text-left"
              style={{ fontFamily: 'Poppins' }}
            >
              <span className="bg-gradient-to-r from-[#f18728] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent">Featured </span>
              <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">Trainers</span>
            </h2>
            <p 
              className="text-[13px] sm:text-[20px] md:text-[23px] lg:text-[26px] font-normal leading-[20px] sm:leading-[30px] md:leading-[35px] lg:leading-[39px] text-left text-[#94969c] w-full lg:w-[28%]"
              style={{ fontFamily: 'Poppins' }}
            >
              Learn from certified professionals with years of experience.
            </p>
          </div>
          
          {/* Trainers Grid */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-[20px] w-full">
            {trainers?.map((trainer) => (
              <div key={trainer?.id} className="relative w-full md:w-[572px] h-[286px] md:h-[429px] lg:h-[572px] rounded-xl lg:rounded-[24px] overflow-hidden group">
                {/* Background Image */}
                <img 
                  src={trainer?.image} 
                  alt={trainer?.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-start items-end w-full">
                  <div className="w-full bg-gradient-to-b from-transparent to-black/20 rounded-b-xl lg:rounded-b-[24px] p-3 md:p-4 lg:p-[16px] shadow-[0px_4px_13px_#888888ff]">
                    <div className="flex flex-col gap-1 md:gap-2 lg:gap-[4px] justify-start items-center w-full">
                      <h3 
                        className="text-[13px] sm:text-[20px] md:text-[23px] lg:text-[26px] font-bold leading-[20px] sm:leading-[30px] md:leading-[35px] lg:leading-[39px] text-center text-white"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {trainer?.name}
                      </h3>
                      <p 
                        className="text-[10px] sm:text-[15px] md:text-[18px] lg:text-[20px] font-normal leading-[18px] sm:leading-[27px] md:leading-[32px] lg:leading-[36px] text-left text-white"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        <span className="font-bold">Specialties: </span>
                        <span>{trainer?.specialties}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrainersSection;