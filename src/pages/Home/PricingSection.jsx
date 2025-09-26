import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const packages = [
  {
    id: 1,
    name: 'Bronze Package',
    price: '599 AED',
    gradient: 'linear-gradient(to top, #DB7D1C 0%, transparent 100%)',
    description: 'For new drivers ready to begin street training.',
    features: [
      '2 basic introductory sessions',
      'Safety & procedures',
      'Great for testing',
      'No certificate included',
    ],
  },
  {
    id: 2,
    name: 'Silver Package',
    price: '899 AED',
    gradient: 'linear-gradient(to top, #C3C3C3 0%, transparent 100%)',
    description: 'Learners aiming to pass confidently.',
    features: [
      'Driving fundamentals',
      'Sessions before the test',
      'Discount on certificate',
      'Serious preparation',
    ],
  },
  {
    id: 3,
    name: 'Gold Package',
    price: '1299 AED',
    gradient: 'linear-gradient(to top, #FFB524 0%, transparent 100%)',
    description: 'Training with extra support & real-world experience.',
    features: [
      'Training & refresh sessions',
      'Session with trainer is free',
      'City driving practice',
      '40% discount on certificate',
    ],
  },
  {
    id: 4,
    name: 'Unlimited Package',
    price: '2499 AED',
    gradient: 'linear-gradient(to top, #421E83 0%, transparent 100%)',
    description: 'Maximum support with full benefits.',
    features: [
      'Unlimited training sessions',
      'Free home pickup',
      'Certificate included',
      'Free retraining if failed',
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <Button
              text="Packages"
              className="text-white text-xl sm:text-2xl font-normal px-4 py-2 rounded-lg w-fit mx-auto lg:mx-0"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
              <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                Driving Training{' '}
              </span>
              <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                Packages
              </span>
            </h2>
          </div>
          <div className="lg:w-[28%]">
            <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
              Pick the right package and help students start their driving journey with confidence.
            </p>
          </div>
        </div>

        {/* ✅ Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              className="relative bg-[#1a1a1a] rounded-lg p-6 lg:p-8 flex flex-col justify-between overflow-hidden group hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* ✅ Gradient Fade Overlay */}
              <div
                className="absolute bottom-0 left-0 w-full h-0 opacity-0 blur-3xl pointer-events-none transition-all duration-700 group-hover:h-full group-hover:opacity-80"
                style={{ backgroundImage: pkg.gradient }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-full h-0 opacity-0 blur-2xl pointer-events-none transition-all duration-1000 group-hover:h-full group-hover:opacity-50"
                style={{ backgroundImage: pkg.gradient }}
              ></div>

              {/* ✅ Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-400 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white mb-2">
                    {pkg.price}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">{pkg.description}</p>
                </div>

                <Button
                  text={`Choose ${pkg.name.split(' ')[0]}`}
                  className="text-white text-[16px]  px-6 py-3 rounded-sm w-full shadow-lg backdrop-blur-sm bg-white/5 
             transition duration-1000 
             group-hover:bg-white group-hover:text-black"
                  onClick={() => {}}
                  style={{ fontSize: '21px' }}
                />

                <div className="w-full h-[1px] bg-gray-600 my-6" />

                <div className="flex flex-col gap-4">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <img
                        src="/images/img_fi_5291032.svg"
                        alt="Feature Icon"
                        className="w-6 h-6 mt-1"
                      />
                      <span className="text-white font-medium text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
