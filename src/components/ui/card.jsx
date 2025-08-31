import { cn } from "@/lib/utils";
import * as React from "react";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegHeart,
  FaTwitter,
} from "react-icons/fa6";
import { CardSvgIcon } from "../../constants/svg-icon";

import { BiCategoryAlt, BiDotsHorizontalRounded } from "react-icons/bi";
import { FaFeather } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
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

// herologo card
export const HeroLogoCard = ({ logo }) => {
  return (
    <div>
      <img
        alt="App icon"
        className="mx-auto mb-6 sm:mb-8 md:mb-12 w-[15%] sm:w-[10%] md:w-[8%] lg:w-[6%] max-lg:w-[15%]"
        height="80"
        src={logo}
        width="80"
      />
    </div>
  );
};
// service card
export const ServiceCard = ({
  Icon,
  label,
  status,
  percentage,
  description,
  showAll,
}) => {
  return (
    <div
      className={`flex-shrink-0 m-3  relative overflow-hidden bg-white cursor-pointer   rounded-2xl max-w-2xl shadow-[0_0_1px_gray]  transition-all  max-lg:max-w-3xl  `}
    >
      <CardSvgIcon />
      <div className="relative pt-10 px-5 flex items-center justify-center">
        <div
          className=" absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 hidden dark:block"
          style={{
            background: "radial-gradient(black, transparent 50%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        {Icon}
      </div>
      <div className="relative font-semibold text-gray-950 px-6 pb-6 mt-6">
        <span
          className={`block opacity-75   border-b-4  w-[15%] -mb-1 text-2xl font-semibold font-OpenSans tracking-wide `}
        >
          {status}
        </span>
        <div className="flex justify-between">
          <span
            className={` block   text-[1.5rem] mt-2  font-Raleway font-extrabold`}
          >
            {label}
          </span>
        </div>
        <div className={`mt-1 text-[0.9rem] `}>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};
// review card

export const ReviewCard = ({
  ImageURl,
  label,
  status,
  percentage,
  description,
  showAll,
}) => {
  return (
    <div
      className={`flex-shrink-0 m-6 relative overflow-hidden bg-gray-3 00 mt-14  ${
        showAll ? "hover:bg-gray-800/90" : "hover:bg-gray-300/5"
      } rounded-lg max-w-2xl shadow-lg bg-white dark:bg-gray-950 transition-all  max-lg:max-w-3xl ${
        showAll ? "bg-gray-900" : ""
      }`}
    >
      <CardSvgIcon />
      <div className="relative pt-10 px-10 flex items-start justify-start">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: 0.2,
          }}
        ></div>
        <div className="flex items-center justify-between">
          <img
            src={ImageURl}
            className="w-[40%] rounded-lg"
            alt="404 profile picture not found!"
          />
          {/* social icons */}

          <div className="flex gap-5 text-gray-700 dark:text-gray-300">
            <FaFacebook size={30} />
            <FaTwitter size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
      <div className="relative font-semibold text-gray-950 px-6 pb-6 mt-6">
        <span
          className={`block opacity-75   border-b-2   w-[15%] -mb-1 text-2xl font-semibold font-Raleway tracking-wide  text-gray-900 dark:text-gray-100 border-gray-800 dark:border-gray-100`}
        >
          {status}
        </span>
        <div className="flex justify-between">
          <span
            className={` block font-bold font-Raleway text-xl mt-2  text-gray-900 tracking-wide dark:tracking-normal dark:text-green-400`}
          >
            {label}
          </span>
          <span className="text-gray-950 max-lg:rounded-full  text-lg font-bold border-2 border-black p-2 px-3 leading-none flex gap-1 rounded-full items-center -mt-2 bg-green-400/90  ">
            <FaRegHeart size={20} /> {percentage}{" "}
          </span>
        </div>
        <div className={`mt-3 text-[1rem] text-gray-800 dark:text-gray-400`}>
          <h4>{description}</h4>
        </div>
      </div>
    </div>
  );
};

// pricing-table card
export const PricingCard = ({ card }) => {
  return (
    <Card
      key={card.title}
      className={cn(
        "relative flex flex-col w-full border-neutral-700 p-6 dark:bg-gray-900 shadow-[0_0_10px_gray]  dark:shadow-[0_0_10px_green] flex-shrink-0 m-6  max-lg:m-0 overflow-hidden bg-gray-900 00",
        card.title === "Unlimited Saas" && "border-2 border-primary"
      )}
    >
      {/* Background SVG */}

      <CardSvgIcon />

      {/* Content */}
      <CardHeader className="border-border relative">
        <span className="text-xl font-bold text-gray-500 dark:text-gray-300/60">
          {card.title}
        </span>
        <CardTitle
          className={cn(
            card.title !== "Unlimited Saas" && "text-muted-foreground"
          )}
        >
          <span className="text-3xl font-semibold tracking-tight text-gray-100 dark:text-green-400/95  font-Poppins">
            {card.price}
          </span>
        </CardTitle>
        <div className="mt-2 text-xl  ">
          <CardDescription className="text-gray-400 tracking-wide font-Comfortaa dark:text-gray-200 font-semibold mt-4 dark:mt-2">
            {card.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-10 space-y-2 relative max-lg:space-y-8">
        {card.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="w-4 h-4 fill-primary text-primary">
              <IoMdCheckmarkCircleOutline
                size={20}
                className="text-gray-500 dark:text-green-400"
              />
            </span>
            <p className="text-gray-100  dark:text-gray-300">{feature}</p>
          </div>
        ))}
      </CardContent>
      <div className="mt-auto">
        <Link to={"/"}>
          <CardFooter className="mt-10  ">
            <Link
              to={"/"}
              className={cn(
                "w-full text-center flex items-center justify-center font-semibold bg-white text-black p-3 rounded-md text-sm hover:scale-95 transition-all  ",
                card.title === "Premium Plan" && "bg-green-400 text-black"
              )}
            >
              {card.buttonText}
            </Link>
          </CardFooter>
        </Link>
      </div>
    </Card>
  );
};

// number card

export const NumberCard = ({
  userAvatar,
  label,
  number,
  type,
  location,
  isFavourite,
  onToggleFavourite, // NEW: receive toggle function
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleDelete = () => {
    alert(`Deleting contact: ${label}`);
    setMenuOpen(false);
  };

  const handleFavorite = () => {
    if (onToggleFavourite) {
      onToggleFavourite(); // 🚀 call the toggleFavourite function
    }
    setMenuOpen(false);
  };

  return (
    <Card className="p-2 mt-5 bg-white dark:bg-[rgba(255,255,255,0.05)] hover:bg-gray-50 dark:border-gray-700 border hover:shadow-sm transition-all h-fit relative">
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    userAvatar ||
                    "https://cdn.vectorstock.com/i/500p/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg"
                  }
                  alt="Avatar"
                />
                <div className="ms-4 min-w-0">
                  <p className="text-lg font-semibold text-gray-900 truncate dark:text-white">
                    {label}
                  </p>
        
                </div>
              </div>

              <div className="relative">
                <BiDotsHorizontalRounded
                  size={25}
                  className="cursor-pointer text-gray-600 dark:text-white"
                  onClick={toggleMenu}
                />
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border dark:border-gray-700">
                    <button
                      onClick={() => {
                        const text = `${label} - ${number}`;
                        navigator.clipboard.writeText(text);
                        alert("Copied to clipboard ✅");
                        setMenuOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      📋 Copy to Clipboard
                    </button>

                    <button
                      onClick={handleFavorite}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400"
                    >
                      {isFavourite
                        ? "💔 Remove from Favourite"
                        : "💖 Save as Favourite"}
                    </button>

                    <button
                      onClick={() => {
                        const text = `${label} - ${number}`;
                        if (navigator.share) {
                          navigator
                            .share({ title: "Contact Info", text })
                            .then(() => console.log("Shared!"))
                            .catch((error) =>
                              console.error("Error sharing", error)
                            );
                        } else {
                          alert("Web Share API not supported on this browser.");
                        }
                        setMenuOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      🔗 Share Contact
                    </button>

                    <button
                      onClick={handleDelete}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600 dark:text-red-400"
                    >
                      🗑 Delete Contact
                    </button>
                  </div>
                )}
              </div>
            </div>
          </li>
        </ul>

        <div className="p-2">
          <h4 className="flex items-center text-[1.5rem] gap-3">
           <Phone size={25} />{number}
          </h4>
        </div>

        {type && (
          <div className="text-lg p-2 flex items-center gap-3">
            <BiCategoryAlt /> {type}
          </div>
        )}

         
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
      <CardSvgIcon />
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
