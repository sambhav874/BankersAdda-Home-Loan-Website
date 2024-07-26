'use client';
import React, { useState, useEffect } from 'react';

const BlogDetailPage = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs?_id=${id}`);
        if (!response.ok) throw new Error('Failed to fetch blog');
        const data = await response.json();
        setBlog(Array.isArray(data) ? data[0] : data);
      } catch (error) {
        console.error(error);
        // Handle errors here, e.g., show an error message
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center text-gray-500">Loading...</div>;

  const formattedDate = new Date(blog.date).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-800 py-10">
      <div className="max-w-5xl mx-auto bg-gray-900 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-white hover:text-primary transition-colors duration-300">{blog.title}</h1>
        {blog.image && (
          <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg mb-6" />
        )}
        <div className="m-4">
          <p className="text-gray-500 text-xl hover:text-gray-300 transition-colors duration-300">
            Posted on <span className="font-semibold">{formattedDate}</span>
          </p>
          <p className="text-gray-500 text-xl hover:text-gray-300 transition-colors duration-300">
            Posted by <span className="font-semibold">{blog.postedBy}</span>
          </p>
        </div>
        <div className="whitespace-pre-line text-gray-800 text-md bg-gray-300 rounded-lg p-4 m-4 hover:shadow-lg  transition-shadow hover:text-gray-500 duration-300">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
