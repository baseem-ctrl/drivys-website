import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const lineClasses = cva(
  'block',
  {
    variants: {
      orientation: {
        horizontal: 'w-full',
        vertical: 'h-full',
      },
      color: {
        primary: 'bg-background-primary',
        secondary: 'bg-background-secondary',
        accent: 'bg-background-accent',
        white: 'bg-background-white',
        gray: 'bg-border-border-gray',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      color: 'gray',
    },
  }
);

const Line = ({
  // Dimensions from w*h format
  width,
  height,
  
  // Style properties
  backgroundColor = 'bg-border-border-gray',
  
  // Layout properties
  layoutProperty,
  
  // Optional parameters
  className,
  style,
  ...props
}) => {
  // Determine orientation based on dimensions
  const isVertical = height && width && parseInt(height) > parseInt(width);
  const orientation = isVertical ? 'vertical' : 'horizontal';
  
  // Build dimension classes
  const dimensionClasses = [];
  if (width) {
    dimensionClasses?.push(`w-[${width}px]`);
  }
  if (height) {
    dimensionClasses?.push(`h-[${height}px]`);
  }
  
  // Parse layout properties if provided
  let layoutClasses = '';
  if (layoutProperty) {
    const properties = layoutProperty?.split(',');
    properties?.forEach(prop => {
      const [key, value] = prop?.split('=');
      if (key === 'width' && value === 'flex-1') {
        layoutClasses += ' w-full';
      }
    });
  }
  
  // Build background class
  const bgClass = backgroundColor?.startsWith('bg-') ? backgroundColor : `bg-[${backgroundColor}]`;
  
  return (
    <div
      className={twMerge(
        lineClasses({ orientation }),
        ...dimensionClasses,
        bgClass,
        layoutClasses,
        className
      )}
      style={style}
      role="separator"
      {...props}
    />
  );
};

export default Line;