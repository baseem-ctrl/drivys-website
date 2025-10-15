import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const VehicleCarousel = () => {
  const [trafficLight, setTrafficLight] = useState('red');

  const baseVehicles = [
    {
      title: 'Car',
      description: 'Learn everyday driving skills for city and highway roads with confidence.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_vector.png',
      color: '#ffffff',
    },
    {
      title: 'Bus',
      description: 'Get trained for public transport and commercial bus driving.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_vector_white_a700_296x562.png',
      color: '#ffffff',
    },
    {
      title: 'Truck',
      description: 'Master heavy vehicle handling for logistics and long-distance routes.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_group_179.png',
      color: '#ffffff',
    },
  ];

  // Generate repeated items with increasing IDs
  const numberOfRepeats = 10;
  const trainingOptions = [];

  for (let i = 0; i < numberOfRepeats; i++) {
    baseVehicles.forEach((vehicle, idx) => {
      trainingOptions.push({
        id: i * baseVehicles.length + idx + 1,
        ...vehicle,
      });
    });
  }
  const loopedOptions = [...trainingOptions, ...trainingOptions];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= trainingOptions.length) {
          return 1;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [trainingOptions.length]);

  // 🚦 Traffic light cycle
  useEffect(() => {
    const cycleTrafficLight = () => {
      setTrafficLight('red');
      setTimeout(() => setTrafficLight('yellow'), 1000);
      setTimeout(() => setTrafficLight('green'), 2000);
    };

    cycleTrafficLight();
    const interval = setInterval(cycleTrafficLight, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🟢 Determine fade color based on traffic light
  const fadeColor =
    trafficLight === 'red'
      ? 'rgba(213, 44, 44, 0.3)'
      : trafficLight === 'yellow'
      ? 'rgba(251, 188, 1, 0.25)'
      : 'rgba(110, 191, 117, 0.25)'; // green

  return (
    <section className="w-full bg-black py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 flex justify-center relative">
        {/* Reel container */}
        <div className="relative h-[450px] sm:h-[600px] overflow-hidden w-full">
          {/* Top/Bottom gradient masks - only on desktop */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

          {/* Reel motion group */}
          <motion.div
            animate={{ y: -index * (window.innerWidth < 640 ? 450 : 600) }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="flex flex-col"
          >
            {loopedOptions.map((item, i) => (
              <div
                key={i}
                className="h-[450px] sm:h-[600px] flex flex-col lg:flex-row items-center gap-6 sm:gap-12 px-2 relative"
              >
                {/* Left */}
                <div className="w-full lg:w-1/2 flex flex-col items-center gap-4 sm:gap-6 relative">
                  {/* Extra Top Section */}
                  <div className="hidden lg:block bg-[#262626] rounded-2xl w-full max-w-[500px] p-6 text-center relative overflow-hidden"></div>

                  {/* 🚘 Vehicle Box with dynamic fade */}
             {/* Vehicle Box */}
<motion.div
  className="bg-[#1C1C1C] rounded-xl sm:rounded-2xl w-full max-w-[500px] flex items-center justify-center p-6 sm:p-12 relative overflow-hidden"
  animate={{
    boxShadow: `0 0 60px ${fadeColor}`,
  }}
  transition={{ duration: 1, ease: 'easeInOut' }}
>
  {/* ✨ Bottom dynamic fading overlay */}
  <motion.div
    className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
    animate={{
      background: `linear-gradient(to top, ${fadeColor}, transparent)`,
    }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  ></motion.div>

  {/* Traffic Signal */}
  <div className="absolute left-4 top-4 z-30 bg-black/90 rounded-xl p-2 sm:p-3 backdrop-blur-sm border-2 border-white/20">
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <div
        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-300 ${
          trafficLight === 'red'
            ? 'bg-red-500 shadow-lg shadow-red-500/50'
            : 'bg-red-900/30'
        }`}
      />
      <div
        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-300 ${
          trafficLight === 'yellow'
            ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
            : 'bg-yellow-900/30'
        }`}
      />
      <div
        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-300 ${
          trafficLight === 'green'
            ? 'bg-green-500 shadow-lg shadow-green-500/50'
            : 'bg-green-900/30'
        }`}
      />
    </div>
  </div>

  {/* Vehicle Image */}
  <img
    src={item.vehicleImage}
    alt={item.title}
    className="w-[160px] sm:w-[250px] h-auto object-contain relative z-10"
  />
</motion.div>


                  {/* Extra Bottom Section */}
                  <div className="hidden lg:block bg-[#262626] rounded-2xl w-full max-w-[500px] p-6 text-center relative overflow-hidden"></div>
                </div>

                {/* Right */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 text-left relative">
                  <h2
                    className="text-xl sm:text-6xl md:text-10xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-[500px]">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    {item.features.map((feature, j) => (
                      <div key={j} className="flex items-center justify-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center bg-white/10">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <span className="text-white text-base sm:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 border border-white rounded-lg text-white font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit hidden sm:block">
                    Choose Vehicle
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Manual controls */}
      <div className="hidden sm:flex flex-col gap-4 absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={() => setIndex((prev) => (prev >= trainingOptions.length ? 1 : prev + 1))}
          className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          ▲
        </button>
      </div>
    </section>
  );
};

export default VehicleCarousel;
