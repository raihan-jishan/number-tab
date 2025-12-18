 
import { Label } from "./label";

export const Input = ({
  label,
  For,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  icon,
  bgTransparent,
  defaultValue
}) => {
  return (
    <div className="w-full px-3 mb-5 ">
      <Label htmlFor={For}>{label}</Label>
      <div className="relative mt-1 ">
        {/* Icon container */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-center pointer-events-none flex items-center justify-center text-gray-400">
          {icon}
        </div>

        {/* Input field */}
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`w-full pl-10 pr-3 py-2 rounded-lg ${
            bgTransparent ? "bg-transparent" : "bg-Primary"
          } border border-gray-300/20 text-white outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500   transition-all duration-200 ease-in-out    `}
          onChange={onChange}
          aria-label={label}
          aria-required="true"
        />
      </div>
    </div>
  );
};
