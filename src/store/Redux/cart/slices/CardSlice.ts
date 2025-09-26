import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {CartItem} from "../../../../types/types.ts";


interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
}

const cardSlice = createSlice({
    name: "Card",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem) {
                existingItem.quantity += quantity
            }
            else{
                state.items.push({id, quantity})
            }
        },
        setQuantity: (state, action: PayloadAction<CartItem>) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id)
            if (item) {
                item.quantity += quantity
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        clearCart(state) {
            state.items = []
        }
    }
})

export const { addToCart, setQuantity, removeFromCart, clearCart } = cardSlice.actions;
export default cardSlice.reducer;