import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Login from "./Login.jsx";
import Homepage from "./Homepage.jsx";
import Signup from "./Signup.jsx";
import HomeCalendar from "./HPCalendar.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginProvider from "./AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/calendar",
    element: <HomeCalendar />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </StrictMode>
);
