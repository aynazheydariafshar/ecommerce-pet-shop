import { configureStore } from "@reduxjs/toolkit";
import { loadState, setcartItems } from "utils/Common";
import cartSlice from "./cartSlice";

export const store = configureStore({
    devTools : true ,
    preloadedState :  loadState(),
    reducer : {
        cart : cartSlice
    }
});

store.subscribe(() => {
    setcartItems({
      cart: store.getState().cart
    });
});