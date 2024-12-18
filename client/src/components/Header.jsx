import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* logo */}
        <div className="text-2xl font-bold text-gray-800">
          CIL GAS Instruments
        </div>
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-800:text-blue-500 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-800:text-blue-500 transition"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-800:text-blue-500 transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-800:text-blue-500 transition"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-medium"
                : "text-gray-800:text-blue-500 transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none hover:text-blue-500 transition"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
