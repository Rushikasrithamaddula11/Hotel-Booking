import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCheckCircle, FaUsers, FaChartBar, FaBars, FaTimes } from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <FaHome /> },
    { name: "Approve Listings", path: "/admin/approve-listings", icon: <FaCheckCircle /> },
    { name: "Manage Users", path: "/admin/manage-users", icon: <FaUsers /> },
    { name: "Analytics", path: "/admin/analytics", icon: <FaChartBar /> },
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

export default AdminSidebar;
