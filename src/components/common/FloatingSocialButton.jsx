import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FloatingSocialButton = () => {
  const [open, setOpen] = useState(false);

  const socialLinks = [
    {
      name: 'Phone',
      href: 'tel:+971',
      color: 'bg-blue-500',
      icon: <FaPhone size={20} />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/1234567890',
      color: 'bg-green-500',
      icon: <FaWhatsapp size={20} />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Drivysapp/',
      color: 'bg-blue-600',
      icon: <FaFacebookF size={20} />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drivysapp/',
      color: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
      icon: <FaInstagram size={20} />,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/drivysapp',
      color: 'bg-black',
      icon: <FaXTwitter size={20} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/drivys',
      color: 'bg-blue-700',
      icon: <FaLinkedinIn size={20} />,
    },
  ];

  return (
    <div className="fixed bottom-28 right-2 flex flex-col items-end z-50">
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="px-6 py-3 flex items-center justify-center bg-[#c05a00] text-white rounded-md shadow-xl font-bold text-sm tracking-wide"
        animate={{ scale: open ? 0.95 : 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
      >
        {open ? "Close" : "Contact Us"}
      </motion.button>

      {/* Cascade Social Buttons */}
      <AnimatePresence>
        {open && (
          <div className="flex flex-col items-end mt-3 space-y-3">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center ${link.color} text-white rounded-sm shadow-lg`}
                initial={{ x: 50, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 50, opacity: 0, scale: 0.5 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Contact us on ${link.name}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingSocialButton;