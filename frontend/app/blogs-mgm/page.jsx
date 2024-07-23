'use client';
import React, { useState, useEffect } from 'react';
import EditableImage from '../../components/layout/EditableImage'; // Adjust the path as needed

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', postedBy: '', image: '' });
  const [editBlog, setEditBlog] = useState(null);
  const [image, setImage] = useState('');

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
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog Management</h1>

      <form onSubmit={editBlog ? handleEdit : handleCreate} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{editBlog ? 'Edit Blog' : 'Create New Blog'}</h2>
        <input
          type="text"
          name="title"
          value={editBlog ? editBlog.title : newBlog.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <input
          type="text"
          name="postedBy"
          value={editBlog ? editBlog.postedBy : newBlog.postedBy}
          onChange={handleChange}
          placeholder="Posted By"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        <EditableImage link={image} setLink={setImage} />
        <textarea
          name="content"
          value={editBlog ? editBlog.content : newBlog.content}
          onChange={handleChange}
          placeholder="Blog Content"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="6"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {editBlog ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Blogs</h2>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog._id} className="bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <p className="text-gray-600 mb-2">Posted by {blog.postedBy}</p>
              <p className="text-gray-600 mb-2">{new Date(blog.date).toLocaleDateString()}</p>
              <p>{blog.content}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => setEditBlog(blog)}
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPage;
