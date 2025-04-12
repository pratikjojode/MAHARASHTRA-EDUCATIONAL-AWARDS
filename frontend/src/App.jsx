import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/HomePage";
import "./App.css";
import "./index.css";
import AdminLayout from "./layout/AdminLayout";

import SponsorsPage from "./pages/SponsorsPage";

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/sponsors" element={<SponsorsPage />} /> 

        {isAdmin && (
          <Route path="/admin/dashboard" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        )}

        {!isAdmin && (
          <Route
            path="/admin/dashboard/*"
            element={<Navigate to="/admin-login" />}
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
