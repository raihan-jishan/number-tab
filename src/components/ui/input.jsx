export const Input = ({ type, id, name, placeholder , value, onChange}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className="bg-white border border-gray-200  text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white    dark:bg-transparent outline-none hover:outline-green-400/90 hover:border-0  hover:rounded-sm"
      
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};
