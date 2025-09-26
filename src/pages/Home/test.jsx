import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);


  const faqs = [
    {
      id: 1,
      question: "How do I register for training?",
      answer:
        "You can register for training by downloading our app or visiting our website. Simply create an account, choose your preferred training package, and book your first session with a certified instructor.",
    },
    {
      id: 2,
      question: "How long does the training take?",
      answer:
        "Training duration varies depending on the package you choose and your learning pace. Our Bronze package includes 2 basic sessions, while our Unlimited package provides ongoing support until you pass your test.",
    },
    {
      id: 3,
      question: "Are the instructors certified?",
      answer:
        "Yes, all our instructors are fully certified and licensed professionals with extensive experience in driver education. They undergo regular training updates to maintain the highest standards.",
    },
    {
      id: 4,
      question: "Can I choose my training schedule?",
      answer:
        "Absolutely! Our platform offers flexible scheduling that allows you to book lessons at your convenience. You can schedule sessions that fit your lifestyle and availability.",
    },
    {
      id: 5,
      question: "Can I book lessons instantly?",
      answer:
        "Yes, our real-time booking system allows you to schedule driving lessons with certified instructors instantly, offering maximum flexibility and convenience.",
    },
    {
      id: 6,
      question: "What if I need extra classes?",
      answer:
        "We offer flexible options for additional classes. Depending on your package, you may get discounted rates for extra sessions, and our Unlimited package includes unlimited training sessions.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <section className="w-full bg-black py-12 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
          <div className="flex flex-col gap-3">
            <Button
              text="Trainers"
              className=" text-white text-2xl font-normal px-4 py-2 rounded-lg
                            w-fit"
            />
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
                            <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)]
                               bg-clip-text text-transparent">
                                Learn From
                            </span>
              <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)]
                               bg-clip-text text-transparent">
                                The Best
                            </span>
            </h2>
          </div>
          <div className="lg:w-[28%]">
            <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
              Wide selection of expertise, language preference, and gender selection.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#141414] rounded-lg p-6 lg:p-8 cursor-pointer transition-colors duration-300 hover:bg-[#1e1e1e]"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-poppins font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <button
                  className={`w-7 h-7 flex items-center justify-center rounded-full border border-gray-500 text-white text-2xl transform transition-transform duration-300 ${
                    openFAQ === faq.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </button>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === faq.id ? "grid-rows-[1fr] mt-4 pt-4 border-t border-gray-700" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-base md:text-lg font-poppins text-[#94969c] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
