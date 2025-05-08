import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// export const  hidewhenDashboard = location.pathname('/dashboard');
export const hideDashboard = () => {
  const location = useLocation();
  location.pathname.startsWith("/dashboard");
};
// grid & search functionility reuseable codes

// display the current time based good morning , afternon , evening function

// get current hour
const currentHour = new Date().getHours();

// Datermine greeting based on time
export const getTimeGreeting = () => {
  // morning function
  if (currentHour >= 5 && currentHour < 12) return "Good morning";
  // afternoon function
  if (currentHour >= 12 && currentHour < 18) return "Good afternoon";
  return "Good evening";
};

// display the cureent date function
const today = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const useScrollDetection = (offset = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return scrolled;
};

export const filterNumberData = (dataList, searchTerm) => {
  return dataList.filter((data) =>
    Object.values(data).some((val) =>
      val?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};
export const formattedDate = today.toLocaleDateString("en-US", options);
