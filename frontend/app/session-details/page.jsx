// SessionDetails.js
'use client'

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SessionDetails = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    // Redirect to login page if session is not found (client-side redirection)
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
    return <div>Loading...</div>; // Placeholder during redirection
  }

  const { user } = session;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Session Details</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <p className="text-center text-xl font-semibold text-gray-700">User Information</p>
            <p className="mt-2 text-center text-lg text-gray-600">Name: {user.name}</p>
            <p className="mt-2 text-center text-lg text-gray-600">Email: {user.email}</p>
            {/* Add other user information as needed */}
          </div>
          <div className="text-center mt-4">
            <Link href="/" className='text-blue-500'>
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
