// ExerciseBlog.jsx
import React from "react";

export default function ExerciseBlog() {
  const posts = [
    { id: 1, title: "Reason #1: It boosts your mood", content: "Exercise releases endorphins..." },
    { id: 2, title: "Reason #2: Increases energy", content: "Regular activity improves stamina..." },
    // add more
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">1000 Reasons to Exercise</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
