import React from 'react';
import { Helmet } from 'react-helmet';

import HeroSection from './HeroSection';
import InstructorSection from './InstructorSection';
import ProgramsSection from './ProgramsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import Footer from '../../components/common/Footer';
import VehicleCarousel from './SliderSection';
import DrivingCarousel from './SctrollAnimation';
import Slider from '@/pages/Home/slide.jsx';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Professional Driving School | Certified Instructors & Flexible Training | Drivys
        </title>
        <meta
          name="description"
          content="Learn to drive with certified professional instructors at Drivys. Choose from car, bus, and truck training programs with flexible scheduling, real-time booking, and comprehensive packages starting from 599 AED. Trusted by 1000+ students across the UAE."
        />
      </Helmet>

      <main className="w-full bg-black relative overflow-hidden">
        {/* Main Content */}
        <HeroSection />
        <InstructorSection />
        <ProgramsSection />
        <div className="hidden lg:block">
          <WhyChooseUsSection />
        </div>
        <VehicleCarousel />
        <PricingSection />
        <DrivingCarousel />
        <TestimonialsSection />
        <FAQSection />
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-6">
          <div className="w-full h-[1px] bg-white/40 mb-8"></div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;