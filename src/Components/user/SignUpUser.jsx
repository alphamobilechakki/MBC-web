
import React, { useState } from "react";
import { Phone, Key, User, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Bg from "../../assets/Banner/S1.png";
import Logo from "../../assets/logo.jpeg";
import { signUpSchema } from "../validations/ValidationSchemas";
import { useDispatch, useSelector } from "react-redux";
import {  sendOtpSignup,  verifyOtpAndSignup } from "../../redux/slices/AuthSlice";

const SignUpUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    otp: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "India",
    },
  });

  const [errors, setErrors] = useState({});
  const [showOtp, setShowOtp] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);

  // 🔹 Handle normal fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    try {
      await signUpSchema.validateAt(name, { ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };




  const handleAddressChange = async (e) => {
    const { name, value } = e.target;

    // address object update karo
    let updatedAddress = { ...formData.address, [name]: value };


    // ✅ Agar pincode 6 digits ho gaya toh API call
    if (name === "zipCode" && value.length === 6) {
      try {
        const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await res.json();

        if (data[0].Status === "Success") {
          const postOffices = data[0].PostOffice || [];
          const cities = [...new Set(postOffices.map((p) => p.District))];

          updatedAddress.city = cities[0] || "";
          updatedAddress.state = postOffices[0]?.State || "";

          setCityOptions(cities); // dropdown me unique city options
        } else {
          updatedAddress.city = "";
          updatedAddress.state = "";
          setCityOptions([]);
        }
      } catch (err) {
        // console.error(" Invalid pincode", err);
        updatedAddress.city = "";
        updatedAddress.state = "";
        setCityOptions([]);
      }
    }

    // ✅ formData update karo
    setFormData((prev) => ({ ...prev, address: updatedAddress }));

    // ✅ Yup validation
    try {
      await signUpSchema.validateAt(`address.${name}`, {
        ...formData,
        address: updatedAddress,
      });
      setErrors((prev) => ({ ...prev, [`address.${name}`]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [`address.${name}`]: err.message }));
    }
  };


  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await signUpSchema.validateAt("phone", formData);
      setErrors({});
      await dispatch(sendOtpSignup(formData.phone)).unwrap();
      setShowOtp(true);
      // console.log("OTP sent ");
    } catch (err) {
      setErrors({ phone: err.message || err });
    }
  };



  // Step 2: Verify OTP + Complete Signup
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        mobile: formData.phone,
        otp: formData.otp,
        name: formData.userName,
        address: {
          ...formData.address,
          isDefault: true,
        },
      };

      await dispatch(verifyOtpAndSignup(payload)).unwrap();
      // console.log("Signup completed ✅");
      navigate("/signin");
    } catch (err) {
      setErrors({ otp: err.message || "Invalid OTP" });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-5 sm:p-0"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-[#fffaf3]/95 backdrop-blur-sm shadow-lg rounded-2xl p-6 w-full max-w-sm border border-[#e6d9b5]">
        <div className="flex justify-center mb-4">
          <Link to="/">
            <img
              src={Logo}
              alt="Website Logo"
              className="w-26 object-cover border-2 border-[#e6d9b5] shadow-md"
            />
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-[#7a5410]">
          Sign Up
        </h2>






        {/* 🔹 Single Form Signup Flow */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!showOtp) {
              handleSendOtp(e); // First step: send OTP
            } else {
              handleVerifyOtp(e); // Final step: verify OTP + signup
            }
          }}
          className="space-y-4"
        >
          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10-digit phone"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors.phone ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {showOtp && (
            <>
              {/* OTP */}
              <div className="relative">
                <Key className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
                <input
                  type="number"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors.otp ? "border-red-500" : "border-[#e6d9b5]"
                    } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
                />
                {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
              </div>
            </>
          )}


          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors.userName ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            />
            {errors.userName && (
              <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
            )}
          </div>

          <div className="relative">
            <Home className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <input
              type="text"
              name="street"
              value={formData.address.street}
              onChange={handleAddressChange}
              placeholder="Street"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors["address.street"] ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            />
            {errors["address.street"] && (
              <p className="text-red-500 text-sm mt-1">{errors["address.street"]}</p>
            )}
          </div>

          <div className="relative">
            <Home className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <input
              type="text"
              name="zipCode"
              value={formData.address.zipCode}
              onChange={handleAddressChange}
              placeholder="Pincode"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors["address.zipCode"] ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            />
            {errors["address.zipCode"] && (
              <p className="text-red-500 text-sm mt-1">{errors["address.zipCode"]}</p>
            )}
          </div>

          <div className="relative">
            <Home className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <select
              name="city"
              value={formData.address.city}
              onChange={handleAddressChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors["address.city"] ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            >
              <option value="">Select City</option>
              {cityOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors["address.city"] && (
              <p className="text-red-500 text-sm mt-1">{errors["address.city"]}</p>
            )}
          </div>

          <div className="relative">
            <Home className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <select
              name="state"
              value={formData.address.state}
              onChange={handleAddressChange}
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors["address.state"] ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            >
              <option value="">Select State</option>
              {formData.address.state && (
                <option value={formData.address.state}>{formData.address.state}</option>
              )}
            </select>
            {errors["address.state"] && (
              <p className="text-red-500 text-sm mt-1">{errors["address.state"]}</p>
            )}
          </div>

          {/* Country */}
          <div className="relative">
            <Home className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <input
              type="text"
              name="country"
              value={formData.address.country}
              onChange={handleAddressChange}
              placeholder="Country"
              className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] ${errors["address.country"] ? "border-red-500" : "border-[#e6d9b5]"
                } focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
            />
            {errors["address.country"] && (
              <p className="text-red-500 text-sm mt-1">{errors["address.country"]}</p>
            )}
          </div>



          <button
            type="submit"
            className="w-full bg-[#d4a94d] cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-[#b08943] transition"
          >
            {loading ? "Processing..." : showOtp ? "Verify OTP & Sign Up" : "Send OTP"}
          </button>
        </form>

        {/* 🔹 Error & Feedback */}
        {loading && (
          <p className="text-blue-500 text-sm text-center mt-2">
            Processing signup...
          </p>
        )}
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">
            {typeof error === "string"
              ? error
              : "Something went wrong. Please try again."}
          </p>
        )}






        <p
          onClick={() => navigate("/signin")}
          className="text-sm text-gray-600 text-center cursor-pointer hover:text-[#7a5410] mt-4"
        >
          Already Registered? <span className="font-semibold">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpUser;
