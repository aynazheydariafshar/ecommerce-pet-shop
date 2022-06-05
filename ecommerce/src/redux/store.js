import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const store = configureStore({
    devTools : true ,
    reducer : {
        cart : cartSlice
    }
})