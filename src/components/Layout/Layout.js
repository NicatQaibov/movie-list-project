import MainNav from "./MainNav";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
