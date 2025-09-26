import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonClasses = cva(
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                primary: 'hover:opacity-90 focus:ring-orange-500',
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
                outline: 'bg-transparent hover:bg-opacity-10 focus:ring-orange-500',
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
    text = "",
    text_font_size = "text-md",
    text_font_family = "poppins",
    text_font_weight = "",
    text_line_height = "leading-xl",
    text_text_align = "left",
    text_color = "text-text-white",

    fill_background,
    layout_align_self,
    layout_width,
    padding,
    position,
    margin,

    variant,
    size,
    disabled = false,
    className,
    children,
    onClick,
    type = "button",
    ...props
}) => {

    const optionalClasses = [
        layout_width ? `w-[${layout_width}]` : '',
        padding ? `p-[${padding}]` : '',
        margin ? `m-[${margin}]` : '',
        position ? position : '',
        fill_background ? `bg-[${fill_background}]` : '',
        layout_align_self ? `self-${layout_align_self}` : '',
    ].filter(Boolean).join(' ');

    const buttonStyles = {
        fontSize: text_font_size ===  text_font_size,
        fontFamily: text_font_family || 'poppins',
        fontWeight: text_font_weight === text_font_weight,
        lineHeight: text_line_height === "leading-xl" ? "35px" : text_line_height,
        textAlign: text_text_align || 'left',
        color: text_color === "text-text-white" ? "#ffffff" : text_color,
        borderRadius: '6px',
        padding: '4px 8px',
        position: 'relative',
        zIndex: 0,
        border: '1px solid transparent',
        backgroundImage: `linear-gradient(${fill_background || '#000'}, ${fill_background || '#000'}), linear-gradient(90deg, #CB217D80 0%, #E388B945 26.9%, #FFFFFF 500%)`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
    };

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
