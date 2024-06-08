import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ProfileBigCard } from "../ProfileBigCard/ProfileBigCard";

const Layout = () => {
  return (
    <>
      <ProfileBigCard />
      {/* <Suspense>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default Layout;
