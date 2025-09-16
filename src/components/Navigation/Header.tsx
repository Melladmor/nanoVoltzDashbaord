import { IoIosSearch } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { FaCaretDown } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { routes } from "../../router/routes";
import type { RoutesElementsI, RoutesI } from "../../router/type";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const MainPath = pathname.split("/")[1] || "";
  const links = routes?.find((el: RoutesI) => el?.path === MainPath);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="flex flex-col w-full sticky top-0 z-30 bg-bg shadow-[0_2px_2px_-3px_rgba(0,0,0,0.2)] relative">
      {/* Main Header */}
      <div className="flex flex-row w-full px-3 lg:px-6 items-center justify-between py-5">
        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links?.children?.map((el: RoutesElementsI) => {
            const isActive = pathname === el?.path;
            return (
              <div key={el?.path} className="relative group">
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

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-black hover:text-links-acitve">
            {isMobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="flex flex-row items-center gap-3">
          {/* Search - Desktop */}
          <div className="hidden md:block">
            <div className="h-full py-3 px-6 w-[250px] lg:w-[300px] bg-white rounded-full flex flex-row items-center gap-4">
              <IoIosSearch className="text-icon-bg text-2xl font-bold" />
              <input
                type="text"
                placeholder="Search pools or tokens"
                className="h-full w-full border-none outline-none text-sm"
              />
            </div>
          </div>

          {/* Expandable Search - Mobile */}
          <div className="md:hidden relative">
            {!isSearchOpen ? (
              <button
                onClick={toggleSearch}
                className="p-2 text-icon-bg hover:text-links-acitve transition-all duration-200">
                <IoIosSearch className="text-2xl" />
              </button>
            ) : (
              <div className="fixed top-0 left-0 right-0 bg-white z-60 px-3 py-5 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-1 py-3 px-4 bg-gray-100 rounded-full flex items-center gap-3">
                    <IoIosSearch className="text-icon-bg text-xl" />
                    <input
                      type="text"
                      placeholder="Search pools or tokens"
                      className="flex-1 bg-transparent border-none outline-none text-sm"
                      autoFocus
                    />
                  </div>
                  <button
                    onClick={toggleSearch}
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-200">
                    <HiX className="text-xl" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-2 lg:gap-3">
            <img
              src={avatar}
              className="size-[35px] md:size-[45px] rounded-full"
            />
            <div className="h-6 w-6 md:h-7 md:w-7 rounded-full flex items-center justify-center bg-hover-pink">
              <FaCaretDown className="text-icon-bg text-sm md:text-base" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Removed since we use expandable now */}

      {/* Mobile Navigation Menu - Overlay */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-end p-4 border-b border-gray-200">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <HiX className="text-xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col py-4 px-4 space-y-1">
          {links?.children?.map((el: RoutesElementsI) => {
            const isActive = pathname === el?.path;
            return (
              <NavLink
                key={el?.path}
                to={el?.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive
                    ? "text-links-acitve bg-blue-50 border-r-4 border-links-acitve"
                    : "text-gray-700 hover:text-links-acitve hover:bg-gray-50"
                } font-medium py-4 px-4 rounded-lg transition-all duration-200 block`}>
                {el?.title}
              </NavLink>
            );
          })}
        </div>

        {/* User Section in Drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3">
            <img src={avatar} className="size-10 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">المستخدم</p>
              <p className="text-xs text-gray-500">user@example.com</p>
            </div>
            <FaCaretDown className="text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
