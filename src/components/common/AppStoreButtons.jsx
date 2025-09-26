import React from 'react';

const AppStoreButtons = ({ className = '' }) => {
    return (
        <div className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ${className}`}>
            {/* Google Play Button */}
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                // Added justify-center, w-full, and sm:w-auto
                className="flex items-center justify-center gap-3 border border-white/30 text-white rounded-lg px-4 py-3 w-full sm:w-auto hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
                <img
                    src="/images/img_x34_2_google_play.png"
                    alt="Google Play"
                    className="h-8 w-8 flex-shrink-0" // Added flex-shrink-0
                />
                <div className="flex flex-col text-left leading-tight">
                    <span className="text-xs">GET IT ON</span>
                    <span className="text-base font-semibold">Google Play</span>
                </div>
            </a>

            {/* App Store Button */}
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                // Added justify-center, w-full, and sm:w-auto
                className="flex items-center justify-center gap-3 border border-white/30 text-white rounded-lg px-4 py-3 w-full sm:w-auto hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
                <img
                    src="/images/img_image_2.png"
                    alt="App Store"
                    className="h-8 w-8 flex-shrink-0" // Added flex-shrink-0
                />
                <div className="flex flex-col text-left leading-tight">
                    <span className="text-xs">Download on the</span>
                    <span className="text-base font-semibold">App Store</span>
                </div>
            </a>
        </div>
    );
};

export default AppStoreButtons;