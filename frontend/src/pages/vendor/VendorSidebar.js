import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars, FaHome, FaPlus, FaClipboardList, FaChartBar } from "react-icons/fa";

const VendorSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Dashboard", path: "/vendor", icon: <FaHome /> },
    { name: "Add Listing", path: "/vendor/add-listing", icon: <FaPlus /> },
    { name: "Manage Bookings", path: "/vendor/manage-bookings", icon: <FaClipboardList /> },
    { name: "Analytics", path: "/vendor/analytics", icon: <FaChartBar /> },
  ];

  return (
    <div className={`bg-gray-900 text-white h-full p-5 fixed left-0 top-0 transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
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
  );
};

export default VendorSidebar;
