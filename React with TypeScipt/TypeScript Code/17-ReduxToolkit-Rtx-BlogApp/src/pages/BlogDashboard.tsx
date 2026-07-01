import BlogForm from "../components/BlogForm";

import BlogList from "../components/BlogList";

import { useGetBlogsQuery } from "../services/blogApi";

function BlogDashboard() {
  const { data, isLoading, error,} = useGetBlogsQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error</h1>;

  return (
    <>
      <BlogForm />

      <BlogList blogs={data ?? []} />
    </>
  );
}

export default BlogDashboard;
