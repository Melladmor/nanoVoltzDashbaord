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
      {/* Parent layout route (MainLayout must render <Outlet />) */}
      <Route path="/" element={<MainLayout />}>
        {/* Map top-level routes from the routes config */}
        {routes?.map((el: RoutesI) => {
          const Element = el?.element;

          /* Render nested children if present (child paths should be relative) */
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

          /* Render a leaf route (no children) */
          return <Route key={el?.path} path={el?.path} element={<Element />} />;
        })}
      </Route>

      {/* Catch-all (404) route */}
      <Route path="*" element={<Error />} />
    </>
  )
);
