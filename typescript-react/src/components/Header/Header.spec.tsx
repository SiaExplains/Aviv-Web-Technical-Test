import { render, screen } from '@testing-library/react';

import Header from '.';

describe('<Header />', () => {
  it('Should render the header component', () => {
    render(<Header />);
  });
  it('should render the header with the logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText(/logo Aviv/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('should have the correct logo image source', () => {
    render(<Header />);
    const logoElement = screen.getByAltText(/logo Aviv/i);
    expect(logoElement).toHaveAttribute('src', '/assets/logo-aviv.svg');
  });

  it('should have the correct CSS class for the header', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toHaveClass('header');
  });
});
