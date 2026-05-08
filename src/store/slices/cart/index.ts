import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CartProduct {
    id: string;
    name: string;
    price: number;
    count: number;
}

interface Product {
    id: string;
    name: string;
    price: number;
    count?: number;
}

export interface CartState {
    products: Array<CartProduct>

}

const initialState: CartState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const cartProduct = state.products.find(product => product.id === action.payload.id)
            if (cartProduct) {
                cartProduct.count += 1;
            } else {
                state.products.push({...action.payload, count: 1});
            }

        },
        decrementProduct: (state, action: PayloadAction<Product>) => {
            const cartProduct = state.products.find(product => product.id === action.payload.id)
            if (cartProduct) {
                if (cartProduct.count > 1) {
                    cartProduct.count -= 1;
                } else {
                    state.products.filter(product => product.id !== action.payload.id);
                }
            }
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.products.filter(product => product.id !== action.payload.id);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, decrementProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer

