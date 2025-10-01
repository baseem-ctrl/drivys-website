import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AppStoreButtons = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Buttons */}
      <div
        className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ${className}`}
      >
        {/* Google Play */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-3 border border-white/30 text-white rounded-lg px-4 py-3 w-full sm:w-auto hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <img
            src="/images/img_x34_2_google_play.png"
            alt="Google Play"
            className="h-8 w-8 flex-shrink-0"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs">GET IT ON</span>
            <span className="text-base font-semibold">Google Play</span>
          </div>
        </button>

        {/* App Store */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center gap-3 border border-white/30 text-white rounded-lg px-4 py-3 w-full sm:w-auto hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <img
            src="/images/img_image_2.png"
            alt="App Store"
            className="h-8 w-8 flex-shrink-0"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-xs">Download on the</span>
            <span className="text-base font-semibold">App Store</span>
          </div>
        </button>
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-8 z-10"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Continue as
              </h2>

              {/* Options */}
              <div className="grid grid-cols-2 gap-6">
                {/* Student */}
                <a
                  href="/student"
                  className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-6 hover:bg-blue-50 transition"
                >
                  <img
                    src="/images/student.png"
                    alt="Student"
                    className="w-16 h-16 rounded-full shadow-md"
                  />
                  <span className="text-lg font-semibold text-gray-700">
                    Student
                  </span>
                </a>

                {/* Partner/Coach */}
                <a
                  href="/partner"
                  className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-6 hover:bg-green-50 transition"
                >
                  <img
                    src="/images/coach.png"
                    alt="Coach"
                    className="w-16 h-16 rounded-full shadow-md"
                  />
                  <span className="text-lg font-semibold text-gray-700">
                    Partner
                  </span>
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppStoreButtons;
