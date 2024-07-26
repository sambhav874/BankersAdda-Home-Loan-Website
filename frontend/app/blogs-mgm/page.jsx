'use client';
import React, { useState, useEffect } from 'react';
import EditableImage from '../../components/layout/EditableImage'; // Adjust the path as needed
import AdminTabs from '@/components/layout/AdminTabs';
import { useProfile } from '@/components/useProfile';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', postedBy: '', image: '' });
  const [editBlog, setEditBlog] = useState(null);
  const [image, setImage] = useState('');
  const { loading, data } = useProfile();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = await fetch('/api/blogs');
    const data = await response.json();
    setBlogs(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editBlog) {
      setEditBlog({ ...editBlog, [name]: value });
    } else {
      setNewBlog({ ...newBlog, [name]: value });
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newBlog, image }),
    });
    setNewBlog({ title: '', content: '', postedBy: '', image: '' });
    setImage('');
    fetchBlogs();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    await fetch(`/api/blogs?_id=${editBlog._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...editBlog, image }),
    });
    setEditBlog(null);
    setImage('');
    fetchBlogs();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/blogs?_id=${id}`, { method: 'DELETE' });
    fetchBlogs();
  };

  return (
    <>
      <AdminTabs isAdmin={data?.admin} />
      <div className="p-6 max-w-6xl mx-auto m-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog Management</h1>

        <form onSubmit={editBlog ? handleEdit : handleCreate} className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">{editBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
          <div className="mb-6">
            <input
              type="text"
              name="title"
              value={editBlog ? editBlog.title : newBlog.title}
              onChange={handleChange}
              placeholder="Blog Title"
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="postedBy"
              value={editBlog ? editBlog.postedBy : newBlog.postedBy}
              onChange={handleChange}
              placeholder="Posted By"
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-xs">
              <EditableImage link={image} setLink={setImage} />
            </div>
          </div>
          <div className="mb-6">
            <textarea
              name="content"
              value={editBlog ? editBlog.content : newBlog.content}
              onChange={handleChange}
              placeholder="Blog Content"
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="8"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
            >
              {editBlog ? 'Update Blog' : 'Create Blog'}
            </button>
          </div>
        </form>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Existing Blogs</h2>
          <ul className="space-y-6">
            {blogs.map((blog) => (
              <li key={blog._id} className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                )}
                <p className="text-white font-bold mb-2">Posted by <span className="font-semibold">{blog.postedBy}</span></p>
                <p className="text-white mb-2">{new Date(blog.date).toLocaleDateString()}</p>
                <p className="text-gray-100">{blog.content}</p>
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    onClick={() => setEditBlog(blog)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
