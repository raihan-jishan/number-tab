import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef(
  ({ className, variant, type, value, onChange, ...props }, ref) => {
    return (
      <input
        type={type}
        value={value} // Ensure value is passed down for controlled input
        onChange={onChange} // Ensure onChange handler is passed down
        className={cn(
          `flex h-12 w-[25rem]  max-lg:w-[20rem] rounded-lg text-black dark:text-white border border-input 
        ${
          variant === "addnumber"
            ? "bg-gray-200 dark:text-white dark:placeholder:text-gray-400 dark:bg-gray-800 text-gray-800 placeholder:text-gray-900"
            : "dark:bg-gray-800 bg-gray-100 dark:text-gray-50"
        } 
        px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
          className
        )}
        ref={ref}
        {...props} // This will forward any other props
      />
    );
  }
);

Input.displayName = "Input";

export { Input };

