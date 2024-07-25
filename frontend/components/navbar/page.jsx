"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

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
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Banker's Adda
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about-us" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="/blogs" className="text-white hover:text-gray-300">
            Blogs
          </Link>
          <Link href="/loan-apply" className="text-white hover:text-gray-300">
            Apply Loan
          </Link>
          <Link href="/tools/emi-calculator" className="text-white hover:text-gray-300">
            EMI Calculator
          </Link>
          <Link href="/query" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
          <Link href="/why-choose-us" className="text-white hover:text-gray-300">
            Why Choose Us
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {status === "authenticated" ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-white hover:text-gray-300 font-medium"
              >
                {userName}
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-700 rounded-lg shadow-lg z-10">
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-applications"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      My Applications
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          )}

          <button
            className="md:hidden text-white hover:text-gray-300"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg space-y-4 absolute top-16 left-4 right-4">
            <button
              onClick={toggleSidebar}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-500"
            >
              &times;
            </button>
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <Link
              href="/blogs"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              Blogs
            </Link>
            <Link
              href="/loan-apply"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              Apply Loan
            </Link>
            <Link
              href="/tools/emi-calculator"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              EMI Calculator
            </Link>
            <Link
              href="/query"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            <Link
              href="/why-choose-us"
              className="block text-gray-700 hover:text-gray-500 font-medium"
              onClick={handleLinkClick}
            >
              Why Choose Us
            </Link>
            {status === "authenticated" && (
              <>
                <Link
                  href="/profile"
                  className="block text-gray-700 hover:text-gray-500 font-medium"
                  onClick={handleLinkClick}
                >
                  Profile
                </Link>
                <Link
                  href="/my-applications"
                  className="block text-gray-700 hover:text-gray-500 font-medium"
                  onClick={handleLinkClick}
                >
                  My Applications
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-gray-700 hover:text-gray-500 font-medium"
                >
                  Logout
                </button>
              </>
            )}
            {status !== "authenticated" && (
              <Link
                href="/login"
                className="block text-gray-700 hover:text-gray-500 font-medium"
                onClick={handleLinkClick}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
