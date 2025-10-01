import React from 'react';
import EditText from '../../components/ui/EditText';

const HeroSection = () => {
  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(/images/img_image_29.png)' }}
    >
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-start items-end w-full pt-[27px] md:pt-[41px] lg:pt-[54px]">
          <div className="flex flex-col lg:flex-row justify-center items-start w-full">
            <div className="flex flex-col justify-start items-start w-full lg:w-[58%] mt-[49px] md:mt-[74px] lg:mt-[98px]">
              <EditText
                placeholder="Home / Trainer"
                position="relative"
                variant="outline"
                size="medium"
                value="Home / Trainer"
                onChange={() => {}}
                text_font_size="24px"
                text_font_family="Poppins"
                text_font_weight="400"
                text_line_height="36px"
                text_text_align="left"
                text_color="#ffffff"
                fill_background="linear-gradient(180deg, #ffffff19 0%, #ffffff19 50%, #ffffff19 100%)"
                border_border="1px solid"
                border_border_image="linear-gradient(180deg, #cb217d7f 0%, #e387b944 50%, #ffffff00 100%)"
                border_border_radius="10px"
                effect_box_shadow="0px 4px 13px #888888ff"
                layout_width="20%"
                padding="8px 16px"
                className="mb-4 md:mb-6 lg:mb-[16px]"
              />
              
              <h1 
                className="text-[26px] sm:text-[39px] md:text-[45px] lg:text-[52px] font-black leading-[39px] sm:text-[59px] md:leading-[68px] lg:leading-[78px] text-left bg-gradient-to-r from-[#cccccc] via-[#ffffff] to-[#cccccc] bg-clip-text text-transparent mt-4 md:mt-6 lg:mt-[16px]"
                style={{ fontFamily: 'Poppins' }}
              >
                Powerful Tool for Trainers
              </h1>
              
              <p 
                className="text-[13px] sm:text-[20px] md:text-[23px] lg:text-[26px] font-normal leading-[20px] sm:leading-[30px] md:leading-[35px] lg:leading-[39px] text-left text-[#94969c] w-full lg:w-[72%] mt-4 md:mt-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Smart tools to help trainers manage students, track progress, and deliver better lessons.
              </p>
            </div>
            
            <div className="w-full lg:w-[38%] flex justify-center items-center mt-8 lg:mt-0">
              <img 
                src="/images/img_image_30.png" 
                alt="Trainer Tools Dashboard" 
                className="w-full max-w-[346px] sm:max-w-[519px] md:max-w-[692px] h-auto rounded-bl-xl lg:rounded-bl-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;