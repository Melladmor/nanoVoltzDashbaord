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
      <div className="w-full h-[100vh]">
        <Header />
        <div className="py-2">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
