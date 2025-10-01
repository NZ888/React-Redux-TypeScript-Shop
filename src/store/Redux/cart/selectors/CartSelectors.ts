import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store.ts";
import type { ProductType } from "../../../../types/types.ts";

export const selectCartItems = (state: RootState) => state.cartReducer.items;


export const makeSelectItemQuantity = (productId: number) =>
    createSelector(selectCartItems, (items) => {
        const item = items.find(i => i.id === productId);
        return item?.quantity || 0;
    });
export const selectCartCount = createSelector(
    selectCartItems,
    (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const makeSelectItemTotal = (productId: number, products: ProductType[]) =>
    createSelector(selectCartItems, (items) => {
        const item = items.find(i => i.id === productId);
        const product = products.find(p => p.id === productId);
        return item && product ? item.quantity * product.price : 0;
    });


export const makeSelectCartTotal = (products: ProductType[]) =>
    createSelector(selectCartItems, (items) =>
        items.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            return product ? total + product.price * item.quantity : total;
        }, 0)
    );
