import { Search } from "lucide-react"; 
import { Input } from "./input.jsx";

export const SearchBar = ({value,onChange}) => {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative flex items-center ">
        <Input
          placeholder="Enter Number"
          icon={<Search size={20} className="text-white" />}
          bgTransparent
          value={value}
          onChange={onChange}
          customPY={'py-4'}
        />
      </div>
    </div>
  );
};
