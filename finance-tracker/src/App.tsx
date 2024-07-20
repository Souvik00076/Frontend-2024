import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./constants";
import ThemeContextProvider from "./context/ThemeContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const App: FC = () => {
  //create the router here
  const router = createBrowserRouter(routes);
  //Wrap the router inside router provider to create routes
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeContextProvider>
  );
};
