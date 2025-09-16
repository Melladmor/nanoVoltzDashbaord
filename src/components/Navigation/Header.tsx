import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-row w-full items-center justify-between  py-5 border-b border-pink-bg">
      {/* <div className="bg-red-500 w-[60%]">s</div>
      <div className="bg-green-400 w-[40%]">s</div> */}
      <div className="flex items-center gap-8">
        <NavLink to="#" className="text-pink-500  font-medium">
          Dashboard
        </NavLink>
        <NavLink to="#" className="text-gray-600 hover:text-gray-900">
          Pools
        </NavLink>
        <NavLink to="#" className="text-gray-600 hover:text-gray-900 relative">
          Tokens
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </NavLink>
        <NavLink to="#" className="text-gray-600 hover:text-gray-900">
          Market
        </NavLink>
        <NavLink to="#" className="text-gray-600 hover:text-gray-900">
          NFT
        </NavLink>
      </div>

      {/* <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search pools or tokens"
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 w-64"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"></div>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"></path>
        </svg>
      </div> */}
    </nav>
    // <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-pink-200">
    //   <div className="flex items-center space-x-8">
    //     <div className="flex space-x-6">
    //       <a
    //         href="#"
    //         className="text-pink-500 border-b-2 border-pink-500 pb-1 font-medium">
    //         Dashboard
    //       </a>
    //       <a href="#" className="text-gray-600 hover:text-gray-900">
    //         Pools
    //       </a>
    //       <a href="#" className="text-gray-600 hover:text-gray-900 relative">
    //         Tokens
    //         <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
    //           3
    //         </span>
    //       </a>
    //       <a href="#" className="text-gray-600 hover:text-gray-900">
    //         Market
    //       </a>
    //       <a href="#" className="text-gray-600 hover:text-gray-900">
    //         NFT
    //       </a>
    //     </div>
    //   </div>

    // // </nav>
  );
};

export default Header;
