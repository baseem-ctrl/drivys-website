// SctrollAnimation.jsx
import React, { useEffect, useRef } from "react";
import SwiperCore, { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// register modules
SwiperCore.use([Pagination, Mousewheel]);

const trainingOptions = [
  {
    id: 1,
    title: "Car",
    description:
      "Learn everyday driving skills for city and highway roads with confidence.",
    features: ["Automatic", "Manual"],
    vehicleImage: "/images/img_vector.png",
    hoverColor: "#6EBF75",
  },
  {
    id: 2,
    title: "Bus",
    description: "Get trained for public transport and commercial bus driving.",
    features: ["Automatic", "Manual"],
    vehicleImage: "/images/img_vector_white_a700_296x562.png",
    hoverColor: "#FBBC01",
  },
  {
    id: 3,
    title: "Truck",
    description:
      "Master heavy vehicle handling for logistics and long-distance routes.",
    features: ["Automatic", "Manual"],
    vehicleImage: "/images/img_group_179.png",
    hoverColor: "#D52C2C",
  },
];

export default function SctrollAnimation() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperEl = swiperRef.current.swiper;

    // Allow only upward scroll (next)
    swiperEl.el.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        swiperEl.slideNext();
      }
      // Block backward scroll
      e.preventDefault();
    });
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={24}
       
        pagination={{ clickable: true }}
        mousewheel={false} // disable default both-way scroll
        className="h-auto sm:h-[650px] lg:h-[700px]"
      >
        {trainingOptions.map((opt) => (
          <SwiperSlide key={opt.id}>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-black to-neutral-900 rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl">
              {/* Vehicle Image */}
              <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                <img
                  src={opt.vehicleImage}
                  alt={opt.title}
                  className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
                  style={{ color: opt.hoverColor }}
                >
                  {opt.title}
                </h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto lg:mx-0">
                  {opt.description}
                </p>

                <ul className="mb-6 space-y-2 text-sm sm:text-base">
                  {opt.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 justify-center lg:justify-start"
                    >
                      <span className="w-3 h-3 rounded-full bg-white/80" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-5 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl border border-white hover:bg-white hover:text-black transition text-sm sm:text-base lg:text-lg">
                  Choose Vehicle
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
