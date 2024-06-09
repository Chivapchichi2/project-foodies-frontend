import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { UserInfo } from "../UserInfo/UserInfo";

const Layout = () => {
  return (
    <>
      <UserInfo />
      {/* <Suspense>
        <Header />
        <Outlet />
        <Footer />
      </Suspense> */}
    </>
  );
};

export default Layout;
