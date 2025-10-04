


import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";


import PrivateRoute from "./PrivateRoute";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import CategoryAdmin from "../admin/CategoryAdmin";
import SignInUser from "../Components/user/SignInUser";
import SignUpUser from "../Components/user/SignUpUser";
import AboutUs from "../Pages/about/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Blog from "../Pages/Blog";
import FAQ from "../Pages/FAQ";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import { Services } from "../Pages/services/Services";

const AppRoutes = () => {
  return (
    <Routes>

      {/* 🟢 User Routes */}
      <Route path="/" element={<UserLayout> <Home /> </UserLayout>} />
      <Route path="/blog" element={<UserLayout>   <Blog /> </UserLayout>} />
      <Route path="/aboutus" element={<UserLayout>  <AboutUs /> </UserLayout>} />
      <Route path="/services" element={<UserLayout> <Services/></UserLayout>} />
      <Route path="/contact" element={<UserLayout>  <ContactUs /> </UserLayout>} />
      <Route path="/faq" element={<UserLayout>  <FAQ /> </UserLayout>} />
      <Route path="/privacy" element={<UserLayout>  <PrivacyPolicy /> </UserLayout>} />
      <Route path="/terms" element={<UserLayout>   <TermsAndConditions /> </UserLayout>} />

      {/* 👇 Login & Signup without Header/Footer */}
      <Route path="/signin" element={<SignInUser />} />
      <Route path="/signup" element={<SignUpUser />} />



      {/*  Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </PrivateRoute>
        }
      />


      <Route
        path="/admin/category"
        element={
          <PrivateRoute>
            <AdminLayout>
              <CategoryAdmin />
            </AdminLayout>
          </PrivateRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;




