'use client';

import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginPromise = signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    const result = await toast.promise(loginPromise, {
      loading: 'Logging in...',
      success: 'Logged in successfully!',
      error: 'Login failed. Please try again.',
    });

    setLoading(false);
    if (result.ok) {
      window.location.href = '/'; // Redirect to home or dashboard after successful login
    } else {
      toast.error(result.error || 'Invalid username or password');
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);

    const loginPromise = signIn('google', {
      redirect: false,
    });

    const result = await toast.promise(loginPromise, {
      loading: 'Logging in...',
      success: 'Logged in successfully!',
      error: 'Login failed. Please try again.',
    });

    setLoading(false);
    if (result.ok) {
      window.location.href = '/'; // Redirect to home or dashboard after successful login
    } else {
      toast.error(result.error || 'Google login failed');
    }
  };

  if (session) {
    // Redirect if session exists
    return <p>You are already logged in.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to Your Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={handleGoogleLogin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Login with Google
          </button>
        </div>
        <div className='font-bold'>New here? <Link href={'/register'} className='hover:bg-purple-600'> Create an account </Link></div>
      </div>
    </div>
  );
};

export default Login;
