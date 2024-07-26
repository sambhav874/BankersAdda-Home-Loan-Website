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
    <div className="p-8 bg-gray-800 min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-200 mb-12 text-center">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog._id} className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200">
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-t-lg mb-4" />
            )}
            <div className="mb-4">
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-2">Posted on {new Date(blog.date).toLocaleDateString()}</p>
              <p className="text-gray-500 text-sm mb-4">Posted by {blog.postedBy}</p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{blog.content.length > 150 ? `${blog.content.substring(0, 150)}...` : blog.content}</p>
            <Link href={`/blogs/${blog._id}`} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
