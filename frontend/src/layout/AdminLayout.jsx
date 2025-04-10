import React, { useState } from "react";
import "../styles/AdminLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-layout">
      {/* Header with Hamburger and Logout */}
      <header className="admin-header">
        <div className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div className="admin-header-right"></div>
      </header>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className={`admin-main ${isSidebarOpen ? "blurred" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
