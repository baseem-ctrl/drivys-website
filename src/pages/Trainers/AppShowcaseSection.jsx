import React from 'react';

const AppShowcaseSection = () => {
  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat relative rounded-2xl"
      style={{ backgroundImage: 'url(/images/img_image_30.png)' }}
    >
      <div className="w-full bg-gradient-to-b from-transparent to-black rounded-2xl">
        <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl">
          <div className="flex flex-col justify-start items-end w-full pt-[86px] md:pt-[129px] lg:pt-[172px] rounded-2xl">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-[16px] justify-start items-center w-full pt-[15px] md:pt-[23px] lg:pt-[30px] pb-[15px] md:pb-[23px] lg:pb-[30px] mt-[139px] md:mt-[209px] lg:mt-[278px]">
              <div className="flex flex-col gap-[3px] md:gap-[5px] lg:gap-[6px] justify-start items-center w-auto">
                <h2 
                  className="text-[26px] sm:text-[39px] md:text-[45px] lg:text-[52px] font-bold leading-[39px] sm:leading-[59px] md:leading-[68px] lg:leading-[78px] text-left"
                  style={{ fontFamily: 'Poppins' }}
                >
                  <span className="text-white">Our Driving Journey, </span>
                  <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">On the Go</span>
                </h2>
                
                <p 
                  className="text-[14px] sm:text-[21px] md:text-[25px] lg:text-[28px] font-bold leading-[21px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] text-left text-white"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Download Now
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-[20px] justify-center items-center w-full sm:w-[30%]">
                {/* Google Play Button */}
                <div className="flex justify-between items-center w-full border border-white rounded-lg lg:rounded-[16px] p-3 md:p-4 lg:p-[16px] hover:bg-white hover:bg-opacity-10 transition-all duration-200">
                  <div className="flex justify-start items-start p-[1px] md:p-[2px] lg:p-[2px]">
                    <img 
                      src="/images/img_x34_2_google_play.png" 
                      alt="Google Play" 
                      className="w-[11px] h-[12px] sm:w-[16px] sm:h-[18px] md:w-[22px] md:h-[24px]"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start flex-1 ml-2 md:ml-3">
                    <span 
                      className="text-[7px] sm:text-[10px] md:text-[14px] font-normal leading-[11px] sm:leading-[16px] md:leading-[21px] text-left text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      GET IT ON
                    </span>
                    <span 
                      className="text-[14px] sm:text-[21px] md:text-[28px] font-bold leading-[21px] sm:leading-[32px] md:leading-[42px] text-left text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Google Play
                    </span>
                  </div>
                </div>
                
                {/* App Store Button */}
                <div className="flex gap-3 md:gap-4 lg:gap-[16px] justify-start items-center w-full border border-white rounded-lg lg:rounded-[16px] p-3 md:p-4 lg:p-[16px] hover:bg-white hover:bg-opacity-10 transition-all duration-200">
                  <img 
                    src="/images/img_image_2.png" 
                    alt="App Store" 
                    className="w-[16px] h-[16px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px]"
                  />
                  <div className="flex flex-col justify-start items-start flex-1">
                    <span 
                      className="text-[7px] sm:text-[10px] md:text-[14px] font-normal leading-[11px] sm:leading-[16px] md:leading-[21px] text-left text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Download on the
                    </span>
                    <span 
                      className="text-[14px] sm:text-[21px] md:text-[28px] font-bold leading-[21px] sm:leading-[32px] md:leading-[42px] text-left text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      App Store
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;