import { makeStore, type AppStore } from '@/app/store';
import { DUMMY_BOOKS } from './constants';
import type { ProductsSliceState } from './productsSlice';
import { productsSlice } from './productsSlice';

interface LocalTestContext {
  store: AppStore;
}

describe('products reducer', (it) => {
  beforeEach<LocalTestContext>((context) => {
    const initialState: ProductsSliceState = {
      value: [
        ...DUMMY_BOOKS,
        {
          id: 'test-id',
          img: 'test-img',
          name: 'test-name',
          price: 37,
          category: 'test-category',
        },
      ],
    };

    const store = makeStore({ products: initialState });

    context.store = store;
  });

  it('should handle initial state', () => {
    expect(productsSlice.reducer(undefined, { type: 'unknown' })).toStrictEqual({
      value: DUMMY_BOOKS,
    });
  });
});
