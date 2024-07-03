'use client'
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../firebase/firebase';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Firebase authentication error:', error.message);
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    // Redirect to login if user is not authenticated
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">User Profile</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <p className="text-center text-xl font-semibold text-gray-700">User Information</p>
            <p className="mt-2 text-center text-lg text-gray-600">Name: {user.displayName}</p>
            <p className="mt-2 text-center text-lg text-gray-600">Email: {user.email}</p>
            <img src={user.photoURL} alt="User Profile" className="mx-auto h-16 w-16 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
