import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>Side Bar</div>
      <div>Nav Bar</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
