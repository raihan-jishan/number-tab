import { Link } from "react-router-dom"; 
import { Hash } from "lucide-react";
const Logo = () => {
  return (
   <Link to={'/'}>
    <span className="font-semibold capitalize font-Comfortaa flex items-center text-gray-100"><Hash size={20} strokeWidth={3} />numberTab</span>
   </Link>
  );
};

export default Logo;
