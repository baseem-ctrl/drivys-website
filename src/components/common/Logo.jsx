import React from 'react';

const Logo = ({ 
  src = "/images/img_logo.svg",
  alt = "Drivys Logo",
  width = "118",
  height = "58",
  className = "",
  ...props 
}) => {
  return (
    <div className={`flex-shrink-0 ${className}`} {...props}>
      <img 
        src={src}
        alt={alt}
        className={`w-[${width}px] h-[${height}px] object-contain`}
      />
    </div>
  );
};

export default Logo;