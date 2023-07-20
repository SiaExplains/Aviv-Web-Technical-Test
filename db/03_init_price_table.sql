CREATE TABLE IF NOT EXISTS public.pricehistory
(
    id                   serial           primary key,
    price                double precision not null,
    created_date         timestamp,
    listing_id           int              not null references public.listing(id)
);
