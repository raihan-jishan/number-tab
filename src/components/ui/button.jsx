import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Base button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Base Button
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Extra styles for BtnPrimary
const primaryStyles = {
  nav: "p-7 px-4 font-semibold bg-green-500 hover:bg-green-500/90 rounded-full border-2 border-black text-black max-lg:px-20",
  "account-btn":
    "p-7 px-6 bg-green-400/95 hover:bg-green-400/90 rounded-lg border-2 border-black text-black font-bold font-Comfortaa max-lg:px-24 text-[1rem]",
  "hero-btn":
    "h-10 rounded-full px-12 text-[1rem] font-semibold p-8 max-lg:p-8 max-lg:px-16    dark:bg-gray-300 dark:text-black hover:dark:bg-gray-300/90",
  "feature-btn":
    "bg-green-400 text-[1.2rem] p-6 rounded-full text-black hover:bg-green-400/90 border-2 border-green-400",

  logout: "bg-red-400 p-7 px-12 text-2xl font-semibold",
  "onother-number":
    "h-10 bg-green-500/90 hover:bg-green-500 text-black rounded-xl font-Comfortaa px-12 text-[1rem] font-extrabold p-8 max-lg:p-8",
  default: "p-8 px-12",
};

// Primary button (Link + Button)
const BtnPrimary = ({
  label,
  icon,
  iconLeft,
  variant = "default",
  onClick,
  path,
  className, // ✅ allow extra classes to be passed
}) => {
  return (
    <Link to={path}>
      <Button
        className={cn(
          primaryStyles[variant] || primaryStyles.default,
          "flex items-center justify-center gap-2 transition-all font-semibold",
          className // ✅ so we can extend styles if needed
        )}
        onClick={onClick}
      >
        {iconLeft && <div>{iconLeft}</div>}
        {label}
        {icon && (
          <span
            className={cn(
              variant === "nav" && "text-gray-900",
              variant === "vidio" && "text-black"
            )}
          >
            {icon}
          </span>
        )}
      </Button>
    </Link>
  );
};

// Auth button (used for login/signup)
const AuthBtn = ({ label, icon, iconLeft, variant, onClick }) => {
  return (
    <Button
      className={cn(
        "p-7 bg-gray-900 dark:bg-green-500 dark:text-black hover:bg-gray-800 transition-all ease-linear delay-50 dark:hover:bg-green-500/80 rounded-xl border-2 border-black/20 text-white font-bold font-Raleway  text-[1rem]   max-lg:rounded-full ",
        variant === "btn-login"
          ? "px-40 max-lg:px-[8rem]"
          : variant === "addnumber"
          ? "px-28"
          : "px-36 max-lg:px-[5rem]"
      )}
      onClick={onClick}
    >
      {iconLeft && <div>{iconLeft}</div>}
      {label}
      {icon && (
        <span
          className={cn(
            variant === "nav" && "text-gray-900",
            variant === "vidio" && "text-black"
          )}
        >
          {icon}
        </span>
      )}
    </Button>
  );
};

export { AuthBtn, BtnPrimary, Button, buttonVariants };
