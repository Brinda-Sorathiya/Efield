import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import mindleaf from "../assets/icons8-energy-saving-bulb-64 (1).png";
import dropdown from "../assets/icons8-dropdown-64.png";
import dropside from "../assets/icons8-right-64.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky bg-slate-900 w-full m-0 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          $
          
            <img className="w-[50px]" src={mindleaf} alt="mindleaf" />
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 inline-block text-transparent bg-clip-text ml-2">
            Efield
          </h1>
        </div>

        {/* Hamburger button (visible on mobile) */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img className="w-[45px]" src={dropside} alt="mindleaf" />
          ) : (
            <img className="w-[45px]" src={dropdown} alt="mindleaf" />
          )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex items-center space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="md:flex md:space-x-4">
            <li className="md:mb-0 mb-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800">
                <Link
                  to="/"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Home
                </Link>
              </button>
            </li>
            <li className="md:mb-0 mb-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800">
                <Link
                  to="/crop"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Crop
                </Link>
              </button>
            </li>
            <li className="md:mb-0 mb-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800">
                <Link
                  to="/yield"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Yield
                </Link>
              </button>
            </li>
            <li className="md:mb-0 mb-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800">
                <Link
                  to="/rainfall"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Rainfall
                </Link>
              </button>
            </li>
            <li className="md:mb-0 mb-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 group-hover:from-teal-600 group-hover:to-green-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800">
                <Link
                  to="/production"
                  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Production
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
