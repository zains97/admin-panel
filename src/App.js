import "./App.css";
import { useRoutes } from "react-router-dom";
import { LoginPage, PanelPage, ProtectedRoute } from "./components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/UserSlice";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/panel",
      element: (
        <ProtectedRoute>
          <PanelPage />
        </ProtectedRoute>
      ),
    },
  ]);
  return routes;
}

export default App;
