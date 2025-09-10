import React from 'react';
import Button from '../../components/ui/Button';

const PricingSection = () => {
  const packages = [
    {
      id: 1,
      name: 'Bronze Package',
      price: '599 AED',
      description: 'For new drivers ready to begin street training.',
      features: [
        '2 basic introductory sessions',
        'Safety & procedures',
        'Great for testing',
        'No certificate included'
      ]
    },
    {
      id: 2,
      name: 'Silver Package',
      price: '899 AED',
      description: 'Learners aiming to pass confidently.',
      features: [
        'Driving fundamentals',
        'Sessions before the test',
        'Discount on certificate',
        'Serious preparation'
      ]
    },
    {
      id: 3,
      name: 'Gold Package',
      price: '1299 AED',
      description: 'Training with extra support & real-world experience.',
      features: [
        'Training & refresh sessions',
        'Session with trainer is free',
        'City driving practice',
        '40% discount on certificate'
      ]
    },
    {
      id: 4,
      name: 'Unlimited Package',
      price: '2499 AED',
      description: '2499 AED Maximum support with & full benefits.',
      features: [
        'Unlimited training sessions',
        'Free home pickup',
        'Certificate included',
        'Free retraining if failed'
      ]
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
                text="Package"
                className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-[linear-gradient(180deg,#cb217d7f_0%,#e387b944_50%,#ffffff00_100%)] text-white text-2xl font-normal px-4 py-2 rounded-lg shadow-[0px_4px_13px_#888888ff] w-fit"
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-black leading-tight lg:leading-[78px] text-left">
                <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                  Driving Training 
                </span>
                <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                  Packages
                </span>
              </h2>
            </div>
            <div className="lg:w-[32%]">
              <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c]">
                Pick the right package and help students start their driving journey with confidence.
              </p>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1760px]">
            {packages?.map((pkg) => (
              <div key={pkg?.id} className="bg-[#141414] rounded-xl p-6 lg:p-8 flex flex-col">
                <div className="flex flex-col gap-4 lg:gap-6 flex-1">
                  {/* Package Header */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-century-gothic font-semibold leading-8 text-[#94969c]">
                      {pkg?.name}
                    </h3>
                    <p className="text-4xl md:text-5xl lg:text-[54px] font-mont font-black leading-tight text-white">
                      {pkg?.price}
                    </p>
                    <p className="text-base md:text-lg font-century-gothic font-normal leading-5 text-[#94969c] mt-2">
                      {pkg?.description}
                    </p>
                  </div>

                  {/* Choose Button */}
                  <Button
                    text={`Choose ${pkg?.name?.split(' ')?.[0]}`}
                    className="bg-[#141414] text-white text-lg font-century-gothic font-semibold px-8 py-4 rounded-xl shadow-[0px_0px_84px_#ffffff19] w-full mt-4"
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

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#94969c] mt-8"></div>

                  {/* Features List */}
                  <div className="flex flex-col gap-6 mt-6">
                    {pkg?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <img 
                          src="/images/img_fi_5291032.svg" 
                          alt="Feature Icon" 
                          className="w-[32px] h-[32px] object-contain flex-shrink-0 mt-1"
                        />
                        <span className="text-base md:text-lg font-century-gothic font-semibold leading-5 text-white">
                          {feature}
                        </span>
                      </div>
                    ))}
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

export default PricingSection;