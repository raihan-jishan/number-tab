import { cn } from "@/lib/utils";
import * as React from "react";
import { useState } from "react";

import { BiCategoryAlt, BiDotsHorizontalRounded } from "react-icons/bi";
import { FaFeather } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  ArchiveRestore,
  CheckCheck,
  DollarSign,
  Phone,
  Star,
  TwitterIcon,
} from "lucide-react";
import { User } from "lucide-react";
import { Trash } from "lucide-react";
import { Pen } from "lucide-react";
import { Heart } from "lucide-react";
import { Pencil } from "lucide-react";
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl bg-card text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};

export const FeatureCard = ({ icon, label, description }) => {
  return (
    <div
      className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 transition-all   
       bg-Primary/5  "
    >
      <div className="flex items-center justify-center   text-Secondary">
        {icon}
      </div>
      <h3 className="text-[1.3rem] font-semibold font-Manrope text-gray-300 mt-2  ">
        {label}
      </h3>
      <p className="text-sm mt-2 text-start lg:text-start text-gray-400">
        {description}
      </p>
    </div>
  );
};

export const ReviewCard = ({ img, name, handle, text }) => {
  return (
    <div className=" p-4 rounded-3xl shadow-md hover:shadow-xl   duration-500 border border-gray-600 transition-all hover:bg-slate-200/5 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={img}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border border-gray-200"
          />

          <div>
            <h3 className="text-lg font-semibold m-1">{name}</h3>
            <p className="text-gray-500 text-sm flex items-center">
              <TwitterIcon /> {handle}
            </p>
          </div>
        </div>

        <div className="flex items-center -mt-10 max-lg:-mt-0 font-Comfortaa  gap-1 font-semibold text-green-200/70 ">
          <Star className="-mt-1" fill="currentColor" /> 4.5
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed">"{text}"</p>
    </div>
  );
};
export const PricingCard = ({ card }) => {
  return (
    <Card
      key={card.title}
      className={cn(
        "relative flex flex-col w-full p-6 rounded-2xl backdrop-blur-md",
        "bg-gradient-to-br from-[#0b0f15]/30 to-[#111827]/30",
        "shadow-lg shadow-black/30 border border-white/10",
        "transition-all duration-300 hover:shadow-xl",
        "m-6 max-lg:m-0 overflow-hidden",

        card.title === "Unlimited Saas" &&
          "border-2 border-green-400 shadow-green-500/20"
      )}
    >
      {/* Header */}
      <CardHeader className="relative space-y-4 pb-4 border-b border-white/10">
        <span className="text-lg font-extrabold text-gray-400 tracking-wide font-Manrope">
          {card.title}
        </span>

        <CardTitle>
          <span className="text-5xl font-bold font-Manrope flex items-center">
            <DollarSign size={50} />
            {card.price}
          </span>
        </CardTitle>

        <CardDescription className="text-gray-400 text-sm tracking-wide  ">
          {card.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-8 space-y-4">
        {card.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <CheckCheck
              size={22}
              className="text-green-400 drop-shadow-[0_0_4px_rgba(0,255,0,0.3)]"
            />
            <p className="text-gray-200 text-[15px]">{feature}</p>
          </div>
        ))}
      </CardContent>

      <div className="mt-auto pt-0">
        <Link to={"/"}>
          <CardFooter>
            <button
              className={cn(
                "w-full p-[0.8rem] rounded-lg text-[1rem] font-bold   transition-all",
                "bg-white text-black hover:bg-gray-200m flex items-center justify-center gap-1 ",

                card.title === "Premium Plan" &&
                  "bg-green-500 hover:bg-green-500/90 text-black"
              )}
            >
              {card.title === "Premium Plan" && <ArchiveRestore />}{" "}
              {card.buttonText}
            </button>
          </CardFooter>
        </Link>
      </div>
    </Card>
  );
};

// overview card for dashboard
export const OverViewCard = ({ Icon, label, status }) => {
  return (
    <div
      className={`flex-shrink-0 m-6 relative overflow-hidden  cursor-pointer  hover:bg-gray-800/90"  rounded-lg max-w-2xl shadow-lg transition-all hover:bg-gray-600/20      max-lg:max-w-3xl   `}
    >
      <div className="relative pt-10 px-5 flex items-center justify-center">
        <div
          className="block absolute w-28 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <img src={Icon} alt="icon svg image not found!" />
      </div>
      <div className="relative font-semibold text-gray-950 px-6 pb-6 mt-6">
        <div className="flex justify-between">
          <span
            className={` block text-2xl tracking-wide mt-2  text-gray-900  text-center dark:text-white`}
          >
            {label}
          </span>
          <span
            className={
              status === "contacts" ? "text-gray-400 " : "text-gray-300  "
            }
          >
            {status === "contacts" ? (
              <FaFeather size={20} className="m-auto" />
            ) : (
              <FaFeather size={30} className="m-auto" />
            )}{" "}
            {status}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export const WorkCard = ({ point, image, label }) => {
  return (
    <div className="relative flex flex-col items-center max-w-sm p-6   rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300">
      <div
        className={
          "absolute top-4 left-3 w-8 h-8 flex items-center justify-center    text-green-100   text-4xl font-bold rounded-full "
        }
      >
        0{point}
      </div>

      <img
        src={image}
        alt="image was not found!"
        className={`${
          point === "1" ? "w-[85%] max-lg:w-full " : "w-full"
        } h-48 object-contain mb-4 rounded-lg`}
      />
      <div className="text-center">
        <h2 className="text-[1.8rem] font-Comfortaa tracking-tighter font-extrabold   text-gray-400 mb-2  ">
          {label}
        </h2>
      </div>
    </div>
  );
};

export const ContactCard = ({
  label,
  phone,
  desciption,
  handleDeleteClick,
  note,
  toggleFavourite,
  favourites,
  startEditing,
}) => {
  return (
    <div className="bg-black/20 rounded-sm shadow-md p-4 w-full">
      {/* Name */}
      <div className="flex items-start gap-2">
        <User
          size={20}
          strokeWidth={2.5}
          className="text-green-100 mt-1 shrink-0"
        />

        <h2
          className="
        font-semibold text-lg text-green-100
        break-words
        line-clamp-2  
      "
          title={label}
        >
          {label}
        </h2>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 text-green-50 mt-4">
        <Phone size={18} strokeWidth={2.2} className="shrink-0" />
        <p className="font-semibold font-Inter ">
          {phone}
          {/* truncate */}
        </p>
      </div>

      {/* Description */}
      <p
        className="
      text-sm text-gray-400 
      line-clamp-2
      break-words mt-2
    "
        title={desciption}
      >
        {desciption}
      </p>

      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => startEditing(note)}
          className="text-green-100 hover:scale-[0.9]"
        >
          <Pen strokeWidth={2} />
        </button>

        <button
          onClick={() => toggleFavourite(note._id)}
          className={`${
            favourites.includes(note._id) ? "text-red-600" : "text-green-50"
          } hover:scale-[0.9]`}
        >
          <Heart strokeWidth={2.5} />
        </button>
        <Trash
          className="text-red-200"
          onClick={() => handleDeleteClick(note)}
        />
      </div>
    </div>
  );
};
