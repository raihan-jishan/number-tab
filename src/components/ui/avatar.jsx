import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown, FaUserLarge, FaWpforms } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { RiSaveLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const UserProfile = ({ name, email }) => {
  const [onClick, setOnClick] = useState(false);

  const handleClick = () => setOnClick(!onClick);
  const handleClose = () => setOnClick(false);

  return (
    <div className="relative flex items-center gap-2">
      {/* Avatar */}
      <Avatar className="w-12 h-12 cursor-pointer" onClick={handleClick}>
        {!onClick && (
          <AvatarImage src="https://loudouncslcenter.com/wp-content/uploads/default-avatar-icon-of-social-media-user-vector.jpg" />
        )}
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Toggle Icon */}
      <div className="cursor-pointer">
        {onClick ? (
          <AiOutlineClose size={25} onClick={handleClose} />
        ) : (
          <FaChevronDown onClick={handleClick} />
        )}
      </div>

      {/* Dropdown Menu */}
      {onClick && (
        <div className="absolute top-14 right-0 z-50 w-64 bg-white dark:bg-gray-50 shadow-xl border dark:border-gray-700 rounded-xl p-5 animate-fade-in">
          <p className="text-lg font-semibold flex items-center gap-2 mb-2 text-black  dark:text-gray-700">
            <FaUserLarge size={20} /> {name}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-700 flex items-center gap-2 mb-4 underline">
            <IoIosMailUnread size={18} /> {email}
          </p>

          <div className="flex flex-col gap-3 mt-6  ">
            <Link
              to="/dashboard"
              onClick={handleClose}
              className="text-[0.9rem] flex gap-2 items-center hover:underline font-semibold text-black  "
            >
              <FaWpforms size={18} /> Dashboard
            </Link>
            <Link
              to="/addnumbers"
              onClick={handleClose}
              className="text-[0.9rem] flex gap-2 items-center hover:underline font-semibold dark:text-black  "
            >
              <MdOutlineContactPage size={18} /> Add an Contact
            </Link>
            <Link
              to="/saved-numbers"
              onClick={handleClose}
              className="text-[0.9rem] flex gap-2 items-center hover:underline font-semibold dark:text-black  "
            >
              <RiSaveLine size={18} /> Saved Contacts
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const DashAvatar = ({ imageUrl }) => {
  return (
    <div className="relative flex items-center gap-2">
      {/* Avatar */}
      <Avatar className="w-12 h-12 cursor-pointer">
        <AvatarImage
          src={
            imageUrl
              ? imageUrl
              : "https://loudouncslcenter.com/wp-content/uploads/default-avatar-icon-of-social-media-user-vector.jpg"
          }
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export { Avatar, AvatarFallback, AvatarImage, DashAvatar, UserProfile };

