import type { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';

const cartSelector = (state: RootState) => state.cart;
export const getTotalCount = createSelector(cartSelector, (cart) => {
  return cart.products.reduce((total, product) => total + product.count, 0);
});

export const createGetProductSelector = (id: string) =>
  createSelector(cartSelector, (cart) => {
    return cart.products.find((product) => product.id === id);
  });
