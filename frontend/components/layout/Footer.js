'use client';
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg p-6 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo or Branding */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-gray-700 hover:text-indigo-500 font-bold text-2xl mb-2">
            YourLogo
          </Link>
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Banker's Adda. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-500 font-medium">
            Home
          </Link>
          <Link href="/about-us" className="text-gray-700 hover:text-indigo-500 font-medium">
            About Us
          </Link>
          <Link href="/blogs" className="text-gray-700 hover:text-indigo-500 font-medium">
            Blogs
          </Link>
          <Link href="/loan-apply" className="text-gray-700 hover:text-indigo-500 font-medium">
            Apply Loan
          </Link>
          <Link href="/tools/emi-calculator" className="text-gray-700 hover:text-indigo-500 font-medium">
            EMI Calculator
          </Link>
          <Link href="/query" className="text-gray-700 hover:text-indigo-500 font-medium">
            Contact Us
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="text-gray-500 hover:text-indigo-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.326A1.326 1.326 0 0 0 0 1.325v21.351A1.326 1.326 0 0 0 1.325 24h11.495V14.708h-3.125v-3.618h3.125V8.387c0-3.1 1.891-4.787 4.65-4.787 1.325 0 2.462.099 2.793.143v3.24h-1.918c-1.503 0-1.794.715-1.794 1.76v2.308h3.588l-.468 3.618h-3.12V24h6.118A1.326 1.326 0 0 0 24 22.675V1.326A1.326 1.326 0 0 0 22.675 0z"/>
            </svg>
          </a>
          <a href="https://twitter.com" className="text-gray-500 hover:text-indigo-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.932 4.932 0 0 0 2.165-2.724 9.964 9.964 0 0 1-3.127 1.184 4.918 4.918 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.15a4.935 4.935 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.924 4.924 0 0 0 4.604 3.419 9.874 9.874 0 0 1-6.1 2.104c-.395 0-.79-.022-1.175-.066a13.944 13.944 0 0 0 7.548 2.21c9.054 0 14.01-7.496 14.01-13.986 0-.21-.005-.42-.014-.63a10.025 10.025 0 0 0 2.46-2.548l-.047-.02z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" className="text-gray-500 hover:text-indigo-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.78 24 1.77 24h20.46c.97 0 1.77-.78 1.77-1.75V1.75C24 .78 23.22 0 22.23 0zm-6.92 20.453h-3.81v-6.357c0-1.516-.028-3.468-2.114-3.468-2.115 0-2.44 1.651-2.44 3.354v6.471h-3.81V9.556h3.658v1.486h.052c.51-.963 1.759-1.973 3.618-1.973 3.866 0 4.58 2.544 4.58 5.85v5.533h-.002zM5.65 8.07a2.213 2.213 0 1 1-.001-4.426 2.213 2.213 0 0 1 .001 4.426zm1.905 12.383H3.74V9.556h3.815v10.897h-.002z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
