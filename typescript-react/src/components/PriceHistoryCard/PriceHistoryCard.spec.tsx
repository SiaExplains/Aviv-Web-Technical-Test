import React from 'react';
import { render, screen } from '@testing-library/react';

import PriceHistoryCard from './PriceHistoryCard';

const mockPrices = [
  { created_date: new Date('2023-07-19T12:34:56Z'), price_eur: 100 },
  { created_date: new Date('2023-07-20T10:20:30Z'), price_eur: 120 },
];

describe('PriceHistoryCard', () => {
  it('should render the header with date and price columns', () => {
    render(<PriceHistoryCard prices={[]} />);
    const dateHeaderElement = screen.getByText('Date');
    const priceHeaderElement = screen.getByText('Price (eur)');

    expect(dateHeaderElement).toBeInTheDocument();
    expect(priceHeaderElement).toBeInTheDocument();
  });

  it('should render the correct date and price data', () => {
    render(<PriceHistoryCard prices={mockPrices} />);

    const dateElement1 = screen.getByText('7/19/2023');
    const priceElement1 = screen.getByText('100');

    const dateElement2 = screen.getByText('7/20/2023');
    const priceElement2 = screen.getByText('120');

    expect(dateElement1).toBeInTheDocument();
    expect(priceElement1).toBeInTheDocument();
    expect(dateElement2).toBeInTheDocument();
    expect(priceElement2).toBeInTheDocument();
  });

  it('should display "No data available" if prices array is empty', () => {
    render(<PriceHistoryCard prices={[]} />);
    const noDataElement = screen.getByText('No data available');
    expect(noDataElement).toBeInTheDocument();
  });
});
