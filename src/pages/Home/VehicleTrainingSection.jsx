import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../components/ui/Button";

const VehicleTrainingSection = () => {
  const trainingOptions = [
    {
      id: 1,
      number: "01",
      title: "Car",
      description:
        "Learn everyday driving skills for city and highway roads with confidence.",
      features: ["Automatic", "Manual"],
      vehicleImage: "/images/img_vector.svg",
      wheelImages: [
        { src: "/images/img_vector_white_a700.svg", position: "top-right" },
        { src: "/images/img_vector_white_a700.svg", position: "bottom-left" },
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Bus",
      description:
        "Get trained for public transport and commercial bus driving.",
      features: ["Automatic", "Manual"],
      vehicleImage: "/images/img_vector_white_a700_296x562.svg",
    },
    {
      id: 3,
      number: "03",
      title: "Truck",
      description:
        "Master heavy vehicle handling for logistics and long-distance routes.",
      features: ["Automatic", "Manual"],
      vehicleImage: "/images/img_group_179.svg",
    },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <Button
            text="Vehicle Options"
            className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_100%)] border border-[#cb217d] text-white text-2xl font-normal px-4 py-2 rounded-lg shadow-lg w-fit"
          />
          <h2 className="text-5xl md:text-6xl font-black mt-6">
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
              Choose Your{" "}
            </span>
            <span className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] bg-clip-text text-transparent">
              Training Path
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mt-6 lg:w-[50%]">
            With 400+ active vehicles, we deliver reliable and timely service.
          </p>
        </div>

        {/* Stack Cards */}
        <div className="relative h-[250vh]">
          {trainingOptions.map((option, index) => (
            <Card key={option.id} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ option, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // controls when animation triggers
  });

  // Animate stacking effect
  const y = useTransform(scrollYProgress, [0, 1], [index * 80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + index * 0.05]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.6, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, opacity, zIndex: 10 - index }}
      className="sticky top-24 w-full bg-[#141414] rounded-2xl p-8 md:p-12 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <Button
            text={option.number}
            className="border border-white text-white text-4xl md:text-5xl font-bold px-6 py-4 rounded-lg w-fit"
          />
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#f68c2d]">
            {option.title}
          </h3>
          <p className="text-lg md:text-xl text-white">{option.description}</p>

          <div className="flex flex-col gap-3">
            {option.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={
                    index === 1
                      ? "/images/img_frame_white_a700.svg"
                      : "/images/img_frame.svg"
                  }
                  className="w-6 h-6"
                  alt="feature"
                />
                <span className="text-white text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <Button
            text="Choose Vehicle"
            className="border border-white text-white text-xl font-bold px-4 py-2 rounded-lg w-fit mt-6"
          />
        </div>

        {/* Vehicle Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={option.vehicleImage}
            
            className="max-w-[500px] w-full object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleTrainingSection;
