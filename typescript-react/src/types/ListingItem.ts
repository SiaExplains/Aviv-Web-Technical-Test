export enum BuildingType {
    // eslint-disable-next-line no-unused-vars
    Studio = 'STUDIO',
    // eslint-disable-next-line no-unused-vars
    Apartment = 'APARTMENT',
    // eslint-disable-next-line no-unused-vars
    House = 'House',
  }

  export type PostalAddress = {
    street_address: string;
    postal_code: string;
    city: string;
    country: string;
  };

  export type PriceInfo = {
    created_date: Date;
    price_eur: number;
  };

  export type ListingItem = {
    id: number;
    created_date: Date;
    updated_date: Date;
    name: string;
    price: PriceInfo;
    postal_address: PostalAddress;
    rooms_count: number;
    bedrooms_count: number;
    surface_area_m2: number;
    description: string;
    building_type: BuildingType;
    contact_phone_number: string;
  };

  export type ListingItemCreation = Omit<
    ListingItem,
    'price' | 'id' | 'created_date' | 'updated_date'
  > & {
    latest_price_eur: number;
  };
