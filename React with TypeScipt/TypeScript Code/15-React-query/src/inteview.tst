
Problems:

Duplicate API Calls

No Caching

Manual Loading State

Manual Error State

Refetch Logic Difficult


React Query

React Query (TanStack Query) is a data-fetching and state-management library for managing server state. It provides caching, automatic refetching, synchronization, loading states, and mutation handling with minimal code.

useQuery is used to fetch, cache, synchronize, and manage asynchronous server data.

Query keys uniquely identify cached queries in React Query.

useMutation is used for creating, updating, or deleting server-side data.


Why Companies Love React Query

Because it automatically gives:

Caching

Background Refetching

Retries

Loading State

Error State

Stale Data Management

Pagination Support



Advanced Interview Questions
Why React Query instead of useEffect?

React Query provides caching, automatic background refetching, retries, stale data management, and simplified loading/error handling, which reduces boilerplate compared to useEffect.

What is a Query Key?

A query key uniquely identifies a query in the cache and determines when data should be reused or refetched.


Industry Folder Structure

src

api/
  axios.ts

services/
  weatherService.ts

hooks/
  useWeather.ts

types/
  weather.ts

components/
  WeatherCard.tsx

App.tsx


