import BlogList from "../components/BlogList";
import { useGetBlogsQuery,} from "../services/blogApi";

function BlogPage() {
  const {
    data,
    isLoading,
    error,
  } = useGetBlogsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <h1>
        Something went wrong
      </h1>
    );
  }

  return (
    <BlogList blogs={data ?? []} />
  );
}

export default BlogPage;


// Hidden Magic

// Behind one line

// useGetBlogsQuery()

// RTK Query secretly performs:

// Dispatch

// ↓

// API Call

// ↓

// Reducer Update

// ↓

// Cache Update

// ↓

// Subscription

// ↓

// Selector

// ↓

// Re-render

// This is why RTK Query is considered one of the biggest productivity improvements in Redux Toolkit.








// Interview Questions
// Why don't we use useEffect with RTK Query?

// Answer:

// Because the generated query hook automatically triggers the API request when the component mounts and manages its lifecycle internally.

// Why don't we call dispatch()?

// Answer:

// The generated hook dispatches the required actions internally. Developers only consume the returned state.

// Why is data typed as Blog[] | undefined?

// Answer:

// Before the request completes, there is no data available. Once the request succeeds, data contains the fetched array of blogs.

// Why use data ?? []?

// Answer:

// To ensure child components always receive an array, preventing runtime errors and satisfying TypeScript's expected prop type.