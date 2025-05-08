import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none   [&_svg]:shrink-0`,
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

// primarbtn
const BtnPrimary = ({ label, icon, iconLeft, variant, onClick, path }) => {
  return (
    <Link to={path}>
      <Button
        className={buttonVariants({
          // if varient was nav then apply nav-styles else default style included
          className: `${
            // for nav
            variant === "nav"
              ? "p-7 px-4 font-semibold  bg-green-500 hover:bg-green-500/90 rounded-full    border-2 border-black   text-black   max-lg:px-20"
              : // default for the button
              variant === "account-btn"
              ? "p-7 px-6  bg-green-400/95   hover:bg-green-400/90 rounded-lg  border-2 border-black   text-black font-bold  font-Comfortaa max-lg:px-24 text-[1rem]"
              : // for sub work btn
              variant === "hero-btn"
              ? "rounded-3xl p-[2.3rem] px-8 max-lg:px-14 font-bold max-lg:rounded-full   bg-green-500 hover:bg-green-500/90  text-black border-4 border-black text-[1rem] "
              : variant === "feature-btn"
              ? ` bg-green-300 text-[1.2rem] p-6 rounded-full text-black hover:bg-green-400/90 border-2 border-green-400  `
              : variant === "start-btn"
              ? "bg-green-400/80 text-[1.2rem] p-8 rounded-full  text-black hover:bg-white/90 max-lg:w-full max-lg:px-4 "
              : variant === "logout"
              ? "bg-red-400 p-7 px-12 text-2xl   font-semibold "
              : "p-8 px-12 "
          }   flex items-center gap-2 hover:scale-95 transition-all      font-semibold `,
        })}
        onClick={onClick}
      >
        <div className="">{iconLeft ? iconLeft : ""}</div>

        {label}

        <span
          className={`${
            variant === "nav"
              ? "text-gray-900"
              : variant === "vidio"
              ? "text-black"
              : ""
          }`}
        >
          {icon}
        </span>
      </Button>
    </Link>
  );
};

// authenticate btn
const AuthBtn = ({ label, icon, iconLeft, variant, onClick }) => {
  return (
    <Button
      className={buttonVariants({
        className: `p-7 ${
          variant === "btn-login" ? "px-[9.5rem]" : "px-[7rem] "
        } bg-green-500  hover:bg-green-500/90 rounded-full  border-2 border-black   text-black font-bold  font-Comfortaa max-lg:px-20 text-[1rem]`,
      })}
      onClick={onClick}
    >
      <div className="">{iconLeft ? iconLeft : ""}</div>

      {label}

      <span
        className={`${
          variant === "nav"
            ? "text-gray-900"
            : variant === "vidio"
            ? "text-black"
            : ""
        }`}
      >
        {icon}
      </span>
    </Button>
  );
};
export { AuthBtn, BtnPrimary, Button, buttonVariants };

