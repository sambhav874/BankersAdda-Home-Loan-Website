// app/login/page.jsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const loginPromise = new Promise(async (resolve, reject) => {
      try {
        await signInWithPopup(auth, provider);
        resolve();
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(loginPromise, {
      loading: 'Logging in...',
      success: 'Logged in successfully!',
      error: 'Login failed. Please try again.',
    });

    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to Your Account</h2>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
