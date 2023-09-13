import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartSlice,
    }
});

export default Store;