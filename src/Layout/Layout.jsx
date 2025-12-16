const Layout = ({ children, className }) => {
  return (
    <section
      className={` text-gray-400 font-semibold   m-5  bg-Primary   text-3xl max-lg:pt-0  ${className}`}
    >
      {children}
    </section>
  );
};

export default Layout;
