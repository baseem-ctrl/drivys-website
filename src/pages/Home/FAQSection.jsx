import React, { useState } from 'react';


const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I register for training?',
      answer: 'You can register for training by downloading our app or visiting our website. Simply create an account, choose your preferred training package, and book your first session with a certified instructor.'
    },
    {
      id: 2,
      question: 'How long does the training take?',
      answer: 'Training duration varies depending on the package you choose and your learning pace. Our Bronze package includes 2 basic sessions, while our Unlimited package provides ongoing support until you pass your test.'
    },
    {
      id: 3,
      question: 'Are the instructors certified?',
      answer: 'Yes, all our instructors are fully certified and licensed professionals with extensive experience in driver education. They undergo regular training updates to maintain the highest standards.'
    },
    {
      id: 4,
      question: 'Can I choose my training schedule?',
      answer: 'Absolutely! Our platform offers flexible scheduling that allows you to book lessons at your convenience. You can schedule sessions that fit your lifestyle and availability.'
    },
    {
      id: 5,
      question: 'Can I book lessons instantly?',
      answer: 'Yes, our real-time booking system allows you to schedule driving lessons with certified instructors instantly, offering maximum flexibility and convenience.'
    },
    {
      id: 6,
      question: 'What if I need extra classes?',
      answer: 'We offer flexible options for additional classes. Depending on your package, you may get discounted rates for extra sessions, and our Unlimited package includes unlimited training sessions.'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center w-fit bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-[linear-gradient(180deg,#cb217d7f_0%,#e387b944_50%,#ffffff00_100%)] rounded-lg px-2 py-2 shadow-[0px_4px_13px_#888888ff]">
              <span className="text-2xl font-poppins font-normal leading-9 text-white px-2">
                FAQ
              </span>
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-black leading-tight lg:leading-[78px] text-left">
                <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                  Frequently Asked 
                </span>
                <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                  Question
                </span>
              </h2>
              <div className="lg:w-[32%]">
                <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c]">
                  Quick answers to the most common questions about our training.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[1760px]">
            {faqs?.map((faq) => (
              <div 
                key={faq?.id} 
                className="bg-[#141414] rounded-lg p-8 lg:p-11 shadow-[0px_4px_17px_#888888ff] cursor-pointer transition-all duration-200 hover:bg-[#1a1a1a]"
                onClick={() => toggleFAQ(faq?.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-poppins font-normal leading-8 text-white pr-4">
                    {faq?.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <img 
                      src="/images/img_add.svg" 
                      alt={openFAQ === faq?.id ? "Collapse" : "Expand"} 
                      className={`w-[32px] h-[32px] object-contain transition-transform duration-200 ${
                        openFAQ === faq?.id ? 'rotate-45' : ''
                      }`}
                    />
                  </div>
                </div>
                
                {/* Answer - Expandable */}
                {openFAQ === faq?.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <p className="text-lg font-poppins font-normal leading-7 text-[#94969c]">
                      {faq?.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;