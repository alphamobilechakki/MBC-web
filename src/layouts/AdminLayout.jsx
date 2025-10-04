import React, { useEffect, useState } from "react";
import Sidebar from "../admin/Sidebar";
import HeaderAdmin from "../admin/HeaderAdmin";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // mobile: closed by default

  const user = {
    name: "Rahul Kumar",
    email: "rahul@example.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  };



  useEffect(() =>{
    const handleResize = () =>{
      if(window.innerWidth < 768){
        setIsOpen(false);
      }
      else{
        setIsOpen(true)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  },[])



  
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Page Content */}
      <div
        className={`
          flex-1 min-h-screen bg-gray-50 transition-all duration-300
          ${isOpen ? "ml-64" : "ml-16"} hidden md:block   /* desktop push */
        `}
      >
        <HeaderAdmin isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
        <main className="px-5 pt-10">{children}</main>
      </div>

      {/* Mobile Overlay */}
      <div className={`md:hidden flex-1 min-h-screen bg-gray-50   ${isOpen ? "ml-16" : "ml-16"}`}>
        <HeaderAdmin isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
        <main className="px-5 pt-10">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
