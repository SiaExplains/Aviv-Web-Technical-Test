import styles from './price-history-card.module.scss';

import { PriceInfo } from '@/types';

export type PriceHistoryCardProps = {
  prices: PriceInfo[] | [];
};

const PriceHistoryCard = ({ prices }: PriceHistoryCardProps) => {
  const hasPriceData = prices && prices.length > 0;
  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          {hasPriceData &&
            prices.map((price, index) => (
              <tr key={index}>
                <td>
                  {new Date(price.created_date).toLocaleDateString('en-US')}
                </td>
                <td>{price.price_eur}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
