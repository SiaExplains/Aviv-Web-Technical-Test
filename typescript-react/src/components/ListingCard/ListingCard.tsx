import { Link } from 'react-router-dom';

import styles from './listing-card.module.scss';

import { ListingItem } from '@/types';

type ListingCardProps = ListingItem;

const ListingCard = ({
  id,
  created_date,
  updated_date,
  name,
  price,
  postal_address,
  rooms_count,
  bedrooms_count,
  surface_area_m2,
  description,
  building_type,
  contact_phone_number,
}: ListingCardProps) => {
  const { price_eur } = price;
  const { postal_code, city, street_address } = postal_address;

  return (
    <article className={styles['listing-card']}>
      <h1>{name}</h1>
      <span className={styles['listing-card__price']}>{price_eur} &euro;</span>
      <ul className={styles['listing-card__properties']}>
        <li className={styles['listing-card__properties-item']}>
          {building_type}
        </li>
        <li className={styles['listing-card__properties-item']}>
          {surface_area_m2}m<sup>2</sup>
        </li>
        <li className={styles['listing-card__properties-item']}>
          {rooms_count} rooms
        </li>
        <li className={styles['listing-card__properties-item']}>
          {bedrooms_count} Bedroom
        </li>
      </ul>
      <section className={styles['listing-card__address']}>
        <address>
          {street_address}, {postal_code}, {city}
        </address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>{description}</p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          Ref: {id} <br />
          Created at: {new Date(created_date).toLocaleDateString('en-US')}
          <br />
          Last update: {new Date(updated_date).toLocaleDateString('en-US')}
        </p>
        <Link to={`/${id}/prices`} className={styles['listing-card__link']}>
          See history &rarr;
        </Link>
      </div>
    </article>
  );
};

export default ListingCard;

export type { ListingCardProps };
