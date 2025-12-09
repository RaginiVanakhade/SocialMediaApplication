import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// ---- Types ----
export interface CartProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface CartState {
  products: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product (quantity & totalPrice are created here)
    addToCart(
      state,
      action: PayloadAction<Omit<CartProduct, "quantity" | "totalPrice">>
    ) {
      const newItem = action.payload;

      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // Remove product completely
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;

      const item = state.products.find((item) => item.id === id);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.totalPrice;
      state.products = state.products.filter((item) => item.id !== id);
    },

    // Increase quantity
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;

      const item = state.products.find((item) => item.id === id);
      if (!item) return;

      item.quantity++;
      item.totalPrice += item.price;
      state.totalQuantity++;
      state.totalPrice += item.price;
    },

    // Decrease quantity or remove when reaches zero
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;

      const item = state.products.find((item) => item.id === id);
      if (!item) return;

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalQuantity--;
        state.totalPrice -= item.price;
      } else {
        state.totalQuantity--;
        state.totalPrice -= item.price;
        state.products = state.products.filter((p) => p.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
