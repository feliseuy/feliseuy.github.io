
// PersonalBlog.jsx
import React from "react";

export default function PersonalBlog() {
  const posts = [
    { id: 1, title: "Whatsup", content: "Hey there" },
    { id: 2, title: "Howdy", content: "stuff and stuff!" },
    // add more
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">My Personal blog!</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
