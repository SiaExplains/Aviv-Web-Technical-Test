import Joi from 'joi';

const listingSchema = Joi.object({
  name: Joi.string().required(),
  postal_address: Joi.object({
    street_address: Joi.string(),
    postal_code: Joi.string(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  }),
  description: Joi.string(),
  building_type: Joi.string().valid('APARTMENT', 'STUDIO', 'HOUSE').required(),
  latest_price_eur: Joi.number().min(1).required(),
  surface_area_m2: Joi.number().min(0).required(),
  rooms_count: Joi.number().min(1).required(),
  bedrooms_count: Joi.number()
    .min(0)
    .max(Joi.ref('rooms_count')) // I think bedrooms_count must be smaller or equal to rooms_count
    .required(),
  contact_phone_number: Joi.string().required(),
});

export default listingSchema;
