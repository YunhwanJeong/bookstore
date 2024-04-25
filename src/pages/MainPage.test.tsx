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
        {
          id: 'test-2',
          img: '/test-2.jpg',
          name: 'The Test Book 2',
          price: 42,
          category: {
            value: 'romance',
            label: 'Romance',
          },
        },
        {
          id: 'test-3',
          img: '/test-3.jpg',
          name: 'The Test Book 3',
          price: 15,
          category: {
            value: 'mystery',
            label: 'Mystery',
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

  describe<LocalTestContext>('When clicking delete button', (it) => {
    it('should delete if the user confirms', async ({ user, store }) => {
      const previousState = selectProducts(store.getState());
      expect(previousState[1].id).toEqual('test-2');

      const deleteButton = screen.getByTestId(generateTestId('product-delete-button', 'test-2'));
      window.confirm = vi.fn(() => true);
      await user.click(deleteButton);

      expect(window.confirm).toHaveBeenCalled();
      const updatedState = selectProducts(store.getState());
      expect(updatedState[1].id).toEqual('test-3');
      expect(updatedState).toHaveLength(2);
    });
  });

  describe<LocalTestContext>('When clicking book item', (it) => {
    beforeEach<LocalTestContext>(async ({ user }) => {
      const bookItem = screen.getByText('The Test Book 2');
      await user.click(bookItem);
    });

    it('should render the dialog with the correct title', () => {
      expect(screen.getByLabelText('Book Details', { selector: 'div[role="dialog"]' })).toBeInTheDocument();
    });

    it('should render a form with the correct fields with default values', () => {
      expect(screen.getByLabelText(/name/i)).toHaveValue('The Test Book 2');
      expect(screen.getByLabelText(/price/i, { exact: false })).toHaveValue(42);
      expect(screen.getByLabelText(/category/i)).toHaveValue('romance');
      expect(screen.getByLabelText(/description/i)).toHaveValue('');
    });

    it('should update a book and close the dialog when the form is submitted', async ({ user }) => {
      const name = screen.getByLabelText(/name/i);
      const price = screen.getByLabelText(/price/i, { exact: false });
      const category = screen.getByLabelText(/category/i);
      const description = screen.getByLabelText(/description/i);

      await user.clear(name);
      await user.type(name, 'The Test Book 2 Updated');
      await user.clear(price);
      await user.type(price, '44');
      await user.selectOptions(category, 'suspense');
      await user.clear(description);
      await user.type(description, 'This is an updated test book');

      const submitButton = screen.getByText(/save/i, { selector: 'button[type=submit]' });
      await user.click(submitButton);

      expect(screen.getByText('The Test Book 2 Updated')).toBeInTheDocument();
      expect(() => screen.getByLabelText('Book Details', { selector: 'div[role="dialog"]' })).toThrow();
    });
  });

  describe<LocalTestContext>('When clicking Add a Book button', (it) => {
    beforeEach<LocalTestContext>(async ({ user }) => {
      const addABookButton = screen.getByRole('button', { name: /add a book/i });
      await user.click(addABookButton);
    });

    it('should render the dialog with the correct title', () => {
      expect(screen.getByLabelText('Add a Book', { selector: 'div[role="dialog"]' })).toBeInTheDocument();
    });

    it('should render a form with the correct fields', () => {
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

      await user.type(name, 'The Test Book 4');
      await user.type(price, '44');
      await user.selectOptions(category, 'mystery');
      await user.type(description, 'This is a test book');

      const submitButton = screen.getByText(/save/i, { selector: 'button[type=submit]' });
      await user.click(submitButton);

      expect(screen.getByText('The Test Book 4')).toBeInTheDocument();
      expect(() => screen.getByLabelText('Add a Book', { selector: 'div[role="dialog"]' })).toThrow();
    });
  });
});
