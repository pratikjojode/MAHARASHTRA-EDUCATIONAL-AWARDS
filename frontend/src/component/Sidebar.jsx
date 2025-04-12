import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h3>🏆 Admin Panel</h3>
        <FaTimes className="close-icon" onClick={closeSidebar} />
      </div>
      <nav>
        <NavLink to="/admin/dashboard" onClick={closeSidebar}>
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink to="/admin/users" onClick={closeSidebar}>
          <FaUsers /> Users
        </NavLink>
        <NavLink to="/admin/posts" onClick={closeSidebar}>
          <FaFileAlt /> Content
        </NavLink>
        <NavLink to="/admin/settings" onClick={closeSidebar}>
          <FaCog /> Settings
        </NavLink>
        <NavLink to="/" onClick={closeSidebar}>
          <FaCog /> Home
        </NavLink>
        {/* Logout as a button */}
        <button className="logout-btn" onClick={logout}>
          <FaSignOutAlt /> Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
