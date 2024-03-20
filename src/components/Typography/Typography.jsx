const Typography = ({fontSize, name, icon}) => {
  return (
    <h1 className={`text-center text-${fontSize} flex items-center justify-center pt-14 gap-3 text-gray-950 dark:text-gray-300 font-Comfortaa`}>
     
      {icon} {name}
    </h1>
  );
};

export default Typography;
