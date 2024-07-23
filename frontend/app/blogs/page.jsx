'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-white p-4 rounded shadow-md">
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded mb-4" />
            )}
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">Posted on {new Date(blog.date).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2">Posted by {blog.postedBy}</p>
            <p className="mb-4">{blog.content.substring(0, 100)}...</p>
            <Link href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
