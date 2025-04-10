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
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <FaBars />
      </div>

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
