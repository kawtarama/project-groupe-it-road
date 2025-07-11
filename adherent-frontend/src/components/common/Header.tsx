import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/authService";

const Header: React.FC = () => {
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Adhérent Panel</h1>
      <nav className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/documents" className="hover:underline">Documents</Link>
        <Link to="/profile" className="hover:underline">Profil</Link>
        <button onClick={handleLogout} className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200">
          Déconnexion
        </button>
      </nav>
    </header>
  );
};

export default Header;
