import DashboardPage from "../pages/DashboardPage";
import Statistics from "../pages/Statistics";
import type { RoutesI } from "./type";

export const routes: RoutesI[] = [
  {
    id: 1,
    element: DashboardPage,
    isActive: true,
    path: "",
    title: "Dashboard",
  },
  {
    id: 2,
    element: Statistics,
    isActive: false,
    path: "statistics",
    title: "Statistics",
  },
];
