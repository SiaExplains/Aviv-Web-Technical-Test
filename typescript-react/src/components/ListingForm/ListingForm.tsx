import { ChangeEvent, FormEvent, useState } from 'react';
import { ValidationError } from 'joi';

import styles from './listing-form.module.scss';

import listingSchema from '@/schemas';
import { createListing } from '@/services/listings.service';
import { BuildingType } from '@/types';
import { ListingItemCreation } from '@/types/ListingItem';

const createEmptyRecord = () => ({
  name: '',
  postal_address: {
    street_address: '',
    postal_code: '',
    city: '',
    country: '',
  },
  description: '',
  building_type: BuildingType.Apartment,
  latest_price_eur: 0,
  surface_area_m2: 0,
  rooms_count: 0,
  bedrooms_count: 0,
  contact_phone_number: '',
});

type ListingFormProps = {
  onSaveProperty: () => void;
};
const ListingForm = ({ onSaveProperty }: ListingFormProps) => {
  const [formState, setFormState] = useState<ListingItemCreation>(
    createEmptyRecord(),
  );

  const onSubmitListingDataHandler = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    // Validate the form data using Joi
    const { error, value } = listingSchema.validate(formState, {
      abortEarly: false, // Return all validation errors, not just the first one
    });

    if (error) {
      // Handle validation errors, for example, log them or display them to the user
      if (error instanceof ValidationError) {
        const validationErrors = error.details.map((detail) => detail.message);
        console.error('Validation errors:', validationErrors);
      }
      return;
    }

    await createListing(value);
    setFormState(createEmptyRecord());

    onSaveProperty();
  };

  const onInputChangeHandler = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    // Check if the name includes a dot (.)
    if (name.includes('.')) {
      const [outerField, innerField] = name.split('.');
      setFormState((prevState: any) => ({
        ...prevState,
        [outerField]: {
          ...prevState[outerField],
          [innerField]: value,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <form
      className={styles['listing-form']}
      onSubmit={(event: FormEvent<HTMLFormElement>) =>
        onSubmitListingDataHandler(event)
      }
    >
      <div className={styles['listing-form__card']}>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Name:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="name"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.name}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Price:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="latest_price_eur"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.latest_price_eur}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">
            Area m<sup>2</sup>:
          </label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="surface_area_m2"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.surface_area_m2}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Room Count:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="rooms_count"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.rooms_count}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Bedroom Count:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="bedrooms_count"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.bedrooms_count}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">Country:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="postal_address.country"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.postal_address.country}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">City:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="postal_address.city"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.postal_address.city}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">Postal Code:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="postal_address.postal_code"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.postal_address.postal_code}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="street_address">Street:</label>
          <input
            type="text"
            className={styles['listing-form__input-text']}
            name="postal_address.street_address"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.postal_address.street_address}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="building_type">Building type:</label>
          <select
            name="building_type"
            className={styles['listing-form__select']}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.building_type}
          >
            <option value="APARTMENT">Apartment</option>
            <option value="STUDIO">Studio</option>
            <option value="HOUSE">House</option>
          </select>
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Description:</label>
          <textarea
            className={styles['listing-form__input-text']}
            name="description"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.description}
          />
        </div>
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Phone Number:</label>
          <input
            type="text"
            placeholder="+49 15734589750"
            className={styles['listing-form__input-text']}
            name="contact_phone_number"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            value={formState.contact_phone_number}
          />
        </div>
        <button
          type="submit"
          className={styles['listing-form__button--submit']}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
