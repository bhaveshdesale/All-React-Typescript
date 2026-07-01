import BlogCard from "./BlogCard";
import type { Blog } from "../types/blog";

interface BlogListProps {
  blogs: Blog[];
}

function BlogList({ blogs }: BlogListProps) {
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
        />
      ))}
    </>
  );
}

export default BlogList;