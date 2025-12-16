import React from "react";
import { Heading } from "../components/ui/heading";
import { reviewData } from "../constants/data";
import Section from "../global/wrapper";
import { ReviewCard } from "./ui/card";
const Review = () => {
  return (
    <Section className="mt-12 p-4 bg-Primary text-white " id={'reviews'}>
      <Heading 
        label="Reviews" 
        textCenter
      />
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 mt-10">
        {reviewData.map((item, index) => (
          <ReviewCard
            key={index}
            img={item.image}
            name={item.name}
            text={item.review}  
            handle={item.twitter_handle}
          />
        ))}
      </div>
    </Section>
  );
};

export default Review;
