'use client';
import React, { useState, useEffect } from 'react';

const BlogDetailPage = ({ params }) => {
  const [blog, setBlog] = useState(null); // Use null to represent the uninitialized state
  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs?_id=${id}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        const data = await response.json();
        // If data is an array, access the first item
        setBlog(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error(error);
        // Handle errors here, e.g., show an error message
      }
    };
    
    fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center text-gray-500">Loading...</div>; // Display loading message while fetching

  const formattedDate = new Date(blog.date).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg mb-6" />
        )}
        <div className="mb-4">
          <p className="text-gray-600 text-sm">Posted on <span className="font-semibold">{formattedDate}</span></p>
          <p className="text-gray-600 text-sm">Posted by <span className="font-semibold">{blog.postedBy}</span></p>
        </div>
        <div className="whitespace-pre-line text-gray-800">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
