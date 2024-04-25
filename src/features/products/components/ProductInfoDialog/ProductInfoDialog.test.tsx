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

describe<LocalTestContext>('ProductInfoDialog', (it) => {
  beforeEach<LocalTestContext>(async (context) => {
    const initialState: ProductsSliceState = {
      items: [
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

    const { user, store } = renderWithProviders(<App />, {
      preloadedState: {
        products: initialState,
      },
    });

    const addABookButton = screen.getByRole('button', { name: /add a book/i });

    await user.click(addABookButton);

    context.store = store;
    context.user = user;
  });

  it('should render add a book button that opens the dialog', async () => {
    expect(screen.getByRole('dialog', { description: 'base dialog' })).toBeInTheDocument();
  });

  it('should render a form with the correct fields', async () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i, { exact: false })).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
  });

  it('should add a book when the form is submitted', async ({ user }) => {
    const name = screen.getByLabelText(/name/i);
    const price = screen.getByLabelText(/price/i, { exact: false });
    const category = screen.getByLabelText(/category/i);
    const description = screen.getByLabelText(/description/i);

    await user.type(name, 'The Test Book 2');
    await user.type(price, '42');
    await user.selectOptions(category, 'mystery');
    await user.type(description, 'This is a test book');

    const submitButton = screen.getByText(/save/i, { selector: 'button[type=submit]' });
    await user.click(submitButton);

    expect(screen.getByText('The Test Book 2')).toBeInTheDocument();
  });
});
