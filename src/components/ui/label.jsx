export const Label = ({ For, children }) => {
  return (
    <label
      htmlFor={For}
      className="block text-[0.9rem]   font-medium text-gray-200 capitalize"
    >
      {children}
    </label>
  );
};
