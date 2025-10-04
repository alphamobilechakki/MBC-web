import React from "react";
import Header from "../Components/user/Header";
import Footer from "../Components/user/Footer"; 

const UserLayout = ({ children }) => { 
  return (
    <>
      <Header  />
      <main>{children}</main>  
      <Footer />
    </>
  );
};

export default UserLayout;
