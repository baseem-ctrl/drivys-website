import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Student", path: "/student" },
    { text: "Trainer", path: "/trainer" },
    { text: "School", path: "/school" },
    { text: "Blogs", path: "/blogs" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full bg-[rgba(255,255,255,0.1)] rounded-xl backdrop-blur-md mx-auto max-w-[95%] sm:max-w-[90%] lg:max-w-[1440px]">
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[90px] sm:w-[110px] lg:w-[118px] flex-shrink-0">
            <img
              src="/images/img_logo.svg"
              alt="Drivys Logo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Centered Nav (desktop only) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex gap-6 xl:gap-[50px]">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`text-base xl:text-xl font-poppins transition-colors duration-200 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-white/80 font-normal hover:text-white hover:font-semibold"
                    }`}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden lg:block">
            <Button
              text="Download Now"
              className="bg-gradient-to-r from-[#f68b2c] to-[#c05a00] text-white font-bold px-5 xl:px-8 py-2.5 xl:py-4 rounded-lg hover:opacity-90 transition"
              style={{ fontSize: "16px", lineHeight: "1.6rem" }}
              onClick={() => {}}
            />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="block lg:hidden p-2 text-white"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:hidden mt-4 pt-4 border-t border-white/20`}
        >
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-lg sm:text-xl font-poppins py-2 transition-colors duration-200 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-white/80 font-normal hover:text-white hover:font-semibold"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.text}
                </Link>
              );
            })}

            {/* Mobile Download Button */}
            <div className="mt-3">
              <Button
                text="Download Now"
                className="w-full bg-gradient-to-r from-[#f68b2c] to-[#c05a00] text-white font-bold px-4 py-3 rounded-lg hover:opacity-90 transition"
                style={{ fontSize: "16px" }}
                onClick={() => {}}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
