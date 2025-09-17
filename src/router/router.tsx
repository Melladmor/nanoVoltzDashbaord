import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { routes } from "./routes";
import type { RoutesElementsI, RoutesI } from "./type";
import Error from "../components/Errors";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root route that wraps all pages (MainLayout must include <Outlet />) */}
      <Route path="/" element={<MainLayout />}>
        {/* Loop through top-level routes from config */}
        {routes?.map((el: RoutesI) => {
          const Element = el?.element;

          // If the route has children, render nested routes
          if (el?.children) {
            return (
              <Route key={el?.path} path={el?.path} element={<Element />}>
                {el?.children?.map((child: RoutesElementsI) => {
                  const ChildElement = child?.element;
                  return (
                    <Route
                      key={child?.path}
                      path={child?.path}
                      element={<ChildElement />}
                    />
                  );
                })}
              </Route>
            );
          }

          // If no children, render as a leaf route
          return <Route key={el?.path} path={el?.path} element={<Element />} />;
        })}
      </Route>

      {/* Fallback for unknown routes (404 page) */}
      <Route path="*" element={<Error />} />
    </>
  )
);
