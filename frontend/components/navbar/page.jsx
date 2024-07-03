'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Optionally redirect or perform additional actions after sign-out
    } catch (error) {
      console.error('Sign out error:', error.message);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">Grow More Loan</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-500 cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 cursor-pointer">
              About us
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-500 cursor-pointer">
              Blogs
            </Link>
            <Link href="/loan-apply" className="text-gray-700 hover:text-blue-500 cursor-pointer">
              Loan Apply
            </Link>
            <div className="relative group">
              <span className="text-gray-700 hover:text-blue-500 cursor-pointer">Tools</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg py-2">
                <Link
                  href="/tools/tool1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Tool 1
                </Link>
                <Link
                  href="/tools/tool2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Tool 2
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500 cursor-pointer">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
                >
                  <span className="mr-2">{user.displayName}</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer w-full text-left"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/register" className="text-gray-700 hover:text-blue-500 cursor-pointer">
                Sign in
              </Link>
            )}
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-gray-700 hover:text-blue-500 cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-500 cursor-pointer">
              About us
            </Link>
            <Link href="/blogs" className="block text-gray-700 hover:text-blue-500 cursor-pointer">
              Blogs
            </Link>
            <Link href="/loan-apply" className="block text-gray-700 hover:text-blue-500 cursor-pointer">
              Loan Apply
            </Link>
            <div className="relative">
              <span className="block text-gray-700 hover:text-blue-500 cursor-pointer">Tools</span>
              <div className="bg-white shadow-lg py-2">
                <Link
                  href="/tools/tool1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Tool 1
                </Link>
                <Link
                  href="/tools/tool2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Tool 2
                </Link>
              </div>
            </div>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-500 cursor-pointer">
              Contact Us
            </Link>
            <Link href="/register" className="block text-gray-700 hover:text-blue-500 cursor-pointer">
              Sign in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
