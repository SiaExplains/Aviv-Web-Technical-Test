import { useEffect, useState } from 'react';
import PricesHistoryCard from '@components/PriceHistoryCard';
import { Link, redirect, useLocation } from 'react-router-dom';

import styles from './prices-history.module.scss';

import { fetchAllPriceHistory } from '@/services/listings.service';

const PricesHistory = () => {
  const [prices, setPrices] = useState([]);
  const hasPriceHistory = prices && prices.length > 0;
  const location = useLocation();

  useEffect(() => {
    const fetchListingsData = async () => {
      const pathSlugs = location.pathname.split('/');
      if (pathSlugs.length < 3) {
        redirect('/404');
      }
      const [, id] = pathSlugs;
      const data = await fetchAllPriceHistory(id);
      setPrices(data);
    };

    fetchListingsData();
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      {hasPriceHistory && <PricesHistoryCard prices={prices} />}
      {!hasPriceHistory && <p>There is no price added at the moment!</p>}

      <Link to="/" className={styles['link']}>
        &larr; Back Home
      </Link>
    </div>
  );
};
export default PricesHistory;
