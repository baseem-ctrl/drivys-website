import React from 'react';
import { Shield, Calendar, DollarSign, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
    const features = [
        {
            id: 1,
            icon: Award,
            title: 'Certified & Trusted',
            subtitle: 'Instructor',
            description: 'Learn from certified instructors you can trust for a safe and confident driving experience.',
            bgColor: 'bg-gray-800',
            rotation: '-rotate-6'
        },
        {
            id: 2,
            icon: Shield,
            title: 'On-demand',
            subtitle: 'Scheduling',
            description: 'Learn whenever you want with flexible, on-demand driving sessions.',
            bgColor: 'bg-gradient-to-br from-orange-500 to-orange-600',
            rotation: 'rotate-3'
        },
        {
            id: 3,
            icon: Calendar,
            title: 'Transparent',
            subtitle: 'Pricing',
            description: 'Clear, upfront pricing with no hidden fees—what you see is what you pay.',
            bgColor: 'bg-gray-800',
            rotation: '-rotate-3'
        },
        {
            id: 4,
            icon: DollarSign,
            title: 'Innovative',
            subtitle: 'Methods',
            description: 'Modern learning techniques to maximize your driving skills efficiently.',
            bgColor: 'bg-gray-800',
            rotation: 'rotate-6'
        }
    ];

    return (
        <section className="w-full bg-black py-16 lg:py-24 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <div className="w-full lg:w-2/5 flex-shrink-0">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-left">
                                <span className="text-white">
                                  Why Choose Us –
                                </span>
                                <br />
                                <span className="text-white">
                                  Experience the
                                </span>
                                <br />
                                <span className="text-white">
                                  Drivys Difference
                                </span>
                            </h2>
                            <p className="text-xl lg:text-2xl font-normal leading-relaxed text-gray-400">
                                Your all-in-one platform to manage every step of your driving journey.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Cards Container */}
                    <div className="w-full lg:flex-1 relative">
                        {/* Horizontal scrolling container */}
                        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div
                                        key={feature.id}
                                        className={`flex-shrink-0 ${feature.bgColor} ${feature.rotation} rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl`}
                                        style={{
                                            width: '280px',
                                            height: '320px',
                                            minWidth: '280px'
                                        }}
                                    >
                                        <div className="flex flex-col gap-6 h-full">
                                            {/* Icon Circle */}
                                            <div className="w-16 h-16 bg-transparent border-2 border-white/20 rounded-full flex items-center justify-center">
                                                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                                            </div>

                                            {/* Content */}
                                            <div className="flex flex-col gap-4 flex-1">
                                                {/* Title and Subtitle */}
                                                <div className="flex flex-col gap-1">
                                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                                        {feature.title}
                                                    </h3>
                                                    <p className="text-lg font-medium text-white/90">
                                                        {feature.subtitle}
                                                    </p>
                                                </div>

                                                {/* Description */}
                                                <p className="text-base font-normal leading-relaxed text-white/80 mt-auto">
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
            </div>

            {/* Hide scrollbar styles */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUsSection;