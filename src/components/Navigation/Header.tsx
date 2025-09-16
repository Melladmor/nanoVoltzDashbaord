import { IoIosSearch } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { FaCaretDown } from "react-icons/fa6";
import { routes } from "../../router/routes";
import type { RoutesElementsI, RoutesI } from "../../router/type";

const Header = () => {
  const { pathname } = useLocation();
  const MainPath = pathname.split("/")[1] || "";
  const links = routes?.find((el: RoutesI) => el?.path === MainPath);

  return (
    <nav className="flex flex-row w-full px-3 items-center justify-between sticky top-0 z-50 bg-bg shadow-[0_2px_2px_-3px_rgba(0,0,0,0.2)]  py-5">
      <div className="flex items-center gap-8">
        {links?.children?.map((el: RoutesElementsI) => {
          const isActive = pathname === el?.path;
          return (
            <div className="relative group">
              <NavLink
                to={el?.path}
                className={`${
                  isActive ? "text-links-acitve" : "text-black"
                } font-medium relative hover:text-links-acitve`}>
                {el?.title}
                <span
                  className={`absolute left-0 -bottom-[18px] h-1 rounded-tr-full rounded-tl-full bg-links-acitve transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center gap-3">
        <div>
          <div className="h-full py-3 px-6 w-[300px] bg-white rounded-full flex flex-row items-center gap-4">
            <IoIosSearch className="text-icon-bg text-2xl font-bold" />
            <input
              type="text"
              placeholder="Search pools or tokens"
              className="h-full w-full border-none outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src={avatar} className="size-[45px] rounded-full" />
          <div className="h-7 w-7 rounded-full flex items-center justify-center bg-hover-pink">
            <FaCaretDown className="text-icon-bg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
