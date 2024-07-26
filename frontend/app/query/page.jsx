'use client';
import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, query })
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setEmail('');
        setQuery('');
      } else {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  return (
    <section className="mx-auto max-w-[80%] m-8 text-center">
      <div className="m-4">
        <div className="text-2xl font-bold mb-4">Contact Us</div>
        <form className="text-left mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block">Enter your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-md px-4 text-black py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="query" className="block">Ask your query:</label>
            <textarea
              id="query"
              name="query"
              className="border text-black rounded-md px-4 py-2 w-full h-32"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col md:flex-row md:justify-end items-center space-y-4 md:space-y-0 md:space-x-8 bg-gray-900 p-8 text-gray-400">
          <div className="flex items-center space-x-2 md:space-x-4">
            <FaLinkedin className="text-2xl" />
            <a href="https://www.linkedin.com/in/yourprofile" className="hover:underline">LinkedIn</a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <FaInstagram className="text-2xl" />
            <a href="https://www.instagram.com/yourprofile" className="hover:underline">Instagram</a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <FaTwitter className="text-2xl" />
            <a href="https://twitter.com/yourprofile" className="hover:underline">Twitter</a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <FaEnvelope className="text-2xl" />
            <a href="mailto:youremail@example.com" className="hover:underline">youremail@example.com</a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <FaPhone className="text-2xl" />
            <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
