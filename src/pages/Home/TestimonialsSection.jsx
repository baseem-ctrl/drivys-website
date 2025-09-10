import React from 'react';
import Button from '../../components/ui/Button';
import RatingBar from '../../components/ui/RatingBar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Leslie Alexander',
      image: '/images/img_ellipse_8.png',
      rating: 5,
      text: 'Drivys made learning to drive so easy! Booking was instant, and my instructor was super helpful and professional.',
      hasStars: true
    },
    {
      id: 2,
      name: 'Leslie Alexander',
      image: '/images/img_ellipse_8_98x98.png',
      rating: 5,
      text: 'Drivys made learning to drive so easy! Booking was instant, and my instructor was super helpful and professional.',
      hasStars: false
    },
    {
      id: 3,
      name: 'Leslie Alexander',
      image: '/images/img_ellipse_8_1.png',
      rating: 5,
      text: 'Drivys made learning to drive so easy! Booking was instant, and my instructor was super helpful and professional.',
      hasStars: false
    },
    {
      id: 4,
      name: 'Leslie Alexander',
      image: '/images/img_ellipse_8_2.png',
      rating: 5,
      text: 'Drivys made learning to drive so easy! Booking was instant, and my instructor was super helpful and professional.',
      hasStars: true
    },
    {
      id: 5,
      name: 'Leslie Alexander',
      image: '/images/img_ellipse_8.png',
      rating: 5,
      text: 'Drivys made learning to drive so easy! Booking was instant, and my instructor was super helpful and professional.',
      hasStars: true
    },
    {
      id: 6,
      name: 'Leslie Alexander',
      image: '/images/img_ellipse_8_1.png',
      rating: 5,
      text: 'Drivys made learning to drive so easy! Booking was instant, and my instructor was super helpful and professional.',
      hasStars: true
    }
  ];

  const renderStars = () => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <img 
            key={star}
            src="/images/img_frame_yellow_900_01.svg" 
            alt="Star Rating" 
            className="w-[38px] h-[38px] object-contain"
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[342px] bg-[linear-gradient(0deg,#00000000_0%,#000000_100%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[342px] bg-[linear-gradient(0deg,#00000000_0%,#000000_100%)]"></div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="flex flex-col gap-4">
            <Button
              text="Testimonial"
              className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-[linear-gradient(180deg,#cb217d7f_0%,#e387b944_50%,#ffffff00_100%)] text-white text-2xl font-normal px-4 py-2 rounded-lg shadow-[0px_4px_13px_#888888ff] w-fit"
              fill_background=""
              border_border_image=""
              effect_box_shadow=""
              layout_align_self=""
              fill_background_color=""
              layout_width=""
              padding=""
              position=""
              margin=""
              variant=""
              size=""
              onClick={() => {}}
            />
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-black leading-tight lg:leading-[78px] text-left">
                <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                  Trusted by 
                </span>
                <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                  Learners
                </span>
              </h2>
              <div className="lg:w-[32%]">
                <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c]">
                  Real experiences from our learners who trusted us with their driving journey.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1760px]">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="bg-[#141414] rounded-lg p-6 shadow-[0px_4px_17px_#888888ff]">
                <div className="flex flex-col gap-4">
                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial?.image} 
                      alt={testimonial?.name}
                      className="w-[98px] h-[98px] object-cover rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl md:text-2xl font-poppins font-bold leading-10 text-white">
                        {testimonial?.name}
                      </h3>
                      {testimonial?.hasStars ? (
                        renderStars()
                      ) : (
                        <RatingBar 
                          rating={testimonial?.rating} 
                          readOnly={true} 
                          onRatingChange={() => {}}
                          layout_width=""
                          position=""
                          className=""
                          starClassName=""
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c]">
                    {testimonial?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;