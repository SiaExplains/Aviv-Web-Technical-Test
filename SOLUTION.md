# AVIV technical test solution

You can use this file to write down your assumptions and list the missing features or technical revamp that should
be achieved with your implementation.

## Notes

Write here notes about your implementation choices and assumptions.

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**

  BackEend:

  - AutoMapper for converting DTOs
  - For Generic & Well-configureed Validation instead of checking value by if condition: if(item.postalcode == null)
  - Decouple Prices endpoints ito a different controller (More atomic - SRP)
  - Using Authentication + Authorization and secure the accessing api behind a tocket based approch (e.g: JWT-token, auth0 etc.)
  - Paginating data for GetListings & GetPriceHistory (becuase it won't good for huge amount of data)
    - Scrolling Lazy fetching data
    - Pagniation
    - etc.
  - Caching data & also the Context
  - Storing logs into a centeral logging system (loggly, etc.)
  - Introduce more unit tests than existing ones
  - Make some cross cutting concerns as a separate service (if we could clearly deine their responsibility they might be a new microservice)
  - Instead of accessing database directly in controller it would be better to have Repositoties and use Adapter pattern here, becuase in future we might migrate from postresql to another database, or we replace the EF with another types of ORM.

- Fron-End:

  - Introduce more unit tests than existing ones
  - Introduce E2E tests, visual test like cypress
  - Introduce i18n to app and make it more localized for different locales & countries
  - 404 page implementation
  - Handle invalid id in Price History Page => might redirect to the 404
  - Decouple Listing page into two pages:
    - (form + listing)which would be accessiable only for admins, owner, clients
    - (only listing) that avilable for public vistor users
  - Using SSR for public listing page for implementing better technical SEO (better Web Core Web Vitals)
  - Performance Improvements (Font-Subseting, SSR, Lazing Loading, useMemo, etc.)
  - Add caching for non frequent changing data
  - Add a Global & centeral context for keeping application state (single source of truth) - depends on complexity: AppContext or Redux
    General:
  - A image & slider of images (This is much better to see the property before buy or rent :D)
  - Bookmark feature would makes users life easier while checking our app

- **How would you deploy your implementation?**
  - I would configure a fully automated CI/CD pipeline based on:
    - TravisCI, GitHub, AWS EC2, AWS ECS
    - I'd like to have this pipline only for stage & main/master branch.
    - We will have trigger on TravisCI which listening to GiHub for a new change on main/master + stage branches, then it will cofigure the container and ship into AWS
    - So by this way if we push a change on stage, main/master branches it would shipping it automatically
    - To maintain our infrastrucre we can use terraform which is a code as infrastructure tool.
- **If you had to implement the same application from scratch, what would you do differently?**

  - Consider Nextjs on the top of React (SSR, Performance, not much opionated framework, easily introduce pages & config routings, etc.)
  - Since the historical price data won't change a lot i might use a caching approch to not fetch all data from db each time (redis, etc.)

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

  NB : You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
  on [diagrams.net](https://app.diagrams.net/)
