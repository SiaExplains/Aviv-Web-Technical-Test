import { useEffect, useState } from 'react';
import ListingCard from '@components/ListingCard';
import ListingForm from '@components/ListingForm';

import styles from './listing-form.module.scss';

import { fetchListings } from '@/services/listings.service';
import { ListingItem } from '@/types';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const hasListingData = listings && listings.length > 0;

  useEffect(() => {
    const fetchListingsData = async () => {
      const data = await fetchListings();
      setListings(data);
    };

    fetchListingsData();
  }, []);

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>
          {hasListingData &&
            listings.map((prop: ListingItem) => (
              <ListingCard key={prop.id} {...prop} />
            ))}
          {!hasListingData && (
            <>
              There is no listing added yet. please use the form to create one
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Listings;
