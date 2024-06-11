import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1> Loading...</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
