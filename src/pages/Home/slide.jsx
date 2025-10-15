import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const slides = [
  {
    id: 1,
    title: "Hello Guys",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.",
    bg: "bg-[#500033]",
    inner: "bg-[#FF0077]",
  },
  {
    id: 2,
    title: "Did you find it helpful",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.",
    bg: "bg-[#000050]",
    inner: "bg-[#0033FF]",
  },
  {
    id: 3,
    title: "Why you are not following me!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.",
    bg: "bg-[#00501D]",
    inner: "bg-[#00FF44]",
  },
  {
    id: 4,
    title: "Follow for more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.",
    bg: "bg-[#554D00]",
    inner: "bg-[#FF4E00]",
  },
  {
    id: 5,
    title: "Follow Follow Follow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.",
    bg: "bg-[#300050]",
    inner: "bg-[#8000FF]",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const goToSlide = (index) => setCurrent(index);

  useEffect(() => {
    // GSAP animation for active slide
    const slide = sliderRef.current.children[current];
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.inOut" } });
    tl.from(slide.querySelector(".bg"), { x: "-100%", opacity: 0 })
      .from(slide.querySelector("p"), { opacity: 0 }, "-=0.3")
      .from(slide.querySelector("h1"), { opacity: 0, y: 30 }, "-=0.3")
      .from(slide.querySelector("button"), { opacity: 0, y: -40 }, "-=0.8");
  }, [current]);

  useEffect(() => {
    // Auto slide interval
    intervalRef.current = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Touch/Swipe support
  useEffect(() => {
    let startX = 0;
    let change = 0;
    let sliderWidth = 0;
    const slider = sliderRef.current;

    const touchStart = (e) => {
      startX = e.touches[0].clientX;
      sliderWidth = slider.clientWidth / slides.length;
    };
    const touchMove = (e) => {
      change = startX - e.touches[0].clientX;
    };
    const touchEnd = () => {
      if (change > sliderWidth / 4) nextSlide();
      if (-change > sliderWidth / 4) prevSlide();
      startX = 0;
      change = 0;
      sliderWidth = 0;
    };

    slider.addEventListener("touchstart", touchStart);
    slider.addEventListener("touchmove", touchMove);
    slider.addEventListener("touchend", touchEnd);

    return () => {
      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchmove", touchMove);
      slider.removeEventListener("touchend", touchEnd);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full grid grid-cols-2 items-center relative h-[55rem] md:h-screen"
          >
            <div className={`bg absolute w-[55%] h-full left-[-10%] skew-x-7 ${slide.bg}`}></div>
            <div className="p-20 z-10">
              <h1 className="text-4xl font-medium mb-2">{slide.title}</h1>
              <p className="text-gray-400 mb-8">{slide.description}</p>
              <button className={`px-8 py-4 rounded-full text-white ${slide.inner}`}>
                Check Now
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className={`h-[25rem] w-[18rem] rounded-3xl ${slide.inner} relative skew-x-[-10deg]`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 opacity-20 hover:opacity-100 hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56.898"
          height="91"
          viewBox="0 0 56.898 91"
        >
          <path
            d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
            transform="translate(0 91) rotate(-90)"
            fill="#fff"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-20 hover:opacity-100 hidden md:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56.898"
          height="91"
          viewBox="0 0 56.898 91"
        >
          <path
            d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
            transform="translate(56.898) rotate(90)"
            fill="#fff"
          />
        </svg>
      </button>

      {/* Trail */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 grid grid-cols-5 gap-2 w-3/5 text-center text-white text-xl md:w-11/12">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`p-4 border-t-4 cursor-pointer transition-opacity ${
              current === index ? "opacity-100" : "opacity-30"
            }`}
          >
            {slide.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;


