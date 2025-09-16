import { MdHome } from "react-icons/md";
import type { RoutesI } from "./type";
import { IoStatsChart } from "react-icons/io5";
import {
  FaArrowRightArrowLeft,
  FaGamepad,
  FaGear,
  FaUserGroup,
} from "react-icons/fa6";
import { lazy } from "react";
import { FaEllipsisH } from "react-icons/fa";
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const Statistics = lazy(() => import("../pages/Statistics"));
const Apps = lazy(() => import("../pages/Apps"));
const Exchange = lazy(() => import("../pages/Exchange"));
const Commuinty = lazy(() => import("../pages/Commuinty"));
const Setting = lazy(() => import("../pages/Setting"));
const More = lazy(() => import("../pages/More"));

export const routes: RoutesI[] = [
  {
    id: 1,
    element: DashboardPage,
    path: "",
    title: "Dashboard",
    Icon: MdHome,
  },
  {
    id: 2,
    element: Statistics,
    path: "statistics",
    title: "Statistics",
    Icon: IoStatsChart,
  },
  {
    id: 3,
    element: Exchange,
    path: "exchange",
    title: "Exchange",
    Icon: FaArrowRightArrowLeft,
  },
  {
    id: 4,
    element: Apps,
    path: "apps",
    title: "Apps",
    Icon: FaGamepad,
  },
  {
    id: 5,
    element: Commuinty,
    path: "commuinty",
    title: "Commuinty",
    Icon: FaUserGroup,
  },
  {
    id: 6,
    element: Setting,
    path: "setting",
    title: "Setting",
    Icon: FaGear,
  },
  {
    id: 7,
    element: More,
    path: "more",
    title: "More",
    Icon: FaEllipsisH,
  },
];
