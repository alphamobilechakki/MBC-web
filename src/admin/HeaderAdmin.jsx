import React from "react";

const HeaderAdmin = ({ isOpen, user }) => {
  return (
    <header
      className=" bg-gray-100 w-full"
    
    >
        <div className="py-4 flex justify-between px-5 ">
 {/* Left Side */}
 <div>
      <h1 className="text-lg font-semibold text-gray-700">Admin Panel</h1>

 </div>

      {/* Right Side - User Info */}
      <div className="flex items-center space-x-4">
        {/* User Name & Email */}
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-800">{user?.name || "Guest User"}</p>
          <p className="text-xs text-gray-500">{user?.email || "guest@example.com"}</p>
        </div>

        {/* User Image */}
        <img
          src={user?.image || "https://via.placeholder.com/40"} 
          alt="User"
          className="w-10 h-10 rounded-full border shadow-sm"
        />
      </div>

        </div>
     
    </header>
  );
};

export default HeaderAdmin;
