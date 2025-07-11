import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-100 w-64 h-screen p-4 fixed top-0 left-0">
      <nav className="space-y-4 mt-10">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>🏠 Dashboard</NavLink>
        <NavLink to="/documents" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>📁 Documents</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>👤 Profil</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
