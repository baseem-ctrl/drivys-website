import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const ratingBarClasses = cva(
  'flex items-center gap-1',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
      color: {
        yellow: 'text-yellow-400',
        orange: 'text-orange-400',
        red: 'text-red-400',
        blue: 'text-blue-400',
      },
    },
    defaultVariants: {
      size: 'medium',
      color: 'yellow',
    },
  }
);

const starClasses = cva(
  'cursor-pointer transition-colors duration-200 hover:scale-110',
  {
    variants: {
      filled: {
        true: 'text-current',
        false: 'text-gray-300',
      },
      interactive: {
        true: 'hover:text-current',
        false: 'cursor-default',
      },
    },
    defaultVariants: {
      filled: false,
      interactive: true,
    },
  }
);

const RatingBar = ({
  // Core rating properties
  rating = 0,
  maxRating = 5,
  onRatingChange,
  
  // Display properties
  size = 'medium',
  color = 'yellow',
  showValue = false,
  readonly = false,
  
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Styling
  className,
  starClassName,
  ...props
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(rating);
  
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  
  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');
  
  const handleStarClick = (starIndex) => {
    if (readonly) return;
    
    const newRating = starIndex + 1;
    setCurrentRating(newRating);
    
    if (typeof onRatingChange === 'function') {
      onRatingChange(newRating);
    }
  };
  
  const handleStarHover = (starIndex) => {
    if (readonly) return;
    setHoverRating(starIndex + 1);
  };
  
  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };
  
  const displayRating = hoverRating || currentRating;
  
  const renderStar = (index) => {
    const isFilled = index < displayRating;
    const isHalfFilled = displayRating > index && displayRating < index + 1;
    
    return (
      <span
        key={index}
        className={twMerge(
          starClasses({ 
            filled: isFilled, 
            interactive: !readonly 
          }),
          starClassName
        )}
        onClick={() => handleStarClick(index)}
        onMouseEnter={() => handleStarHover(index)}
        role={readonly ? "img" : "button"}
        aria-label={`${index + 1} star${index + 1 !== 1 ? 's' : ''}`}
        tabIndex={readonly ? -1 : 0}
        onKeyDown={(e) => {
          if (e?.key === 'Enter' || e?.key === ' ') {
            e?.preventDefault();
            handleStarClick(index);
          }
        }}
      >
        {isHalfFilled ? (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`half-${index}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#d1d5db" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${index})`}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )}
      </span>
    );
  };
  
  return (
    <div
      className={twMerge(
        ratingBarClasses({ size, color }),
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
      {...props}
    >
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {currentRating?.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingBar;