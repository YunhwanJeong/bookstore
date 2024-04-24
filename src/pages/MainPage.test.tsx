import { App } from '@/app';
import type { AppStore } from '@/app/store';
import { renderWithProviders } from '@/common/utils/test';
import type { ProductsSliceState } from '@/features/products/slices';
import { screen } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';

interface LocalTestContext {
  store: AppStore;
  user: UserEvent;
}

describe<LocalTestContext>('Product', (it) => {
  beforeEach<LocalTestContext>((context) => {
    const initialState: ProductsSliceState = {
      items: [
        {
          id: 'test-1',
          img: '/test-1.jpg',
          name: 'The Test Book 1',
          price: 37,
          category: 'test-category',
        },
      ],
    };

    const { user, store } = renderWithProviders(<App />, {
      preloadedState: {
        products: initialState,
      },
    });

    context.store = store;
    context.user = user;
  });

  it('should be deleted when the delete button is clicked and the user confirms', async ({ user, store }) => {
    const deleteButton = screen.getByTestId('delete-button-test-1');
    window.confirm = vi.fn(() => true);

    await user.click(deleteButton);

    expect(window.confirm).toHaveBeenCalled();
    const state = store.getState().products.items;
    expect(state).toHaveLength(0);
  });
});
