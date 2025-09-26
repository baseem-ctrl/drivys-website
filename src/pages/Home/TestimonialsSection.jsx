import React from "react";
import Button from "@/components/ui/Button.jsx";

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, name: "Alex Prokhorov", username: "@alex_pro_dsg", image: "/images/img_ellipse_8.png", text: "Stunning. I can finally make this link in bio website haha", verified: true },
    { id: 2, name: "Lam'aan", username: "@lamaandesign", image: "/images/img_ellipse_8_98x98.png", text: "Love the work on this one. Waitlisted and excited to see where it goes!", verified: false },
    { id: 3, name: "Brett", username: "@thebtjackson", image: "/images/img_ellipse_8_1.png", text: "I like this a lot. Signed up!", verified: true },
    { id: 4, name: "Dmitry Zhomir", username: "@DemetriusZhomir", image: "/images/img_ellipse_8_2.png", text: "You've un-ugly'fied this stuff!", verified: false },
    { id: 5, name: "Hewar", username: "@hewarsaber", image: "/images/img_ellipse_8.png", text: "If Linktree had taste, it'd look like this 🔥", verified: true },
    { id: 6, name: "Chinaa", username: "@chinwechinaa", image: "/images/img_ellipse_8_1.png", text: "this is so good 😍 ❤️ 💯", verified: false },
    { id: 7, name: "Jagdev Soni", username: "@SoniJagdev", image: "/images/img_ellipse_8_2.png", text: "Visually popsite looks better", verified: true },
    { id: 8, name: "Ali", username: "@aaalixyz", image: "/images/img_ellipse_8.png", text: "Let me innnnnnnn", verified: false },
    { id: 9, name: "Brian Ca", username: "@iambrianconnor", image: "/images/img_ellipse_8_1.png", text: "Its sooooo good", verified: true }
  ];

  // Arrange columns for continuous scrolling
  const column1 = [...testimonials.slice(0, 3), ...testimonials.slice(6, 9), ...testimonials.slice(0, 3)];
  const column2 = [...testimonials.slice(3, 6), ...testimonials.slice(0, 3), ...testimonials.slice(3, 6)];
  const column3 = [...testimonials.slice(6, 9), ...testimonials.slice(3, 6), ...testimonials.slice(6, 9)];
  const columns = [column1, column2, column3];

  return (
    <section className="w-full bg-black py-12 lg:py-20 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6 mb-12">
        <div className="flex flex-col gap-3">
          <Button text="Testimonials" className="text-white text-lg sm:text-xl md:text-2xl font-normal px-4 py-2 rounded-lg w-fit" />
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
            <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
              Trusted by{" "}
            </span>
            <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
              Learners
            </span>
          </h2>
        </div>
        <div className="lg:w-[28%]">
          <p className="text-sm md:text-base lg:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
            Real experiences from our learners who trusted us with their driving journey.
          </p>
        </div>
      </div>

      {/* Testimonials Columns */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden relative"
          style={{
            height: "500px",
            maskImage: "linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 100px, black calc(100% - 100px), transparent)"
          }}
        >
          {columns.map((columnTestimonials, colIndex) => (
            <div
              key={colIndex}
              className="scroll-column flex flex-col gap-4 pt-4"
              style={{ animationDuration: `${20 + colIndex * 5}s` }} // faster speed
            >
              {columnTestimonials.map((testimonial, index) => (
                <div
                  key={`${colIndex}-${index}`}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 md:p-5 flex flex-col gap-3 cursor-pointer min-h-[120px] transition-all duration-200 hover:bg-[#252525] hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#333] object-cover"
                    />
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-white font-semibold text-sm md:text-base">{testimonial.name}</span>
                        {testimonial.verified && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#1d9bf0">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                          </svg>
                        )}
                        <span className="text-[#888] text-xs ml-1">𝕏</span>
                      </div>
                      <span className="text-[#666] text-xs md:text-sm">{testimonial.username}</span>
                    </div>
                  </div>
                  <p className="text-[#e1e5e9] text-sm md:text-base">{testimonial.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll animation */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scroll-column {
          animation-name: scrollUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
