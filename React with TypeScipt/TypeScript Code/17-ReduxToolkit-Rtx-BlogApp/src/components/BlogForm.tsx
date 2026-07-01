import { useState } from "react";
import { useCreateBlogMutation } from "../services/blogApi";

function BlogForm() {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    await createBlog({
      title,
      body,
      userId: 1,
    });

    setTitle("");

    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <textarea value={body} onChange={(e) => setBody(e.target.value)} />

      <button disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Blog"}
      </button>
    </form>
  );
}

export default BlogForm;
