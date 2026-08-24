import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({  className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-[8px] w-full ${className}`}>
        <input
          ref={ref}
          className={`
            w-full 
            pb-[20px]
            border-b border-black
            text-[1rem] md:text-[1.125rem] 
            text-black 
            placeholder:text-black
            focus:outline-none
            focus:placeholder:text-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
          `}
          placeholder={props.placeholder || "Введите текст"}
          {...props}
        />
      </div>
    );
  }
);