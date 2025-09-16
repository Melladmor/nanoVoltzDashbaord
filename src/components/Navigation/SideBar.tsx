import { FiPlus } from "react-icons/fi";
import Logo from "../../assets/logo/logo";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import type { RoutesI } from "../../router/type";

const SideBar = () => {
  return (
    <div>
      <div className="py-2 ">
        <div className="px-4 pb-6">
          <Logo />
        </div>
      </div>
      <div className="px-4">
        <button className="w-14 h-14 mb-36  rounded-2xl text-2xl cursor-pointer flex justify-center items-center bg-[#FECACA] hover:bg-hover-pink">
          <FiPlus color="#1C1C1E" />
        </button>
        <div className="flex flex-col gap-2">
          {routes?.map((el: RoutesI) => {
            const Icon = el?.Icon;
            return (
              <Link
                to={el?.path}
                className="text-icon-bg  w-13 h-13 rounded-full flex justify-center items-center hover:bg-hover-pink">
                {Icon && <Icon className="text-[20px]" />}
              </Link>
            );
          })}
        </div>
        {/* <div className="w-16 bg-white border-r border-pink-200 min-h-screen flex flex-col items-center py-6 space-y-6">
          <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
            <span className="text-white text-lg">+</span>
          </div>
          <div className="space-y-4">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-3 h-3"></span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center relative">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                6
              </span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SideBar;
