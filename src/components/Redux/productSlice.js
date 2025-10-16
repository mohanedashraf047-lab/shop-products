import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products from API with delay
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const initialState = {
  items: [],
  cart: [],
  value: 0, // total quantity in cart
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((p) => p.id === item.id);

      const quantityToAdd = item.quantity || 1;

      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.cart.push({ ...item, quantity: quantityToAdd });
      }

      state.value += quantityToAdd;
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((i) => i.id === id);

      if (item && quantity > 0) {
        state.value += quantity - item.quantity;
        item.quantity = quantity;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cart.find((i) => i.id === id);

      if (item) {
        state.value -= item.quantity;
        state.cart = state.cart.filter((i) => i.id !== id);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addToCart, updateQuantity, removeFromCart } =
  productSlice.actions;

export default productSlice.reducer;
