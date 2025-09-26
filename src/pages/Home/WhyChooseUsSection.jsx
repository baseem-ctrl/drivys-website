import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      icon: "/images/img_fi_3172183.svg",
      title: "Certified & Trusted",
      subtitle: "Instructor",
      description:
        "Learn from certified instructors you can trust for a safe and confident driving experience.",
      bgColor: "bg-[#141414]",
    },
    {
      id: 2,
      icon: "/images/img_fi_2053323.svg",
      title: "On-demand",
      subtitle: "Scheduling",
      description:
        "Learn whenever you want with flexible, on-demand driving sessions.",
      bgColor: "bg-gradient-to-r from-[#f68b2c] to-[#c05a00]",
    },
    {
      id: 3,
      icon: "/images/img_fi_10692577.png",
      title: "Transparent",
      subtitle: "Pricing",
      description:
        "Clear, upfront pricing with no hidden fees—what you see is what you pay.",
      bgColor: "bg-[#141414]",
    },
    {
      id: 4,
      icon: "/images/img_fi_3798638.svg",
      title: "Nationally Recognized",
      subtitle: "Training",
      description:
        "Trusted and recognized across the country for quality driving education.",
      bgColor: "bg-gradient-to-r from-[#f68b2c] to-[#c05a00]",
    },
    {
      id: 5,
      icon: "/images/img_fi_13496067.svg",
      title: "Modern learning",
      subtitle: "Experience",
      description:
        "Experience driving education with the latest tools and innovative teaching methods.",
      bgColor: "bg-[#141414]",
    },
  ];

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const leftContentRef = useRef(null);

  useLayoutEffect(() => {
    if (window.innerWidth < 1024) return;

    let ctx = gsap.context(() => {
      const scrollDistance =
        trackRef.current.scrollWidth -
        trackRef.current.parentElement.clientWidth;

      const sectionHeight = sectionRef.current.offsetHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${sectionHeight / 2} center`, // start from middle of section
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(trackRef.current, { x: -scrollDistance, ease: "none" }).to(
        leftContentRef.current,
        { opacity: 0, ease: "none" },
        "<"
      );

      const cards = trackRef.current.querySelectorAll(".feature-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(leftContentRef.current, { opacity: 0.05, duration: 0.3 });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(leftContentRef.current, { opacity: 1, duration: 0.3 });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto relative h-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center px-4 lg:px-8">
        {/* Left Content */}
        <div ref={leftContentRef} className="w-full lg:w-[36%] flex-shrink-0 z-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-poppins font-black leading-tight lg:leading-[74px] text-left">
              <span className="block">Why Choose Us –</span>
              <span className="block bg-gradient-to-r from-[#ccc] via-white to-[#ccc] bg-clip-text text-transparent">
                Experience the Drivys Difference
              </span>
            </h2>
            <p className="text-lg md:text-xl font-poppins text-[#94969c] lg:w-[80%] leading-relaxed">
              Your all-in-one platform to manage every step of your driving journey.
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-[64%] flex items-center z-20">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-8 min-w-0 lg:min-w-max pl-0 lg:pl-4 w-full"
          >
            {features.map((feature, index) => {
              const rotation =
                index % 2 === 0 ? "lg:rotate-[-4deg]" : "lg:rotate-[4deg]";
              return (
                <div
                  key={feature.id}
                  className={`feature-card ${feature.bgColor} rounded-lg shadow-2xl hover:scale-[1.03] transition-transform duration-300 flex-shrink-0 ${rotation}`}
                  style={{ width: "100%", maxWidth: "420px" }}
                >
                  <div className="flex flex-col gap-6 lg:gap-10 h-full p-7 lg:p-10">
                    <div className="w-fit border border-white/30 rounded-full p-6">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-[60px] h-[60px] md:w-[68px] md:h-[68px] object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-4 flex-1">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-lg md:text-xl text-white/80">
                          {feature.subtitle}
                        </p>
                      </div>
                      <p className="text-lg md:text-xl font-light text-white leading-relaxed mt-auto">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
