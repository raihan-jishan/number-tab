import React from "react";
import { LuHeartHandshake } from "react-icons/lu";
import { TbMailMinus } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AddContact from "../../assets/undraw_inspiration_z6x7.svg";
import Access from "../../assets/undraw_starlink_pmv3.svg";
import LoginAccount from "../../assets/undraw_upload-image_tpmp.svg";
import { Card, CardContent } from "./card";
const carouselData = [
  {
    image: LoginAccount,
    title: "Simple Signup ",
    description:
      "Create your account quickly with an easy and hassle-free registration process.",
    icon: <TbMailMinus size={30} />,
  },
  {
    image: AddContact,
    title: "#Set your favourite contact",
    description:
      "Saving contacts goes beyond just storing phone numbers. It’s about streamlining communication  ",
    icon: <LuHeartHandshake size={30} />,
  },
  {
    image: Access,
    title: "Access anytime, anywhere...",
    description:
      "Never lose important contacts with our encrypted cloud storage.",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-[90%]  max-w-5xl mx-auto py-10">
      <Slider {...settings} className=" ">
        {carouselData.map((slide, index) => (
          <Card
            key={index}
            className="p-4 bg-gray-50 dark:bg-bgColor rounded-lg "
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[20rem] object-contain rounded-md"
            />
            <CardContent className="text-center mt-4  ">
              <h3 className="text-[1.6rem] font-bold font-Raleway  text-black dark:text-green-400 ">
                <span className="flex items-center justify-center  gap-2">
                  {slide.title}{" "}
                  <span className="text-black dark:text-green-200">
                    {slide.icon}
                  </span>
                </span>
              </h3>
              <p className="text-black dark:text-green-200 mt-2">
                {slide.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
