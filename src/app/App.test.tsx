import { renderWithProviders } from '@/common/test-utils';
import { screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should have correct initial render', () => {
    renderWithProviders(<App />);

    expect(screen.getByText(/bookstore/i)).toBeInTheDocument();
  });
});
