import type { Blog } from "../types/blog";
import { useState } from "react";
import EditBlogForm from "./EditBlogs";
import { useDeleteBlogMutation } from "../services/blogApi";

interface BlogCardProps {
  blog: Blog;
}

function BlogCard({ blog }: BlogCardProps) {
  const [editing, setEditing] = useState(false);
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this blog?");

    if (!confirmDelete) return;

    await deleteBlog(blog.id);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      <h2>{blog.title}</h2>

      <p>{blog.body}</p>

      <small>User ID : {blog.userId}</small>
      <button onClick={() => setEditing(true)}>
        {editing ? (
          <EditBlogForm blog={blog} onClose={() => setEditing(false)} />
        ) : (
          <>
            <h2>{blog.title}</h2>

            <p>{blog.body}</p>
          </>
        )}
        Edit
      </button>
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}

export default BlogCard;
