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
    },
});

export const {addToCart , removeFromCart , decreaseCount} = cartSlice.actions;

export default cartSlice.reducer;