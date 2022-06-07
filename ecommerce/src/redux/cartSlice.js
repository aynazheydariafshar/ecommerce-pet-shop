import { getTableSortLabelUtilityClass } from '@mui/material';
import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    cartItems : [] ,
    cartTotalQuantity : 0 ,
    cartTotalAmount : 0
}

const cartSlice = createSlice({
    name : 'cart' ,
    initialState ,
    reducers : {

        //add product on cart
        addToCart(state , action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if(itemIndex >= 0){
                if(state.cartItems[itemIndex].count > state.cartItems[itemIndex].cartQuantity){
                    state.cartItems[itemIndex].cartQuantity += 1;
                    toast.success(`تعداد محصول ${state.cartItems[itemIndex].name} افزایش یافت`)
                }else{
                    toast.error('موجودی محصول محدود است')
                }
            } else {
                const tempProduct = {...action.payload , cartQuantity : 1};
                state.cartItems.push(tempProduct);
                toast.success(`محصول ${action.payload.name} به سبد خرید شما اضافه شد`)
            }
        },

        //remove product from cart
        removeFromCart(state , action){
          const nextCart = state.cartItems.filter(item => item.id !== action.payload.id);
          state.cartItems = nextCart;
          toast.error(`محصول ${action.payload.name} از سبد خرید شما حذف شد`)
        },

        //low count of products
        decreaseCount(state , action){
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`تعداد محصول${action.payload.name} از سبد خرید شما کم شد`)
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCart = state.cartItems.filter(item => item.id !== action.payload.id);
                state.cartItems = nextCart;
                toast.error(`محصول ${action.payload.name} از سبد خرید شما حذف شد`)
            }
        },

        //clear all of product on cart
        clearAllProduct(state , action){
            state.cartItems = [];
            toast.error('تمام محصولات از سبد خرید شما حذف شد')
        },

        //save total of price
        getTotalOfPrice(state , action){
            let {total , quantity} = state.cartItems.reduce((cartTotal , cartItemes) => {
                const {price , cartQuantity} = cartItemes;
                const itemTotal = price * cartQuantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            },{
                total : 0,
                quantity : 0
            });

            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }
    },
});

export const {addToCart , removeFromCart , decreaseCount , clearAllProduct , getTotalOfPrice} = cartSlice.actions;

export default cartSlice.reducer;