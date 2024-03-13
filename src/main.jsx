import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import "./index.css";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Draft from "./pages/Draft";
import Sharepad from "./pages/Sharepad";
import SharepadSlug from "./pages/SharepadSlug";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/draft",
        element: <Draft />,
      },
      {
        path: "/sharepad",
        element: <Sharepad />,
      },
      {
        path: "/sharepad/:slug",
        element: <SharepadSlug />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={route} />);
