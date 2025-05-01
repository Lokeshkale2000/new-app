import "./App.css";
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Mainpage2 from "./components/Mainpage2";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocercy = lazy(() => import("./components/Grocercy"));
// Layout that includes Navbar and outlet for nested routes
export function Layout() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// Define routes using Layout as the main wrapper
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Use Layout here
    children: [
      {
        path: "/",
        element: <Mainpage2 />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restraurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense>
        <Grocercy></Grocercy>
      </Suspense>
    ),
  },
]);

// App returns the RouterProvider
export default function App() {
  return <RouterProvider router={appRouter} />;
}
