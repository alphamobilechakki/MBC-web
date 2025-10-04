import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {   sendOtpSignIn, sendOtpSignUp,  SignInUser,  SignUpUser } from "../../Networking/NetworkServices"; 
import { clearLocalData, setGetLocalData } from "../../Networking/LocalStorageHelper";

 

// login user
export const SendOtpLogin = createAsyncThunk(
    "auth/SendOtpLogin",
    async (phone, { rejectWithValue }) => {
        try {
            const res = await sendOtpSignIn({mobile:phone});
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || "Login Failed")
            
        }
    }
) 


export const verifyOtpAndSignin = createAsyncThunk(
    "auth/verifyOtpAndSignin",
    async (formData, { rejectWithValue }) => {
        try {
            const res = await SignInUser(formData);
            return res.data
            
        } catch (error) {
            return rejectWithValue(error?.response?.data || "Sign in Failed")
            
        }
    }
)


// signup user
export const sendOtpSignup = createAsyncThunk(
    "auth/sendOtpSignup",
    async (phone, { rejectWithValue }) => {
        try {
            const res = await sendOtpSignUp({ mobile: phone })
            return res.data
        } catch (error) {
            return rejectWithValue(error?.response?.data || "Failed Send Otp")
            
        }
    }
) 


export const verifyOtpAndSignup  = createAsyncThunk(
    "auth/SigverifyOtpAndSignup nupUser",
    async (formData, { rejectWithValue }) => {
       console.log("signupdata thunk start", formData);
        try {
            const res = await SignUpUser(formData);
            return res.data;

            
        } catch (error) {
            return rejectWithValue(error?.response?.data || "sign up failed")
            
        }
    }
)






const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: setGetLocalData("user") || null,
    token: setGetLocalData("token") || null,
    loading: false,
    error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            clearLocalData();
        },
    },
  
    extraReducers:(builder) => {
        builder
            //login
            .addCase(SendOtpLogin.pending, (state) => {
                state.loading = true;
            })
        
            .addCase(SendOtpLogin.fulfilled, (state, action) => {
                state.loading = false;
                // state.token = action.payload.token;
                // state.user = action.payload.user;
                localStorage.setItem("token", action.payload.token);
                
            })
            .addCase(SendOtpLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            .addCase(verifyOtpAndSignin.fulfilled, (state, action) => {
                state.loading = false;
                const { token, user } = action.payload.data;
                state.user = user;
                state.token = token;

    // ✅ Set token and user in localStorage
                setGetLocalData("token", token);
                setGetLocalData("user", user);

            }) 
        
        .addCase(verifyOtpAndSignin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        
        
            // signUp
            
            .addCase(sendOtpSignup.pending, (state) => {
                state.loading = true; state.error = null;
            })
            .addCase(sendOtpSignup.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(sendOtpSignup.rejected, (state, action) => {
                state.loading = false; state.error = action.payload;
            })

            .addCase(verifyOtpAndSignup.pending, (state) => {
                state.loading = true; state.error = null;
            })
            .addCase(verifyOtpAndSignup.fulfilled, (state, action) => {
                state.loading = false;
                const { token, user } = action.payload.data;
                state.user = user;
                state.token = token;

    // ✅ Set token and user in localStorage
                setGetLocalData("token", token);
                setGetLocalData("user", user);
            })
            .addCase(verifyOtpAndSignup.rejected, (state, action) => {
                state.loading = false; state.error = action.payload;
            });
    }
})


export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;