import React from 'react';

const BlogPage = () => {
  const posts = [
    {
      title: "My First Semester at Harvard",
      date: "December 2023",
      preview: "Reflecting on my experiences in CS50 and life as a freshman..."
    },
    {
      title: "Getting Started with Web Development",
      date: "November 2023",
      preview: "My journey learning HTML, CSS, and JavaScript..."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Blog</h2>
      <div className="grid gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-600">{post.preview}</p>
            <button className="mt-4 text-pink-600 hover:text-pink-700 font-medium">
              Read more →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
