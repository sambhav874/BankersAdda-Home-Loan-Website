// SessionDetails.js

'use client';
import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Correct import statement
import Link from 'next/link';

const SessionDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if no token is found
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded); // Set decoded user details from token
    } catch (error) {
      console.error('Error decoding token:', error);
      window.location.href = '/login'; // Handle token decoding errors
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { name, email, loginMethod } = user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Session Details</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <p className="text-center text-xl font-semibold text-gray-700">User Information</p>
            <p className="mt-2 text-center text-lg text-gray-600">Name: {name}</p>
            <p className="mt-2 text-center text-lg text-gray-600">Email: {email}</p>
            <p className="mt-2 text-center text-lg text-gray-600">Login Method: {loginMethod}</p>
            {/* Add other user information as needed */}
          </div>
          <div className="text-center mt-4">
            <Link href="/">
              <a className="text-indigo-600 hover:text-indigo-700">Go to Home Page</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
