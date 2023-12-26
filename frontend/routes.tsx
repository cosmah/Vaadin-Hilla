import MainView from "Frontend/views/MainView.js";
import { serverSideRoutes } from "Frontend/generated/flow/Flow";
import { createBrowserRouter, RouteObject } from "react-router-dom";

export const routes: readonly RouteObject[] = [
  { path: "/", element: <MainView /> },
];

export const router = createBrowserRouter([...routes,
  ...serverSideRoutes], {
  basename: new URL(document.baseURI).pathname,
});
