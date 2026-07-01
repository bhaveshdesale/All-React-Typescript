import type { Blog } from "../types/blog";

interface BlogCardProps {
  blog: Blog;
}

function BlogCard({
  blog,
}: BlogCardProps) {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>

      <p>{blog.body}</p>

      <small>
        Author ID: {blog.userId}
      </small>
    </div>
  );
}

export default BlogCard;