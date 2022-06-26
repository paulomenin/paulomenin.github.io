# Backends for Frontends

---

## Agenda

- Application evolution
- Features
- Pros
- Challenges
- Example

---

## Features

#### A BFF

- Manage calls to other microservices
- Prepare the response in the format the frontend expects, avoiding adding complexity to the frontend
- Handle errors e degrades the response in case a service is not available

|--

#### A BFF

- Can be used for SSR (Server-Side Rendering)
- Can simplify caching
- A BFF never communicates with other BFF

---

## Pros

#### Coupled with a specific user experience

- Trending to be small and simple
- Eases the maintenance
- Hides the microservices complexity that uses many protocols from the frontend

|--

## Pros

#### Normally the same team develops the Frontend and the BFF

- Eases adaptation
- Create an opportunity to synchronize deploys simplifying the process

---

## Challenges

- Depending on how similar the frontends are, it can lead to code duplication.
- Adds a single point of failure to the Frontend.
- Grow the number of services and components rising the deploy complexity, this can be mitigated with good DevOps practices.

---

## References

https://samnewman.io/patterns/architectural/bff/
https://philcalcado.com/2015/09/18/the_back_end_for_front_end_pattern_bff.html
