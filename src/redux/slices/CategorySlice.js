import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  
import { UserCategory } from "../../Networking/NetworkServices";
 


// ✅ admin Categories 
export const fatchCategories = createAsyncThunk(
    "categories/fatchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await   GetAllCategory() 
            return response.data;
        } catch (error) {
           return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
)




// user category
export const userCategory = createAsyncThunk(
    "categories/UserCategory",
    async (_, { rejectWithValue }) => {
        try {
            const response = await UserCategory();
            console.log( response, "categorydataaaaaaaaa")
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || "something went wrong");

            
        }
    }
)



 
const CategorySlice = createSlice({
    name: "categories",
    initialState: {
        items: [],      // admin categories
    userItems: [],  // user categories
        loading: false,
        error : null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        // fatch
        .addCase(fatchCategories.pending, (state) => {
            state.loading = true;
            state.error = null;

        })
            .addCase(fatchCategories.fulfilled, (state,action) => {
                state.loading = false;
                state.items = action.payload;

            })
            .addCase(fatchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        
        
        
          // User fetch
      .addCase(userCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userCategory.fulfilled, (state, action) => {
        state.loading = false;
        //   state.userItems = action.payload;
          state.userItems = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(userCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
        
    }


    
})

export default CategorySlice.reducer;





 