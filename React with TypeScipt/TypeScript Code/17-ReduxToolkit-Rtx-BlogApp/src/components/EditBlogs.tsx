import { useState } from "react";

import { useUpdateBlogMutation } from "../services/blogApi";

import type { Blog } from "../types/blog";

interface EditBlogFormProps {
  blog: Blog;
  onClose: () => void;
}

function EditBlogForm({ blog, onClose }: EditBlogFormProps) {
  const [title, setTitle] = useState(blog.title);

  const [body, setBody] = useState(blog.body);

  const [updateBlog, { isLoading }] = useUpdateBlogMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateBlog({
      id: blog.id,

      title,

      body,

      userId: blog.userId,
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea value={body} onChange={(e) => setBody(e.target.value)} />

      <button disabled={isLoading}>{isLoading ? "Saving..." : "Save"}</button>
    </form>
  );
}

export default EditBlogForm;
