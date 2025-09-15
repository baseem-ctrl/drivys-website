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
      vehicleImage: "/images/img_vector.png",
      hoverColor: "#6EBF75", // Green
    },
    {
      id: 2,
      number: "02",
      title: "Bus",
      description: "Get trained for public transport and commercial bus driving.",
      features: ["Automatic", "Manual"],
      vehicleImage: "/images/img_vector_white_a700_296x562.png",
      hoverColor: "#FBBC01", // Yellow
    },
    {
      id: 3,
      number: "03",
      title: "Truck",
      description:
        "Master heavy vehicle handling for logistics and long-distance routes.",
      features: ["Automatic", "Manual"],
      vehicleImage: "/images/img_group_179.png",
      hoverColor: "#D52C2C", // Red
    },
  ];

  return (
    <section className="w-full bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 mb-20">
          <div className="flex flex-col gap-3">
            <Button
              text="Vehicle Options"
              className="text-white text-2xl font-normal px-4 py-2 rounded-lg w-fit"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
              <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                Choose Your{" "}
              </span>
              <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                Training Path
              </span>
            </h2>
          </div>
          <div className="lg:w-[28%]">
            <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
              With 400+ active vehicles, we deliver reliable and timely service.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="relative">
          {trainingOptions.map((option, index) => (
            <Card
              key={option.id}
              option={option}
              index={index}
              total={trainingOptions.length}
            />
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
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [index * 50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, zIndex: index + 1 }}
      whileHover={{ backgroundColor: option.hoverColor }}
      transition={{ duration: 0.5 }}
      className="sticky top-24 w-full bg-[#141414] rounded-2xl p-8 md:p-12 shadow-2xl mb-20 group"
    >
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <Button
            text={option.number}
            className="border border-white text-white text-4xl md:text-5xl font-bold px-6 py-4 rounded-sm w-fit group-hover:text-black transition-colors"
          />
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#f68c2d] group-hover:text-black transition-colors">
            {option.title}
          </h3>
          <p className="text-lg md:text-xl text-white group-hover:text-black transition-colors">
            {option.description}
          </p>

          <div className="flex flex-col gap-3">
            {option.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src="/images/img_frame.svg"
                  className="w-6 h-6"
                  alt="feature"
                />
                <span className="text-white group-hover:text-black transition-colors text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Button
            text="Choose Vehicle"
            className="border border-white text-white text-xl font-bold px-4 py-2 rounded-lg w-fit mt-6 group-hover:text-black transition-colors"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={option.vehicleImage}
            className="max-w-[500px] w-full object-contain"
            alt={option.title}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleTrainingSection;
