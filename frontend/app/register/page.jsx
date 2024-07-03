// app/register/page.jsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import toast from 'react-hot-toast';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleRegister = async () => {
    setLoading(true);

    const registerPromise = new Promise(async (resolve, reject) => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        // Save user data to MongoDB
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: user.displayName, email: user.email , password: ''}),
        });

        if (!response.ok) {
          throw new Error('Failed to register');
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(registerPromise, {
      loading: 'Registering...',
      success: 'Registered successfully!',
      error: 'Registration failed. Please try again.',
    });

    setLoading(false);
    router.push('/');
  };

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const registerPromise = new Promise(async (resolve, reject) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Send email verification
        await sendEmailVerification(user);

        // Save user data to MongoDB
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
          throw new Error('Failed to register');
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });

    await toast.promise(registerPromise, {
      loading: 'Registering...',
      success: 'Registered successfully! Please check your email to verify your account.',
      error: 'Registration failed. Please try again.',
    });

    setLoading(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register a New Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleEmailRegister}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={handleGoogleRegister}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Register with Google
          </button>
        </div>
        <div className='flex justify-center'>
          <p className=" text-center mx-2  text-gray-600">Existing Account ? </p><Link className='text-black' href={'/login'}> Click here .</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
