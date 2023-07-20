import { render } from '@testing-library/react';

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
    render(<ListingCard {...mockListingItem} />);
  });
});
