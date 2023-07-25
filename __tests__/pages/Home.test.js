import { render, screen } from '@testing-library/react';
import '../setupTests.js';
import Home from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<Home />);

    const heading = screen.getByTestId(('main'));

    expect(heading).toBeInTheDocument();
  });
});