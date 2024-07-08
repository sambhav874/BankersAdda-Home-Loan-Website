// pages/register.jsx
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);

        try {
            const result = await signIn('email', {
                email,
                password,
                callbackUrl: '/',
            });

            if (result.error) {
                throw new Error('Failed to register');
            }

            setUserCreated(true);
            toast.success('Registered successfully!');
        } catch (error) {
            setError(true);
            toast.error('Registration failed. Please try again.');
        } finally {
            setCreatingUser(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create a New Account</h2>
                </div>
                {userCreated && (
                    <div className="my-8 text-center text-black">
                        User created.<br /> Now you can {' '}
                        <Link href="/login">
                            &raquo; Login
                        </Link>
                    </div>
                )}
                {error && (
                    <div className="my-8 text-center text-black">
                        An error has occurred.<br /> Please try again later .
                        <Link href="/login">
                            &raquo; Login
                        </Link>
                    </div>
                )}
                <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={name}
                                disabled={creatingUser}
                                onChange={(ev) => setName(ev.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                disabled={creatingUser}
                                onChange={(ev) => setEmail(ev.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                value={password}
                                disabled={creatingUser}
                                onChange={(ev) => setPassword(ev.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            disabled={creatingUser}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {creatingUser ? 'Creating Account...' : 'Register'}
                        </button>
                    </div>
                </form>
                <button
                    onClick={() => signIn('google')}
                    type="button"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Register with Google
                </button>
                <div className="text-center border-t pt-4 my-4 text-black">
                    Existing Account?{' '}
                    <Link href="/login">
                        Login Here &raquo;
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
