import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink to="/logout" className="logout-link" onClick={closeSidebar}>
          <FaSignOutAlt /> Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
