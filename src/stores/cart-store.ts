import { Cart } from '@/types/cart';
import { create } from 'zustand';
import { products } from '@/data/products';

import { productsType } from '@/types/productsType';
type States = {
    cart: Cart[];
};

type Actions = {
    upsertCartItem: (products: productsType, quantity: number) => void;
}

const initialState: States = {
    cart: []
}

export const useCartStore = create<States & Actions>()(set => ({
    ...initialState,
    upsertCartItem: (product, quantity) => set(state => {
        let newCart = state.cart;

        let productIndex = newCart.findIndex(item => item.product.id === product.id);

        if (productIndex < 0) {
            newCart.push({ product, quantity: 0 });
            productIndex = newCart.findIndex(item => item.product.id === product.id);
        };

        newCart[productIndex].quantity += quantity;

        if (newCart[productIndex].quantity <= 0) {
            newCart = newCart.filter(item => item.product.id !== product.id);
        };

        return { ...state, cart: newCart };
    })
}));

