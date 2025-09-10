import React from 'react';
import Button from '../../components/ui/Button';

const ProgramsSection = () => {
  const features = [
    {
      id: 1,
      icon: '/images/img_fi_2636402.svg',
      title: 'Real-time instructor booking',
      description: 'Our real-time booking feature ensures you can schedule driving lessons with certified instructors instantly, offering flexibility and convenience that fits your lifestyle.',
      hasAccentLine: true
    },
    {
      id: 2,
      icon: '/images/img_fi_69856.svg',
      title: 'Track your progress',
      description: 'Our platform helps you track your progress step-by-step, ensuring you are always moving forward with confidence.',
      hasDownloadSection: true
    },
    {
      id: 3,
      icon: '/images/img_fi_598044.svg',
      title: 'Flexible scheduling',
      description: 'Our flexible scheduling system empowers you to plan your lessons at your convenience, ensuring a stress-free learning experience.'
    },
    {
      id: 4,
      icon: '/images/img_fi_566718.svg',
      title: 'In-app communication',
      description: 'Our in-app communication ensures smooth coordination between you and your instructor, enhancing your learning experience.'
    },
    {
      id: 5,
      icon: '/images/img_fi_2258567.svg',
      title: 'Digital certifications',
      description: 'Receive accredited digital certifications upon course completion, designed for easy verification and future use.'
    }
  ];

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
            <div className="flex flex-col gap-4">
              <Button
                text="Features"
                className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-[linear-gradient(180deg,#cb217d7f_0%,#e387b944_50%,#ffffff00_100%)] text-white text-2xl font-normal px-4 py-2 rounded-lg shadow-[0px_4px_13px_#888888ff] w-fit"
                fill_background=""
                border_border_image=""
                effect_box_shadow=""
                layout_align_self=""
                fill_background_color=""
                layout_width=""
                padding=""
                position=""
                margin=""
                variant=""
                size=""
                onClick={() => {}}
              />
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-black leading-tight lg:leading-[67px] text-left">
                  <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                    The Drivys 
                  </span>
                  <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                    Platform
                  </span>
                </h2>
                <div className="lg:w-[30%]">
                  <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c]">
                    Your all-in-one platform to manage every steps of your driving journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features?.map((feature, index) => (
              <div key={feature?.id} className={`${index === 1 ? 'lg:col-span-1 lg:row-span-2' : ''}`}>
                {index === 1 ? (
                  // Special layout for feature with download section
                  (<div className="flex flex-col gap-5">
                    {/* Main Feature Card */}
                    <div className="bg-[#121212] rounded-xl p-6 lg:p-8">
                      <div className="flex flex-col gap-4 lg:gap-6">
                        <div className="flex flex-col gap-4">
                          <div className="w-fit bg-[linear-gradient(167deg,#ffffff66_0%,#ffffff00_100%)] rounded-[40px] p-4 shadow-[0px_4px_42px_#888888ff]">
                            <img 
                              src={feature?.icon} 
                              alt={feature?.title}
                              className="w-[50px] h-[50px] object-contain"
                            />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-century-gothic font-bold leading-9 text-white">
                            {feature?.title}
                          </h3>
                        </div>
                        <p className="text-xl font-century-gothic font-normal leading-8 text-[#94969c]">
                          {feature?.description}
                        </p>
                        <div className="w-full h-[1px] bg-[#333333]"></div>
                      </div>
                    </div>
                    {/* Download Section */}
                    <div className="bg-[#1414147f] rounded-lg p-8 lg:p-12 shadow-[0px_0px_84px_#ffffff19]">
                      <div className="flex flex-col gap-6 items-center text-center">
                        <h4 className="text-2xl md:text-3xl font-century-gothic font-semibold leading-9 text-white">
                          Download Now
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-5 w-full">
                          {/* Google Play Button */}
                          <div className="flex items-center gap-4 bg-white rounded-lg px-2 py-2 flex-1">
                            <div className="flex items-center justify-center p-1">
                              <img 
                                src="/images/img_x34_2_google_play.png" 
                                alt="Google Play" 
                                className="w-[22px] h-[24px] object-contain"
                              />
                            </div>
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-century-gothic font-normal leading-5 text-black">
                                GET IT ON
                              </span>
                              <span className="text-2xl font-century-gothic font-bold leading-9 text-black">
                                Google Play
                              </span>
                            </div>
                          </div>
                          
                          {/* App Store Button */}
                          <div className="flex items-center gap-4 bg-white rounded-lg px-2 py-2 flex-1">
                            <img 
                              src="/images/img_image_2.png" 
                              alt="App Store" 
                              className="w-[32px] h-[32px] object-contain"
                            />
                            <div className="flex flex-col items-start">
                              <span className="text-sm font-century-gothic font-normal leading-5 text-black">
                                Download on the
                              </span>
                              <span className="text-2xl font-century-gothic font-bold leading-9 text-black">
                                App Store
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)
                ) : (
                  // Regular Feature Card
                  (<div className="bg-[#121212] rounded-xl p-6 lg:p-8 h-full">
                    <div className="flex flex-col gap-4 lg:gap-6 h-full">
                      <div className="flex flex-col gap-4">
                        <div className="w-fit bg-[linear-gradient(167deg,#ffffff66_0%,#ffffff00_100%)] rounded-[40px] p-4 shadow-[0px_4px_42px_#888888ff]">
                          <img 
                            src={feature?.icon} 
                            alt={feature?.title}
                            className="w-[50px] h-[50px] object-contain"
                          />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-century-gothic font-bold leading-9 text-white">
                          {feature?.title}
                        </h3>
                      </div>
                      <p className="text-xl font-century-gothic font-normal leading-8 text-[#94969c] flex-1">
                        {feature?.description}
                      </p>
                      {feature?.hasAccentLine ? (
                        <div className="w-full h-[1px] bg-[#f68c2d] shadow-[0px_0px_60px_#f68c2d]"></div>
                      ) : (
                        <div className="w-full h-[1px] bg-[#333333]"></div>
                      )}
                    </div>
                  </div>)
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;