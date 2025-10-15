import React from "react";

const AppStoreButtons = ({ className = "", googlePlayLink, appStoreLink }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto ${className}`}
    >
      {/* Google Play */}
      <a
        href={googlePlayLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-start sm:justify-center gap-3 border border-white/30 text-white rounded-lg px-5 py-3 min-h-[60px] hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto cursor-pointer"
      >
        <img
          src="/images/img_x34_2_google_play.png"
          alt="Google Play"
          className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
        />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-xs">GET IT ON</span>
          <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
            Google Play
          </span>
        </div>
      </a>

      {/* App Store */}
      <a
        href={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-start sm:justify-center gap-3 border border-white/30 text-white rounded-lg px-5 py-3 min-h-[60px] hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto cursor-pointer"
      >
        <img
          src="/images/img_image_2.png"
          alt="App Store"
          className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
        />
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-xs">Download on the</span>
          <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
            App Store
          </span>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;
