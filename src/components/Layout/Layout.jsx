import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
        <Outlet />
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
