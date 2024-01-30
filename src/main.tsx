import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.tsx";
import { ChakraProvider } from "@chakra-ui/react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import SignUp from "./pages/SignUp.tsx";
import NotFound from "./pages/NotFound.tsx";
import GetUser from "./pages/User/GetUser.tsx";

const router = createBrowserRouter([
  { path: "*", element: <NotFound />},
  { path: "/auth/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/auth/register", element: <SignUp /> },
  { path: "/user/:username", element: <GetUser /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
