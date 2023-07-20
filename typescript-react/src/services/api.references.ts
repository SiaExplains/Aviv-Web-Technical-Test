export const LISTINGS_ENDPOINTS = {
  getAll: () => 'listings',
  create: () => `listings`,
  getPrices: (id: string) => `listings/${id}/prices`,
};
