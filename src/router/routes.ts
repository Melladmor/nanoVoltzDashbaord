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
// Layouts
export const Dashboard = lazy(() => import("../layouts/DashboardLayout"));
export const StatisticsLayout = lazy(
  () => import("../layouts/StatisticsLayout")
);
export const ExchangeLayout = lazy(() => import("../layouts/ExchangeLayout"));
export const AppsLayout = lazy(() => import("../layouts/AppsLayout"));
export const CommuintyLayout = lazy(() => import("../layouts/CommuintyLayout"));

// Main Dashbaord pages
const DashboardPage = lazy(() => import("../pages/Dashboard/DashboardPage"));

// Statistics pages
export const DashboardStatistics = lazy(
  () => import("../pages/Statistics/DashboardStatistics")
);
export const PoolsStatistics = lazy(
  () => import("../pages/Statistics/PoolsStatistics")
);
export const TokensStatistics = lazy(
  () => import("../pages/Statistics/TokensStatistics")
);
export const MarketStatistics = lazy(
  () => import("../pages/Statistics/MarketStatistics")
);
export const NFTStatistics = lazy(
  () => import("../pages/Statistics/NFTStatistics")
);

// Exchange pages
export const ExchangeDashboard = lazy(
  () => import("../pages/Exchange/ExchangeDashboard")
);

// Apps pages
export const AppsDashboard = lazy(() => import("../pages/Apps/AppsDashboard"));

// Community pages
export const CommuintyDashboard = lazy(
  () => import("../pages/Commuinty/CommuintyDashboard")
);
const Setting = lazy(() => import("../pages/Setting/Setting"));
const More = lazy(() => import("../pages/More/More"));


// Routes data
export const routes: RoutesI[] = [
  {
    id: 1,
    element: DashboardPage,
    path: "",
    title: "Dashboard",
    Icon: MdHome,
    children: [{ id: 1, element: Dashboard, path: "/", title: "Dashbaord" }],
  },
  {
    id: 2,
    element: StatisticsLayout,
    path: "statistics",
    title: "Statistics",
    Icon: IoStatsChart,
    children: [
      {
        id: 1,
        element: DashboardStatistics,
        path: "/statistics",
        title: "Dashbaord",
      },
      {
        id: 2,
        element: PoolsStatistics,
        path: "/statistics/pools",
        title: "Pools",
      },
      {
        id: 3,
        element: TokensStatistics,
        path: "/statistics/tokens",
        title: "Tokens",
      },
      {
        id: 4,
        element: MarketStatistics,
        path: "/statistics/market",
        title: "Market",
      },
      {
        id: 5,
        element: NFTStatistics,
        path: "/statistics/nft",
        title: "NFT",
      },
    ],
  },
  {
    id: 3,
    element: ExchangeLayout,
    path: "exchange",
    title: "Exchange",
    Icon: FaArrowRightArrowLeft,
    children: [
      {
        id: 1,
        element: ExchangeDashboard,
        path: "/exchange",
        title: "Dashbaord",
      },
    ],
  },
  {
    id: 4,
    element: AppsLayout,
    path: "apps",
    title: "Apps",
    Icon: FaGamepad,
    children: [
      {
        id: 1,
        element: AppsDashboard,
        path: "/apps",
        title: "Dashbaord",
      },
    ],
  },
  {
    id: 5,
    element: CommuintyLayout,
    path: "commuinty",
    title: "Commuinty",
    Icon: FaUserGroup,
    children: [
      {
        id: 1,
        element: CommuintyDashboard,
        path: "/commuinty",
        title: "Dashbaord",
      },
    ],
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
