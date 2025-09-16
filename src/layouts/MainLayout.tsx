import { Outlet } from "react-router-dom";
import SideBar from "../components/Navigation/SideBar";
import Header from "../components/Navigation/Header";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div className="flex flex-row gap-4 bg-bg">
      <div>
        <SideBar />
      </div>
      <div className="w-full ">
        <Header />
        <div className="pt-2 pb-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
