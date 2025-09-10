import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: 'Home', active: true },
    { text: 'About', active: false },
    { text: 'Student', active: false },
    { text: 'Trainer', active: false },
    { text: 'School', active: false },
    { text: 'Blogs', active: false },
  ];

  return (
    <>
      <header className="sticky top-6 z-50 w-full bg-[linear-gradient(180deg,#ffffff19_0%,#ffffff19_50%,#ffffff19_100%)] rounded-xl mx-8 my-6">
        <div className="max-w-[1440px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-[118px] h-[58px] flex-shrink-0">
              <img 
                src="/images/img_logo.svg" 
                alt="Drivys Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-4 text-white" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
              {/* Navigation Menu */}
              <nav className="flex items-center gap-[84px]">
                {menuItems?.map((item, index) => (
                  <button
                    key={index}
                    role="menuitem"
                    className={`text-2xl font-poppins leading-9 text-center transition-colors duration-200 hover:text-white ${
                      item?.active 
                        ? 'text-white font-bold' :'text-white/80 font-normal hover:font-semibold'
                    }`}
                  >
                    {item?.text}
                  </button>
                ))}
              </nav>

              {/* Download Button */}
              <Button
                text="Download Now"
                className="bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] text-white text-2xl font-bold leading-9 px-8 py-4 rounded-lg hover:opacity-90 transition-opacity duration-200"
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
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-6 pt-6 border-t border-white/20`}>
            <div className="flex flex-col gap-4">
              {menuItems?.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  className={`text-xl font-poppins leading-7 text-left py-2 transition-colors duration-200 ${
                    item?.active 
                      ? 'text-white font-bold' :'text-white/80 font-normal hover:text-white hover:font-semibold'
                  }`}
                >
                  {item?.text}
                </button>
              ))}
              
              {/* Mobile Download Button */}
              <div className="mt-4">
                <Button
                  text="Download Now"
                  className="w-full bg-[linear-gradient(90deg,#f68b2c_0%,#c05a00_100%)] text-white text-xl font-bold leading-7 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
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
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
