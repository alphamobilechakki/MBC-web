
import  React from "react"; 
import api from "./AuthAxios"
import { Endpoints } from "./Endpoints";




// ADMIN Api's
export const GetAllCategory = async () => {
    console.log("Calling API:" ); // ✅ log here
    return await api.get(Endpoints.Admin.GETALLCATEGORY)
}
    




// USER API'S

// ✅ Signup User send otp
export const SignUpUser = async (data) => { 
  return await api.post(Endpoints.User.SIGNUPVERIFYOTP, data);
};
 
// send otp signup
export const sendOtpSignUp = async (data) => {
  return await api.post(Endpoints.User.SENDOTPSIGNUP, data);
}

// ✅ Signin User send otp
export const sendOtpSignIn = async (data) => {
  return await api.post(Endpoints.User.SENDOTPSIGNIN, data);
};
 
// otp verify signin
export const SignInUser = async (data) => {
  return await api.post(Endpoints.User.SIGNINVERIFYOTP, data);
};


// get all category
export const UserCategory = async (data) => {
  return await api.get(Endpoints.User.USERGETALLCATEGORY);
};
   
// get all product
export const UserProduct = async () => {
  return await api.get(Endpoints.User.USERGETPRODUCT);
};

       