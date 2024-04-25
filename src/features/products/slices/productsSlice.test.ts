import { makeStore, type AppStore } from '@/app/store';
import { DUMMY_BOOKS } from './constants';
import type { ProductsSliceState } from './productsSlice';
import { addProduct, deleteProduct, editProduct, productsSlice, selectProducts } from './productsSlice';

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
          category: {
            value: 'test-category',
            label: 'Test Category',
          },
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

  it('should add product as the first element', ({ store }) => {
    const previousState = selectProducts(store.getState());

    expect(previousState).toHaveLength(9);

    store.dispatch(
      addProduct({
        id: 'test-2',
        img: '/test-2.jpg',
        name: 'The Test Book 2',
        price: 42,
        category: {
          value: 'test-category',
          label: 'Test Category',
        },
      }),
    );

    const updatedState = selectProducts(store.getState());

    expect(updatedState).toHaveLength(10);
    expect(updatedState[0].id).toBe('test-2');
  });

  it('should handle edit product', ({ store }) => {
    const previousProducts = selectProducts(store.getState());
    const previousIndex = previousProducts.findIndex((product) => product.id === 'test-1');

    expect(previousIndex).toEqual(8);
    expect(previousProducts).toHaveLength(9);

    store.dispatch(
      editProduct({
        id: 'test-1',
        img: '/test-1.jpg',
        name: 'The Test Book 1 edit',
        price: 25.55,
        category: {
          value: 'test-category-edit',
          label: 'Test Category Edit',
        },
      }),
    );

    const updatedProducts = selectProducts(store.getState());
    const updatedIndex = updatedProducts.findIndex((product) => product.id === 'test-1');
    const updatedProduct = updatedProducts[updatedIndex];

    expect(updatedProduct).toStrictEqual({
      id: 'test-1',
      img: '/test-1.jpg',
      name: 'The Test Book 1 edit',
      price: 25.55,
      category: {
        value: 'test-category-edit',
        label: 'Test Category Edit',
      },
    });
    expect(updatedIndex).toEqual(8);
    expect(updatedProducts).toHaveLength(9);
  });
});
