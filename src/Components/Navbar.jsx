import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/roadmaps", label: "Roadmaps" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 tracking-tight">
          Kamand Prompt
        </Link>

        <nav className="flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
