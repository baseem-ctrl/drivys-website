import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'focus:ring-blue-500',
        secondary: 'focus:ring-gray-500',
        outline: 'focus:ring-blue-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "Home / Trainer",
  text_font_size = "text-xl",
  text_font_family = "Poppins",
  text_font_weight = "font-normal",
  text_line_height = "leading-loose",
  text_text_align = "left",
  text_color = "text-edittext-text",
  fill_background = "linear-gradient(180deg",
  border_border = "1 solid",
  border_border_image = "linear-gradient(180deg",
  border_border_radius = "rounded-md",
  effect_box_shadow = "0px 4px 13px #888888ff",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  type = "text",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const inputStyles = {
    fontSize: text_font_size === "text-xl" ? "24px" : text_font_size,
    fontFamily: text_font_family || 'Poppins',
    fontWeight: text_font_weight === "font-normal" ? "400" : text_font_weight,
    lineHeight: text_line_height === "leading-loose" ? "36px" : text_line_height,
    textAlign: text_text_align || 'left',
    color: text_color === "text-edittext-text" ? "#ffffff" : text_color,
    background: fill_background === "linear-gradient(180deg" ? "linear-gradient(180deg, #ffffff19 0%, #ffffff19 100%)" : fill_background,
    border: border_border === "1 solid" ? "1px solid #cb217d7f" : border_border,
    borderImage: border_border_image === "linear-gradient(180deg" ? "linear-gradient(180deg, #cb217d7f 0%, #e387b944 50%, #ffffff00 100%)" : border_border_image,
    borderRadius: border_border_radius === "rounded-md" ? "10px" : border_border_radius,
    boxShadow: effect_box_shadow === "0px 4px 13px #888888ff" ? "0px 4px 13px #888888ff" : effect_box_shadow,
  };

  // Safe change handler
  const handleChange = (event) => {
    if (disabled) return;
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;