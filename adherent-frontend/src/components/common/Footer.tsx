import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 text-sm mt-10">
      © {new Date().getFullYear()} Adhérent Panel. Tous droits réservés.
    </footer>
  );
};

export default Footer;
