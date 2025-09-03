const Layout = ({ children , className}) => {
  return (
    <section className={`mt-[6rem] text-gray-950 font-semibold dark:text-gray-50 m-5 dark:bg-bgColor   text-3xl max-lg:pt-0  ${className}`}>
      {children}
    </section>
  );
};

export default Layout;
