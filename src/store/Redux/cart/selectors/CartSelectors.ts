import type {RootState} from "../../store.ts";
import type {ProductType} from "../../../../types/types.ts";

export const selectCartItems = (state: RootState) => state.cartReducer.items

export const selectCartCount = (state: RootState)=> state.cartReducer.items.reduce((total, item) => total + item.quantity, 0)

export const selectItemTotal = (id : number, products: ProductType[]) => (state: RootState) =>{
    const cardItem = state.cartReducer.items.find(item => item.id === id);
    const product = products.find(p => p.id === id);

    return cardItem && product ? cardItem.quantity * product.price : 0;
}

export const selectCardTotal = (products: ProductType[]) => (state: RootState) =>{
    return state.cartReducer.items.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return product ? total + product.price * item.quantity : total;
    }, 0)
}