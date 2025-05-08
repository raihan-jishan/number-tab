import Feature from "../components/Feature.jsx";
import GetStart from "../components/GetStart.jsx";
import { Hero } from "../components/Hero.jsx";

import HowItWorks from "../components/HowItWorks.jsx";
import Pricing from "../components/Pricing.jsx";
import Review from "../components/Review.jsx";
const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <HowItWorks />
      <Review />        
      <Pricing />
      <GetStart /> 
    </div>
  );
};

export default Home;
