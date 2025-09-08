export const Label = ({ For, label, icon }) => {
  return (
    <label
      htmlFor={For}
      className="flex items-center gap-2  text-[0.9rem] font-semibold   text-gray-900 dark:text-gray-100 "
    >
    {icon}  {label}  
    </label>
  );
};
