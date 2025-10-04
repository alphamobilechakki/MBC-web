import * as Yup from "yup";


// 🔹 Sign In Validation (phone + otp)
export const signInSchema = Yup.object().shape({
    phone: Yup.string()
    .required("phone is required")
       .matches(/^[6-9]\d{9}$/, "Phone must be 10 digits and start with 6,7,8, or 9"),
    otp: Yup.string()
       .matches(/^[0-9]{4,6}$/, "OTP must be 4-6 digits")
        .required("otp is required")
});




// 🔹 Sign Up Validation (name, phone, otp, address)
export const signUpSchema = Yup.object().shape({
 userName: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Phone must be 10 digits starting with 6-9")
    .required("Phone is required"),
  otp: Yup.string()
    .matches(/^[0-9]{4,6}$/, "OTP must be 4-6 digits")
    .required("OTP is required"),
  address: Yup.object().shape({
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    country: Yup.string().required("Country is required"),
  }),
})



export const ContactSchema = Yup.object().shape({
   name: Yup.string().required("Name is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
   email: Yup.string()
    .email("Invalid email") // ✅ only validates if user types something
    .notRequired(),
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Phone must be 10 digits and start with 6,7,8, or 9")
    .required("Phone is required"),
  message: Yup.string().required("Message is required"),
})


  
  