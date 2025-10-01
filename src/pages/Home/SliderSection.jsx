import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const VehicleCarousel = () => {
  const trainingOptions = [
    {
      id: 1,
      title: 'Car',
      description: 'Learn everyday driving skills for city and highway roads with confidence.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_vector.png',
      color: '#F97316',
    },
    {
      id: 2,
      title: 'Bus',
      description: 'Get trained for public transport and commercial bus driving.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_vector_white_a700_296x562.png',
      color: '#FBBC01',
    },
    {
      id: 3,
      title: 'Truck',
      description: 'Master heavy vehicle handling for logistics and long-distance routes.',
      features: ['Automatic', 'Manual'],
      vehicleImage: '/images/img_group_179.png',
      color: '#D52C2C',
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-scroll every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % trainingOptions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 flex justify-center relative">
        {/* Reel container */}
        <div className="relative h-[600px] overflow-hidden w-full">
          {/* Top/Bottom gradient masks */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

          {/* Reel motion group */}
          <motion.div
            animate={{ y: -index * 600 }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 18,
            }}
            className="flex flex-col"
          >
            {trainingOptions.map((item) => (
              <div
                key={item.id}
                className="h-[600px] flex flex-col lg:flex-row items-center gap-12"
              >
                {/* Left: Extra Top + Vehicle + Extra Bottom */}
                <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
                  {/* Extra Top Section */}
                  <div className="bg-[#262626] rounded-2xl w-full max-w-[500px] p-6 text-center relative overflow-hidden">
                    {/* Fade top border */}
                    <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-black/40 to-transparent rounded-t-2xl pointer-events-none"></div>

                  
                  </div>

                  {/* Vehicle Box (Middle) */}
                  <div className="bg-[#1C1C1C] rounded-2xl w-full max-w-[500px] flex items-center justify-center p-12 relative">
                    {/* Top shadow */}
                    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/60 to-transparent rounded-t-2xl pointer-events-none"></div>
                    {/* Bottom shadow */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl pointer-events-none"></div>
                    <img
                      src={item.vehicleImage}
                      alt={item.title}
                      className="w-[250px] h-auto object-contain"
                    />
                  </div>

                  {/* Extra Bottom Section */}
                  <div className="bg-[#262626] rounded-2xl w-full max-w-[500px] p-6 text-center relative overflow-hidden">
                    {/* Fade bottom border */}
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/40 to-transparent rounded-b-2xl pointer-events-none"></div>

                    {/* No content (empty) */}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: item.color }}>
                    {item.title}
                  </h2>
                  <p className="text-lg text-white/90 leading-relaxed max-w-[500px]">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center bg-white/10">
                          <Check className="w-4 h-4 text-red-500" />
                        </div>
                        <span className="text-white text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="mt-6 px-6 py-3 border border-white rounded-lg text-white font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit">
                    Choose Vehicle
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Manual controls */}
      <div className="flex flex-col gap-4 absolute right-10 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={() => setIndex((prev) => (prev === 0 ? trainingOptions.length - 1 : prev - 1))}
          className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          ▲
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % trainingOptions.length)}
          className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
        >
          ▼
        </button>
      </div>
    </section>
  );
};

export default VehicleCarousel;
