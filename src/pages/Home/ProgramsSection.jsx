import React from 'react';
import Button from '../../components/ui/Button';

const features = [
    {
        id: 1,
        icon: '/images/img_fi_2636402.svg',
        title: 'Real-time instructor booking',
        description:
            'Schedule driving lessons instantly with certified instructors, offering flexibility and convenience that fits your lifestyle.'
    },
    {
        id: 2,
        icon: '/images/img_fi_69856.svg',
        title: 'Track your progress',
        description:
            'Track your progress step-by-step, ensuring you are always moving forward with confidence.',
        hasDownloadSection: true
    },
    {
        id: 3,
        icon: '/images/img_fi_598044.svg',
        title: 'Flexible scheduling',
        description:
            'Plan your lessons at your convenience for a stress-free learning experience.'
    },
    {
        id: 4,
        icon: '/images/img_fi_566718.svg',
        title: 'In-app communication',
        description:
            'Smooth coordination between you and your instructor, enhancing your learning experience.'
    },
    {
        id: 5,
        icon: '/images/img_fi_2258567.svg',
        title: 'Digital certifications',
        description:
            'Receive accredited digital certifications upon course completion for easy verification.'
    }
];

const ProgramsSection = () => {
    return (
        <section className="w-full bg-black py-16 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '50px' }}>
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
                    <div className="flex flex-col gap-3">
                        <Button
                            text="Features"
                            className="text-white text-2xl font-normal px-4 py-2 rounded-lg w-fit"
                        />
                        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-poppins font-bold leading-tight lg:leading-[78px]">
                            <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                                The Drivys
                            </span>
                            <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                                Platform
                            </span>
                        </h2>
                    </div>
                    <div className="lg:w-[28%]">
                        <p className="text-sm md:text-xl font-poppins font-normal leading-relaxed text-[#94969c]">
                            Your all-in-one platform to manage every steps of your driving journey.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: '100px' }}>
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className={`flex flex-col gap-6 group ${feature.hasDownloadSection ? 'lg:row-span-2' : ''}`}
                        >
                            {/* Feature Card */}
                            <div className="bg-[#121212] rounded-2xl p-6 lg:p-8 flex flex-col h-full hover:scale-[1.03] transition-transform duration-300 shadow-lg">
                                <div className="flex flex-col gap-4">
                                    <div className="w-fit p-4 rounded-[40px] bg-gradient-to-tr from-white/40 to-white/0 shadow-lg">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{feature.title}</h3>
                                    <p className="text-gray-400 flex-1">{feature.description}</p>

                                    {/* Animated Accent Line applied to all */}
                                    <div className="relative w-full h-[2px] rounded bg-gray-800 overflow-hidden">
                                        <div className="absolute left-0 top-0 h-full w-full bg-orange-500 shadow-md origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Download Section for special feature */}
                            {feature.hasDownloadSection && (
                                <div className="bg-[#1a1a1a]/70 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0px_0px_80px_#ffffff1a]">
                                    <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                                        Download Now
                                    </h4>
                                    <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center mt-12">
                                        {/* Google Play Card */}
                                        <div className="relative flex-1 max-w-xs h-48 bg-white/10 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-md animate-pulse">
                                                <img src="/images/img_x34_2_google_play.png" alt="Google Play" className="w-10 h-10 object-contain" />
                                            </div>
                                            <span className="mt-4 text-white font-semibold text-lg">Google Play</span>
                                        </div>

                                        {/* App Store Card */}
                                        <div className="relative flex-1 max-w-xs h-48 bg-white/10 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center shadow-md animate-pulse">
                                                <img src="/images/img_image_2.png" alt="App Store" className="w-10 h-10 object-contain" />
                                            </div>
                                            <span className="mt-4 text-white font-semibold text-lg">App Store</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
