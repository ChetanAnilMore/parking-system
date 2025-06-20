import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/no-parking_12504620.png";
import { useAuth } from "../store/auth";
import { ActiveLinkContext } from "../App";

const Navbar = () => {
  const { activeLink, setActiveLink } = useContext(ActiveLinkContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={() => handleLinkClick("Home")}
          >
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SmartPark
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`z-10 ${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "Home"
                      ? "bg-blue-700 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "Search"
                      ? "bg-blue-700 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => handleLinkClick("Search")}
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "Booking"
                      ? "bg-blue-700 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => handleLinkClick("Booking")}
                >
                  Booking
                </Link>
              </li>
              { isLoggedIn && (
                <li>
                  <Link
                    to="/profile"
                    className={`block py-2 px-3 rounded ${
                      activeLink === "User Profile"
                        ? "bg-blue-700 text-white"
                        : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => handleLinkClick("User Profile")}
                  >
                    User Profile
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/contact-us"
                  className={`block py-2 px-3 rounded ${
                    activeLink === "Contact"
                      ? "bg-blue-700 text-white"
                      : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                  onClick={() => handleLinkClick("Contact")}
                >
                  Contact
                </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link
                    to="/logout"
                    className={`block py-2 px-3 rounded ${
                      activeLink === "Logout"
                        ? "bg-blue-700 text-white"
                        : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => handleLinkClick("Logout")}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className={`block py-2 px-3 rounded ${
                      activeLink === "Login"
                        ? "bg-blue-700 text-white"
                        : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                    onClick={() => handleLinkClick("Login")}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;