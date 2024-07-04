const LabelFeild = ({ name, icon, forPurpose }) => {
  return (
    <label
      for={forPurpose}
      className={
        "text-2xl   px-6 rounded-full pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-gray-900 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-gray-400 dark:peer-focus:text-primary  flex items-center justify-center gap-4  "
      }
    >
      {icon} {name}
    </label>
  );
};

export default LabelFeild;
