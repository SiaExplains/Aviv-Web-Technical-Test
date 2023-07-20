import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ListingCard from './ListingCard';

import { BuildingType, ListingItem } from '@/types';

const mockListingItem: ListingItem = {
  id: 1,
  created_date: new Date(),
  updated_date: new Date(),
  name: 'Sample Listing',
  price: {
    created_date: new Date(),
    price_eur: 1000,
  },
  postal_address: {
    street_address: '123 Main St',
    postal_code: '12345',
    city: 'Example City',
    country: 'DE',
  },
  rooms_count: 3,
  bedrooms_count: 2,
  surface_area_m2: 120,
  description: 'This is a sample description.',
  building_type: BuildingType.Apartment,
  contact_phone_number: '+1234567890',
};

describe('<ListingCard /> test suite', () => {
  it('Should render the <ListingCard /> component', () => {
    render(
      <MemoryRouter>
        <ListingCard {...mockListingItem} />
      </MemoryRouter>,
    );
  });

  it('should render listing details correctly', () => {
    render(
      <MemoryRouter>
        <ListingCard {...mockListingItem} />
      </MemoryRouter>,
    );

    // Check if all the information is rendered correctly
    expect(screen.getByText('Sample Listing')).toBeInTheDocument();
    expect(screen.getByText('1000 €')).toBeInTheDocument();
    expect(
      screen.getByText('123 Main St, 12345, Example City'),
    ).toBeInTheDocument();
    expect(screen.getByText('3 rooms')).toBeInTheDocument();
    expect(screen.getByText('2 Bedroom')).toBeInTheDocument();
    expect(screen.getByText('120m²')).toBeInTheDocument();
    expect(
      screen.getByText('This is a sample description.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Ref: 1')).toBeInTheDocument();
  });

  it('should render formatted dates correctly', () => {
    render(
      <MemoryRouter>
        <ListingCard {...mockListingItem} />
      </MemoryRouter>,
    );

    // Check if dates are formatted correctly
    expect(
      screen.getByText(
        new Date(mockListingItem.created_date).toLocaleDateString('en-US'),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        new Date(mockListingItem.updated_date).toLocaleDateString('en-US'),
      ),
    ).toBeInTheDocument();
  });

  it('should render a link to prices history page', () => {
    render(
      <MemoryRouter>
        <ListingCard {...mockListingItem} />
      </MemoryRouter>,
    );

    // Check if the link is rendered correctly
    const linkElement = screen.getByRole('link', { name: /see history →/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/1/prices');
  });
});
