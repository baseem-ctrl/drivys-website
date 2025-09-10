import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-90 focus:ring-orange-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
        outline: 'border-2 bg-transparent hover:bg-opacity-10 focus:ring-orange-500',
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

const Button = ({
  // Required parameters with defaults
  text = "",
  text_font_size = "text-6xl",
  text_font_family = "Century Gothic",
  text_font_weight = "font-bold",
  text_line_height = "leading-xl",
  text_text_align = "left",
  text_color = "text-text-white",
  border_border_radius = "rounded-lg",
  border_border = "1px solid #ffffff",
  
  // Optional parameters (no defaults)
  fill_background,
  border_border_image,
  effect_box_shadow,
  layout_align_self,
  fill_background_color,
  layout_width,
  padding,
  position,
  margin,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidBackground = fill_background && typeof fill_background === 'string' && fill_background?.trim() !== '';
  const hasValidBackgroundColor = fill_background_color && typeof fill_background_color === 'string' && fill_background_color?.trim() !== '';
  const hasValidBoxShadow = effect_box_shadow && typeof effect_box_shadow === 'string' && effect_box_shadow?.trim() !== '';
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self?.trim() !== '';
  const hasValidBorderImage = border_border_image && typeof border_border_image === 'string' && border_border_image?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
    hasValidBackground ? `bg-[${fill_background}]` : '',
    hasValidBackgroundColor ? `bg-[${fill_background_color}]` : '',
    hasValidBoxShadow ? `shadow-[${effect_box_shadow}]` : '',
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const buttonStyles = {
    fontSize: text_font_size === "text-6xl" ? "28px" : text_font_size,
    fontFamily: text_font_family || 'Century Gothic',
    fontWeight: text_font_weight === "font-bold" ? "700" : text_font_weight,
    lineHeight: text_line_height === "leading-xl" ? "35px" : text_line_height,
    textAlign: text_text_align || 'left',
    color: text_color === "text-text-white" ? "#ffffff" : text_color,
    border: border_border || '1px solid #ffffff',
    borderRadius: border_border_radius === "rounded-lg" ? "16px" : border_border_radius,
    ...(hasValidBorderImage && { borderImage: border_border_image }),
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;