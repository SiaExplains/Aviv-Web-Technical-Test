import { LISTINGS_ENDPOINTS } from './api.references';
import apiService from './facade';

import { ListingItemCreation } from '@/types/ListingItem';

export const fetchListings = async () => {
  try {
    const response = await apiService.get(LISTINGS_ENDPOINTS.getAll());
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch listings.');
  }
};

export const createListing = async (data: ListingItemCreation) => {
  try {
    const response = await apiService.post(LISTINGS_ENDPOINTS.create(), data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create a listing');
  }
};

export const fetchAllPriceHistory = async (propertyId: string) => {
  try {
    const response = await apiService.get(
      LISTINGS_ENDPOINTS.getPrices(propertyId),
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch prices');
  }
};
