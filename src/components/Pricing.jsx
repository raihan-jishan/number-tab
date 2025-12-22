import { pricingCardData } from "@/constants/data";
import { PricingCard } from "./ui/card";
import { Heading } from "./ui/heading";

const Pricing = () => {
  return (
    <section id="pricing" className=" mt-12 p-4  bg-Primary text-gray-400/80">
     <Heading 
     label={'Pricing'}
     fontComfortaa
     textCenter
     />
      <div className="flex items-center justify-center overflow-x-hidden -mt-14 max-lg:mt-0">
        <div className="flex flex-col items-center justify-center   relative ">
          <div className="max-w-6xl grid grid-cols-3 gap-6  p-10 max-lg:grid-cols-1 max-lg:p-0">
            {pricingCardData.map((card, index) => (
              <PricingCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
