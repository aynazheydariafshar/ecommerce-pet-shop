import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setcartItems } from 'utils/Common';

const initialState = {
    cartItems : [] ,
    cartTotalQuantity : 0 ,
    cartTotalAmount : 0
}

const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {
        addToCart(state , action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`تعداد محصول ${state.cartItems[itemIndex].name} افزایش یافت`)
            } else {
                const tempProduct = {...action.payload , cartQuantity : 1};
                state.cartItems.push(tempProduct);
                toast.success(`محصول ${action.payload.name} به سبد خرید شما اضافه شد`)
            }
        },
    },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;