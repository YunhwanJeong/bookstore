import { makeStore, type AppStore } from '@/app/store';
import { DUMMY_BOOKS } from './constants';
import type { ProductsSliceState } from './productsSlice';
import { deleteProduct, productsSlice, selectProducts } from './productsSlice';

interface LocalTestContext {
  store: AppStore;
}

describe<LocalTestContext>('Products reducer', (it) => {
  beforeEach<LocalTestContext>((context) => {
    const initialState: ProductsSliceState = {
      items: [
        ...DUMMY_BOOKS,
        {
          id: 'test-1',
          img: '/test-1.jpg',
          name: 'The Test Book 1',
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
      items: DUMMY_BOOKS,
    });
  });

  it('should handle delete product', ({ store }) => {
    expect(selectProducts(store.getState())).toHaveLength(9);

    store.dispatch(deleteProduct('test-1'));

    expect(selectProducts(store.getState())).toHaveLength(8);
  });
});
