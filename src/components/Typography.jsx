const Typography = ({fontSize, name, icon,marginTopMedium, marginTopLarge}) => {
  return (
    <h1 className={`${fontSize} tracking-wide  capitalize text-center leading-[2.8rem]   ${marginTopMedium  ? 'mt-24' :  marginTopLarge ? 'mt-44' : 'mt-0'}`}>
   
      {icon} {name}
    </h1>
  );
};

export default Typography;
