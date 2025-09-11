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
                    text_font_size = "text-6xl",
                    text_font_family = "Century Gothic",
                    text_font_weight = "font-bold",
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
    ]?.filter(Boolean)?.join(' ');

    const buttonStyles = {
        fontSize: text_font_size === "text-6xl" ? "28px" : text_font_size,
        fontFamily: text_font_family || 'Century Gothic',
        fontWeight: text_font_weight === "font-bold" ? "700" : text_font_weight,
        lineHeight: text_line_height === "leading-xl" ? "35px" : text_line_height,
        textAlign: text_text_align || 'left',
        color: text_color === "text-text-white" ? "#ffffff" : text_color,
        border: '1px solid #ffffff',  // thin modern border
        borderRadius: '6px',           // slight rounding
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
