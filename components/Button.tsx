import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { };



const Button = forwardRef<HTMLButtonElement, ButtonProps>(({

    children,
    className,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (

        <button
            type={type}
            ref={ref}
            className={twMerge(`
        w-full
        rounded-full
        bg-green-500
        border-transparent
        px-3
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition
            `,
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;

