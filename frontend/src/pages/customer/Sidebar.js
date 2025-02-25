import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHotel, FaBookmark, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", path: "/customer", icon: <FaHome /> },
    { name: "Listings", path: "/customer/listings", icon: <FaHotel /> },
    { name: "My Bookings", path: "/customer/my-bookings", icon: <FaBookmark /> },
    { name: "Profile", path: "/customer/profile", icon: <FaUser /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-5 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button onClick={toggleSidebar} className="text-white text-2xl mb-4 focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul>
          {menuItems.map((item) => (
            <li key={item.path} className={`mb-4 ${location.pathname === item.path ? "bg-gray-700 rounded-lg" : ""}`}>
              <Link to={item.path} className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg transition">
                <span className="text-xl">{item.icon}</span>
                {isOpen && <span className="text-lg">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
