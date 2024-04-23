import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '../model';
import { DUMMY_BOOKS } from './constants';

interface ProductsSliceState {
  products: IProduct[];
}

const initialState: ProductsSliceState = {
  products: DUMMY_BOOKS,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: (create) => ({
    deleteProduct: create.reducer((state, action: PayloadAction<string>) => {
      const index = state.products.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    }),
  }),
  selectors: {
    selectProducts: (products) => products.products,
  },
});

export { productsSlice };
export const { selectProducts } = productsSlice.selectors;
export const { deleteProduct } = productsSlice.actions;
export type { ProductsSliceState };
