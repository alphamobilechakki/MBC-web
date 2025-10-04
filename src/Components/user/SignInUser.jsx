import React, { useState } from "react";
import { Phone, Key } from "lucide-react";
import Bg from "../../assets/Banner/S1.png";
import Logo from "../../assets/logo.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema } from "../validations/ValidationSchemas";
import { useDispatch } from "react-redux";
import { SendOtpLogin, verifyOtpAndSignin } from "../../redux/slices/AuthSlice";

const SignInUser = () => {
  const [showOtp, setShowOtp] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({

    phone: "",
    otp: "",


  })

  const token = localStorage.getItem("token")


  console.log("tokennnnn", token)
  // 🔹 Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();

    try {

      await signInSchema.validateAt("phone", formData);
      setErrors({})
      // const payload = { phone: formData.phone };
      // await dispatch(SendOtpLogin(payload)).unwrap();

      await dispatch(SendOtpLogin(formData.phone)).unwrap();
      setShowOtp(true);
    } catch (error) {
      setErrors({ phone: error?.message || error })

    }
  };



  // handlechange normal fields
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }))
    try {

      await signInSchema.validateAt(name, { ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, [name]: error.message }))

    }

  }


  // 🔹 Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {

      const payload = {
        mobile: formData.phone,
        otp: formData.otp,
      }

      await dispatch(verifyOtpAndSignin(payload)).unwrap()
      navigate("/")
    } catch (error) {
      setErrors({ otp: error?.message || "Invalid OTP" })
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
          Sign In
        </h2>

        <form
          onSubmit={showOtp ? handleVerifyOtp : handleSendOtp}
          className="space-y-4"
        >
          {/* Phone Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
            <input
              type="tel"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
              placeholder="Enter 10-digit phone"
              className="w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] "

            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* OTP Input */}
          {showOtp && (
            <div className="relative">
              <Key className="absolute left-3 top-2.5 text-[#b08943]" size={18} />
              <input
                type="number"
                value={formData.otp}
                name="otp"
                onChange={handleChange}
                placeholder="6-digit OTP"
                className={`w-full pl-10 pr-3 py-2 border rounded-lg bg-[#fffaf3] 
                  ${errors.otp ? "border-red-500" : "border-[#e6d9b5]"} 
                  focus:outline-none focus:ring-2 focus:ring-[#d4a94d]`}
              />
              {errors.otp && (
                <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
              )}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#d4a94d] cursor-pointer text-white py-2 rounded-lg font-semibold 
              hover:bg-[#b08943] transition"
          >
            {showOtp ? "Verify OTP And SignIn" : "Send OTP"}
          </button>

          <p
            onClick={() => navigate("/signup")}
            className="text-sm text-gray-600 text-center cursor-pointer hover:text-[#7a5410] mt-2"
          >
            New Register? <span className="font-semibold">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInUser;
