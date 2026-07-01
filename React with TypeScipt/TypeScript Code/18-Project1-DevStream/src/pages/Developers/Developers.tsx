import {
  useGetDevelopersBySearchQuery,
  useGetDevelopersQuery,
} from "../../services/developerApi";

import DeveloperCard from "../../components/developers/DeveloperCard";

import { Loader, ErrorState, EmptyState } from "../../components/common";
import DeveloperSearch from "../../components/developers/DeveloperSearch";
import { useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import DeveloperSkeleton from "../../components/common/Skeleton/DeveloperSkeleton";

function Developers() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const isSearching = debouncedSearch.trim() !== "";
  const {
    data: developers,
    isLoading,
    error,
  } = useGetDevelopersQuery(undefined, {
    skip: isSearching,
  });

  const {
    data: searchResults,
    isFetching,
    error: searchError,
  } = useGetDevelopersBySearchQuery(debouncedSearch, {
    skip: !isSearching,
  });

  // const data = isSearching ? searchResults : developers;
  const data=useMemo(()=>{
    return isSearching ? searchResults : developers;
  }, [isSearching, searchResults, developers])

  const currentError = isSearching ? searchError : error;

  const loading = isSearching ? isFetching : isLoading;

  if (isLoading) {
    return <DeveloperSkeleton/>;
  }

  if (error) {
    return <ErrorState message="Failed to load developers." />;
  }

  if (!data?.users.length) {
    return <EmptyState message="No developers found." />;
  }

  return (
    <section>
      <h1>Developers</h1>
      <DeveloperSearch value={search} onChange={setSearch} />

      {data.users.map((developer) => (
        <DeveloperCard key={developer.id} developer={developer} />
      ))}
    </section>
  );
}

export default Developers;


// Final Searching Achitecture

// Developers Page

// │

// ├── Search State

// ├── Debounce

// ├── RTK Query

// ├── Loading

// ├── Error

// └── Render

//         │

//         ▼

// DeveloperSearch

// ↓

// Input Only

// ────────────

// DeveloperCard

// ↓

// Display Only