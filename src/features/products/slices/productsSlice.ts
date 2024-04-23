import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '../model';
import { DUMMY_BOOKS } from './constants';

interface ProductsSliceState {
  value: IProduct[];
}

const initialState: ProductsSliceState = {
  value: DUMMY_BOOKS,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: () => ({}),
  selectors: {
    selectProducts: (products) => products.value,
  },
});

export { productsSlice };
export const { selectProducts } = productsSlice.selectors;
export type { ProductsSliceState };
