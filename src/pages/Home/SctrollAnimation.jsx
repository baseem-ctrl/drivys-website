import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "Learn Driving with",
    highlight: "Confidence",
    description:
      "Our experienced male trainers guide you step by step, making driving lessons safe, comfortable, and tailored to your pace.",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "Master Driving",
    highlight: "Skills",
    description:
      "Gain confidence on the road with expert guidance and real-world practice.",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "Drive with",
    highlight: "Safety",
    description:
      "We focus on defensive driving techniques to ensure you stay safe on every journey.",
  },
];

const DrivingCarousel = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-black">
      <motion.div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="h-[400px] sm:h-[500px] lg:h-[600px] relative"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Image with border and rounded corners */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-xl border-2 border-white/30 object-cover w-full h-full"
                />

                {/* Top and Bottom Glassy / Faded Overlay */}
                <div className="absolute inset-0 rounded-xl pointer-events-none"
                     style={{
                       background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.5) 100%)"
                     }}
                ></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 px-6 py-8 sm:py-12 text-center">
                  <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-white leading-snug">
                    {slide.title}{" "}
                    <span className="text-orange-500">{slide.highlight}</span>
                  </h2>
                  <p className="mt-2 sm:mt-3 text-gray-200 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default DrivingCarousel;
