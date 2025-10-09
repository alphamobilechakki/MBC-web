import React from "react";
import Header from "../Components/user/Header";
import Footer from "../Components/user/Footer"; 
import WhatsAppButton from "../Components/user/WhatsAppButton";

const UserLayout = ({ children }) => { 
  return (
    <>
      <Header  />
      <main>{children}</main>  
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default UserLayout;
