import React from "react";
import Button from "@/components/ui/Button"; // make sure path is correct

const WhyChooseUsMobileSection = () => {
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

  return (
    <section className="w-full bg-black py-16 md:py-20 lg:hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10 px-4">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col gap-3">
            <Button
              text="Trainers"
              className="text-white text-2xl font-normal px-4 py-2 rounded-lg w-fit"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
              <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                Learn From
              </span>
              <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                The Best
              </span>
            </h2>
          </div>
          <div className="lg:w-[28%] mt-4 lg:mt-0">
            <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
              Wide selection of expertise, language preference, and gender selection.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-6 mt-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.bgColor} rounded-2xl shadow-xl flex flex-col items-center p-6`}
              style={{ aspectRatio: "1/1" }}
            >
              <div className="w-fit border border-white/30 rounded-full p-5 ">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[48px] h-[48px] object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mt-4 text-center">
                {feature.title}
              </h3>
              <p className="text-white/80 text-base text-center">{feature.subtitle}</p>
              <p className="text-white/70 text-sm text-center mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsMobileSection;
