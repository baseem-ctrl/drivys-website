import React from 'react';
import Header from '../../components/common/Header';
import AppStoreButtons from '../../components/common/AppStoreButtons'; //  <- 1. IMPORT the new component

const HeroSection = () => {
    return (
        <section
            className="w-full min-h-screen bg-black relative"
            style={{
                backgroundImage: 'url(/images/img_image_29.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 m">
                <div className="flex flex-col justify-start items-center w-full">
                    <Header />

                    {/* Hero Content */}
                    <div className="flex flex-col lg:flex-row justify-start items-center w-full mt-8 lg:mt-16 mb-16 lg:mb-32 " style={{ marginTop: '10%' }}>
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <img
                                style={{ width: '75%', height: 'auto' }}
                                src="/images/img_logo_animation_2.gif"
                                alt="Drivys Animation"
                                className="w-full max-w-[880px] h-auto object-contain"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col gap-4 lg:gap-6 items-start lg:self-end lg:mb-6">
                            <div className="flex items-center gap-3 rounded-lg px-4 py-3 bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)]">
                                <img src="/images/img_frame_5.png" alt="Trusted Badge" className="w-[72px] h-[32px] object-contain" />
                                <span className="text-lg md:text-2xl font-poppins font-normal leading-9 text-white">
                  Trusted by 1k users
                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-poppins font-black leading-tight lg:leading-[66px] text-left">
                <span className="bg-[linear-gradient(270deg,#cccccc_0%,#ffffff_50%,#cccccc_100%)] bg-clip-text text-transparent">
                  Learn from Certified{'\n'}
                    Instructors. Book Instantly.{'\n'}
                </span>
                                <span className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] bg-clip-text text-transparent">
                  Drive Smarter.
                </span>
                            </h1>

                            {/* 2. USE the new component here */}
                            <AppStoreButtons className="mt-6" />

                        </div>
                    </div>
                </div>
            </div>

            {/* Brand Logos Continuous Sliding */}
            <div className="w-full overflow-hidden py-8 bg-gradient-to-r from-transparent to-transparent relative">
                <div className="flex animate-slide whitespace-nowrap gap-16">
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <img src="/images/Logo01.png" alt="Logo 1" className="w-[160px]  object-contain opacity-70" />
                            <img src="/images/Logo02.png" alt="Logo 2" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo03.png" alt="Logo 3" className="w-[160px]  object-contain opacity-70" />
                            <img src="/images/Logo04.png" alt="Logo 4" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo05.png" alt="Logo 5" className="w-[160px]  object-contain opacity-70" />
                            <img src="/images/Logo06.png" alt="Logo 6" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo07.png" alt="Logo 7" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo08.png" alt="Logo 7" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo09.png" alt="Logo 7" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo10.png" alt="Logo 7" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo11.png" alt="Logo 7" className="w-[160px] object-contain opacity-70" />
                            <img src="/images/Logo12.png" alt="Logo 7" className="w-[160px] object-contain opacity-70" />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes slide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-slide {
                    display: flex;
                    animation: slide 30s linear infinite;
                }
            `}</style>
        </section>
    );
};
export default HeroSection;