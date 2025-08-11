import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../../../pages/Login";
import Dashboard from "../../../pages/Dashboard";
import AuthProvider from "./AuthProvider";
import { ROUTES } from "../../../core/const";
import NotFound from "../../../pages/NotFound";

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
        <Route
          path={ROUTES.LOGIN}
          element={
            <AuthProvider requireAuth={false}>
              <Login />
            </AuthProvider>
          }
        />

        <Route
          path={ROUTES.DASHBOARD}
          element={
            <AuthProvider>
              <Dashboard />
            </AuthProvider>
          }
        />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
