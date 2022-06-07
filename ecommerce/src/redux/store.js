import { configureStore } from "@reduxjs/toolkit";
import { loadState, setcartItems } from "utils/Common";
import cartSlice from "./cartSlice";

const persistedState = loadState();

export const store = configureStore({
    devTools : true ,
    persistedState ,
    reducer : {
        cart : cartSlice
    }
});

store.subscribe(() => {
    setcartItems({
      cart: store.getState().cart
    });
});