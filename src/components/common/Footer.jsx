import React from 'react';

const Footer = () => {
  const socialIcons = [
    { src: '/images/img_frame_white_a700_32x32.svg', alt: 'Social Media 1' },
    { src: '/images/img_frame_32x32.svg', alt: 'Social Media 2' },
    { src: '/images/img_frame_1.svg', alt: 'Social Media 3' },
    { src: '/images/img_frame_2.svg', alt: 'Social Media 4' },
    { src: '/images/img_frame_3.svg', alt: 'Social Media 5' },
    { src: '/images/img_frame_4.svg', alt: 'Social Media 6' },
  ];

  const drivysLinks = [
    { text: 'Student', href: '#' },
    { text: 'Trainer', href: '#' },
    { text: 'School', href: '#' },
  ];

  const supportLinks = [
    { text: 'Join Us', href: '#' },
    { text: 'Support', href: '#' },
    { text: 'Terms & Policies', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="w-full bg-transparent">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col gap-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            {/* Logo Section */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <img 
                src="/images/img_footer_logo.svg" 
                alt="Drivys Footer Logo" 
                className="w-[276px] h-[136px] object-contain"
              />
            </div>

            {/* Links and Contact Section */}
            <div className="w-full lg:flex-1 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-xl md:text-2xl font-poppins font-normal leading-9 text-orange-500">
                  Contact Info
                </h3>
                <div className="flex flex-col gap-6">
                  <a 
                    href="mailto:info@drivys.com"
                    className="text-lg md:text-2xl font-poppins font-normal leading-9 text-white hover:text-orange-500 transition-colors duration-200"
                  >
                    info@drivys.com
                  </a>
                  <a 
                    href="tel:+971588963785"
                    className="text-lg md:text-2xl font-poppins font-normal leading-9 text-white hover:text-orange-500 transition-colors duration-200"
                  >
                    +971 58 896 3785
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
                {/* Drivys Links */}
                <div className="flex flex-col gap-4 md:gap-6">
                  <h3 className="text-xl md:text-2xl font-poppins font-normal leading-9 text-orange-500">
                    Drivys
                  </h3>
                  <ul className="flex flex-col gap-6">
                    {drivysLinks?.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link?.href}
                          className="text-lg md:text-2xl font-poppins font-normal leading-9 text-white hover:text-orange-500 transition-colors duration-200"
                        >
                          {link?.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Links */}
                <div className="flex flex-col gap-4 md:gap-6">
                  <h3 className="text-xl md:text-2xl font-poppins font-normal leading-9 text-orange-500">
                    Drivys
                  </h3>
                  <ul className="flex flex-col gap-6">
                    {supportLinks?.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link?.href}
                          className="text-lg md:text-2xl font-poppins font-normal leading-9 text-white hover:text-orange-500 transition-colors duration-200"
                        >
                          {link?.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-4 md:gap-6">
                <h3 className="text-xl md:text-2xl font-poppins font-normal leading-9 text-orange-500">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {socialIcons?.map((icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-8 h-8 flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
                      aria-label={icon?.alt}
                    >
                      <img 
                        src={icon?.src} 
                        alt={icon?.alt}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-white/40"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-lg md:text-2xl font-poppins font-medium leading-9 text-white">
              © 2025 Drivys. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;