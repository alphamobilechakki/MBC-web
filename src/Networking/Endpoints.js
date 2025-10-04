 
const Endpoints = {

    // ================= ADMIN CATEGORY =================
    Admin :{
         GETALLCATEGORY : '/api/admin/categories'
    },

   
    


     // ================= USER CATEGORY =================
     
     User :{
          SENDOTPSIGNUP : '/api/signup',
          SIGNUPVERIFYOTP : '/api/VerifyOTP',
          SENDOTPSIGNIN : '/api/login',
          SIGNINVERIFYOTP : '/api/VerifyOTP',
          USERGETALLCATEGORY: '/api/categories',
          USERGETPRODUCT: '/api/products'
          
     }

}



export {Endpoints};