import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/authProvider";
import ProtectedRoute from "./components/protectedRoute";
import { Login } from "./features/auth/pages/login";
import { Register } from "./features/auth/pages/register";
import { BasePage } from "./components/ui/base-page";
import { ErrorPage } from "./components/ui/error-page";
import Logout from "./features/auth/pages/logout";

import { EditProfilePage } from "./features/profile/pages/edit-profile-page";
import { Welcome } from "./features/home/welcome";

const router = createBrowserRouter([
  {
    element: <BasePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },

      {
        path: "/",
        element: (
          <ProtectedRoute allowedRoles={["viewer"]}>
            <Welcome />,
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute allowedRoles={["viewer"]}>
        <EditProfilePage />,
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
