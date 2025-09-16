import { FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router/routes";
import type { RoutesI } from "../../router/type";
import Logo from "../../assets/logo/Logo";

const SideBar = () => {
  const { pathname } = useLocation();
  const MainPath = pathname.split("/")[1] || "";
  return (
    <div className="fixed left-0 top-0  h-full">
      <div className="py-2">
        <div className="px-4 pb-6 hidden sm:block">
          <Logo />
        </div>
      </div>
      <div className="px-4">
        <button className="size-10 sm:size-14 mb-36 rounded-lg sm:rounded-2xl text-lg sm:text-2xl cursor-pointer flex justify-center items-center bg-[#FECACA] hover:bg-hover-pink">
          <FiPlus color="#1C1C1E" />
        </button>
        <div className="flex flex-col gap-2">
          {routes?.map((el: RoutesI) => {
            const Icon = el?.Icon;
            return (
              <Link
                to={el?.path}
                className={`text-icon-bg size-[2.50rem] sm:size-[3.25rem] rounded-full flex justify-center items-center hover:bg-hover-pink ${
                  MainPath === el?.path ? "bg-hover-pink" : ""
                }`}>
                {Icon && <Icon className="text-[16px] sm:text-[20px]" />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
