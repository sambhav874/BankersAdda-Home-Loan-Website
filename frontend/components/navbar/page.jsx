"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

import ShoppingCart from './../icons/ShoppingCart';

const Navbar = () => {
  const { data: session, status } = useSession();
  
  const userData = session?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 768);

      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 768);
        setIsSidebarOpen(false);
        setIsDropdownOpen(false);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white shadow-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="hidden md:flex space-x-6">
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
        <Link
              href="/query"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              Contact Us 
            </Link>
        
      </div>

      <div className="flex items-center space-x-4">
        {status === "authenticated" ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-700 hover:text-indigo-500 font-medium"
            >
              {userName}
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full right-0 mt-2 w-40 bg-white border-gray-200 rounded-lg shadow-lg z-10">
                <li>
                  <button
                    onClick={() => signOut()}
                    className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <Link
                    href={'/profile'}
                    className="block w-full py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Link href="/login" className="text-gray-700 hover:text-indigo-500 font-medium">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Sidebar Button */}
      <button
        className="md:hidden text-gray-700 hover:text-indigo-500 font-medium"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg space-y-4 relative w-4/5 max-w-sm mx-auto">
            <button
              onClick={toggleSidebar}
              className="absolute top-2 right-2 text-gray-700 hover:text-indigo-500 font-medium"
            >
              &times;
            </button>
            <Link
              href="/"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              Blogs
            </Link>
            <Link
              href="/loan-apply"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              Apply Loan
            </Link>
            <Link
              href="/tools/emi-calculator"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              EMI Calculator
            </Link>
            <Link
              href="/query"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            
            <Link
              href="/login"
              className="block text-gray-700 hover:text-indigo-500 font-medium"
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
