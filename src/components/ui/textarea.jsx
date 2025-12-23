const TextArea = ({
  icon,
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  bgTransparent,
  defaultValue,
  customPY,
  rows,
}) => {
  return (
    <div className="w-full px-3 mb-5">
      <div className="relative mt-1">
        {/* Icon container */}
        <div className="absolute left-3 top-5 transform -translate-y-1/2 z-10 text-center pointer-events-none flex items-center justify-center text-gray-400">
          {icon}
        </div>

        <textarea
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          rows={rows} // You can set the number of rows (height) of the textarea
          className={`w-full pl-10 pr-3 ${
            customPY ? customPY : "py-2"
          } rounded-lg ${
            bgTransparent ? "bg-transparent" : "bg-Primary"
          } border border-gray-300/20 text-white outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500
        transition-colors duration-300 ease-out`} // Transition only color and border
          onChange={onChange}
          aria-label={label}
          aria-required="true"
        />
      </div>
    </div>
  );
};

export default TextArea;
