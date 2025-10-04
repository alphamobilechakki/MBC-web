import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserProduct } from "../../Networking/NetworkServices";

// ✅ Async thunk to fetch products
export const userproduct = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserProduct();
      console.log("Backend response:", response.data);

      // Pick the products array from response
      return response.data.data.products;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "something went wrong"
      );
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    data: [],        // products array
    totalPages: 0,   // optional, for pagination
    currentPage: 1,  // optional
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userproduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || []; // ✅ products array
      })
      .addCase(userproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
