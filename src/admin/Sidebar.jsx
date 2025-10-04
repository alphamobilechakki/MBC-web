import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaHome, FaChartLine, FaUser, FaEnvelope, FaCog } from "react-icons/fa";
import Logo from "../assets/adminImg/logo.jpeg"
const menuItems = [
  { name: "Home", icon: <FaHome />, href: "/" },
  { name: "Dashboard", icon: <FaChartLine />, href: "/admin/dashboard" },
  { name: "Category", icon: <FaChartLine />, href: "/admin/category" },
  { name: "Orders Management", icon: <FaUser />, href: "/ordersmanagement" },
  { name: "Products Management", icon: <FaEnvelope />, href: "/messages" },
  { name: "Customers", icon: <FaCog />, href: "/settings" },
  { name: "Messages / Inquiries", icon: <FaCog />, href: "/settings" },
  { name: "Reports / Analytics", icon: <FaCog />, href: "/settings" },
  { name: "Logout", icon: <FaCog />, href: "/logout" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 z-50
        ${isOpen ? "w-64" : "w-16"} 
      `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {isOpen && <h3 className="text-lg w-[130px] font-semibold text-blue-500">

          <img src={Logo} alt="logo" className="w-full" />
          </h3>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-blue-500 cursor-pointer"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="mt-4 flex flex-col">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`flex items-center px-4 py-3 transition 
              ${
                location.pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-blue-50 hover:text-blue-600"
              }
            `}
          >
            <span className="text-lg w-6 flex justify-center">{item.icon}</span>
            {isOpen && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};


export default Sidebar;


