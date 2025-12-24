import Feature from "../components/Feature.jsx";
import { Hero } from "../components/Hero.jsx";

import HowItWorks from "../components/HowItWorks.jsx";
import Pricing from "../components/Pricing.jsx";
import Review from "../components/Review.jsx";
import BottomNav from "../components/shared/bottomNav.jsx";
const Home = () => {
  return (
    <div>
      <Hero />

      {localStorage.getItem("token") ? null : (
        <>
          <Feature />
          <HowItWorks />
          <Review />
          <Pricing />
        </>
      )}
      {localStorage.getItem("token") ? <BottomNav /> : null}
    </div>
  );
};

export default Home;
