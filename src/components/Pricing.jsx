import { pricingCardData } from "@/constants/data";
import { PricingCard } from "./ui/card";
import { Heading } from "./ui/heading";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className=" mt-12 p-4 bg-gray-100 dark:bg-gray-950/30 text-black dark:text-gray-400/80"
    >
      <Heading
        title={"#pricing table"}
        textSmall
        borderSide
        description={" Princing of application"}
        paragraph={
          " ensure a smooth, transparent journey from the first consultation to the final inspection."
        }
        widthMedium
      />
      <div className="flex items-center justify-center overflow-x-hidden">
        <div className="flex flex-col items-center justify-center   relative ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full   py-2 max-lg:py-8  flex-wrap max-w-4xl">
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
