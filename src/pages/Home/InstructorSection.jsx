import React from 'react';
import Button from '../../components/ui/Button';

const InstructorSection = () => {
  const instructors = [
    {
      id: 1,
      name: 'Michael Chen',
      image: '/images/img_instructor_1.png',
      specialties: 'Automatic | Manual | Defensive Driving'
    },
    {
      id: 2,
      name: 'Lynn P. Holt',
      image: '/images/img_instructor_3.png',
      specialties: 'Automatic | Manual | Defensive Driving'
    },
    {
      id: 3,
      name: 'Scott Everett',
      image: '/images/img_instructor_2.png',
      specialties: 'Automatic | Manual | Defensive Driving'
    }
  ];

  return (
    <section className="w-full bg-black py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-16">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
            <div className="flex flex-col gap-4">
              <Button
                text="Trainers"
                className="bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] border border-[linear-gradient(180deg,#cb217d7f_0%,#e387b944_50%,#ffffff00_100%)] text-white text-2xl font-normal px-4 py-2 rounded-lg shadow-[0px_4px_13px_#888888ff] w-fit"
                onClick={() => {}}
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px] text-left">
                <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                  Learn From 
                </span>
                <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                  The Best
                </span>
              </h2>
            </div>
            <div className="lg:w-[28%]">
              <p className="text-xl md:text-2xl font-poppins font-normal leading-relaxed text-[#94969c]">
                Wide selection of expertise, language preference, and gender selection.
              </p>
            </div>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1760px]">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="relative w-full">
                <div className="relative w-full h-[572px] rounded-xl overflow-hidden">
                  {/* Instructor Image */}
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000cc_0%,#000000cc_100%)] rounded-xl"></div>
                  
                  {/* Instructor Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-[linear-gradient(180deg,#00000000_0%,#00000033_100%)] rounded-b-xl shadow-[0px_4px_13px_#888888ff]">
                    <div className="flex flex-col gap-1 items-center text-center">
                      <h3 className="text-2xl font-poppins font-bold leading-10 text-white mt-2">
                        {instructor.name}
                      </h3>
                      <p className="text-xl font-poppins leading-9 text-white">
                        <span className="font-bold">Specialties: </span>
                        <span className="font-normal">{instructor.specialties}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
