import React from "react";
import { Heading } from "../components/ui/heading";
import { reviewData } from "../constants/data";
import Section from "../global/wrapper";
import { ReviewCard } from "./ui/card";
const Review = () => {
  return (
    <Section className="mt-12 p-4 bg-gray-50 text-black dark:bg-bgColor dark:text-gray-400/80" id={'reviews'}>
      <Heading
        textSmall
        borderSide
        description="What user say's about NumberTab"
        paragraph=""
         widthMedium
      />
      <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-1">
        {reviewData.map((item, index) => (
          <ReviewCard
            key={index}
            ImageURl={item.image}
            label={item.name}
            description={item.review}
            percentage={item.rating}
            status={item.point}
          />
        ))}
      </div>
    </Section>
  );
};

export default Review;
