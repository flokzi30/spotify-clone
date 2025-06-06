import { twMerge } from "tailwind-merge";

interface BoxProps {
    className?: string;
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({

    children,
    className,

}) => {
    return (

        <div
        className={twMerge(`
         bg-neutral-900
            rounded-lg
            h-ft
            w-full
        `,
        className
        )}
        >
            {children}
        </div>
    );
}

export default Box;

