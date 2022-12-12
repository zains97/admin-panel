import "./App.css";
import { useRoutes } from "react-router-dom";
import { LoginPage, PanelPage, ProtectedRoute, Suspended } from "./components";

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
    {
      path: "/suspended",
      element: (
        <ProtectedRoute>
          <Suspended />
        </ProtectedRoute>
      ),
    },
  ]);
  return routes;
}

export default App;
