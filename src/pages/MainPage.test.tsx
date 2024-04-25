import type { AppStore } from '@/app/store';
import { generateTestId, renderWithProviders } from '@/common/utils/test';
import { selectProducts, type ProductsSliceState } from '@/features/products/slices';
import { screen } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import MainPage from './MainPage';

interface LocalTestContext {
  store: AppStore;
  user: UserEvent;
}

describe<LocalTestContext>('MainPage', () => {
  beforeEach<LocalTestContext>((context) => {
    const initialState: ProductsSliceState = {
      items: [
        {
          id: 'test-1',
          img: '/test-1.jpg',
          name: 'The Test Book 1',
          price: 37,
          category: {
            value: 'manga',
            label: 'Manga',
          },
        },
      ],
    };

    const { user, store } = renderWithProviders(<MainPage />, {
      preloadedState: {
        products: initialState,
      },
    });

    context.store = store;
    context.user = user;
  });

  describe<LocalTestContext>('MainPage', (it) => {
    it('should delete when the delete button is clicked and the user confirms', async ({ user, store }) => {
      const deleteButton = screen.getByTestId(generateTestId('product-delete-button', 'test-1'));
      window.confirm = vi.fn(() => true);

      await user.click(deleteButton);

      expect(window.confirm).toHaveBeenCalled();
      const state = selectProducts(store.getState());
      expect(state).toHaveLength(0);
    });

    it('should render the dialog with its information when user clicks a book', async ({ user }) => {
      const book = screen.getByText('The Test Book 1');
      await user.click(book);

      expect(screen.getByLabelText('Book Details', { selector: 'div[role="dialog"]' })).toBeInTheDocument();
      expect(screen.getByLabelText(/name/i)).toHaveValue('The Test Book 1');
      expect(screen.getByLabelText(/price/i, { exact: false })).toHaveValue(37);
      expect(screen.getByLabelText(/category/i)).toHaveValue('manga');
    });
  });

  describe<LocalTestContext>('When clicking Add a Book button', (it) => {
    beforeEach<LocalTestContext>(async ({ user }) => {
      const addABookButton = screen.getByRole('button', { name: /add a book/i });
      await user.click(addABookButton);
    });

    it('should render the dialog with the correct title', async () => {
      expect(screen.getByLabelText('Add a Book', { selector: 'div[role="dialog"]' })).toBeInTheDocument();
    });

    it('should render a form with the correct fields', async () => {
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/price/i, { exact: false })).toBeInTheDocument();
      expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    });

    it('should add a book and close the dialog when the form is submitted', async ({ user }) => {
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
      expect(() => screen.getByLabelText('Add a Book', { selector: 'div[role="dialog"]' })).toThrow();
    });
  });
});
