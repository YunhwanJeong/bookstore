import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '../model';
import { DUMMY_BOOKS } from './constants';

interface ProductsSliceState {
  items: IProduct[];
}

const initialState: ProductsSliceState = {
  items: [...DUMMY_BOOKS],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: (create) => ({
    deleteProduct: create.reducer((state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    }),
    addProduct: create.reducer((state, action: PayloadAction<IProduct>) => {
      state.items.unshift(action.payload);
    }),
    editProduct: create.reducer((state, action: PayloadAction<IProduct>) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    }),
  }),
  selectors: {
    selectProducts: (products) => products.items,
  },
});

export { productsSlice };
export const { selectProducts } = productsSlice.selectors;
export const { deleteProduct, addProduct, editProduct } = productsSlice.actions;
export type { ProductsSliceState };
