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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
    <nav className={`bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-lg ${isLargeScreen ? "flex" : "block"}`}>
      <div className={`container mx-auto px-4 py-4 ${isLargeScreen ? "flex justify-between items-center" : ""}`}>
        <Link href="/" className="text-white text-2xl md:text-3xl font-bold hover:text-yellow-300 transition duration-300 mr-4">
          Banker's Adda
        </Link>

        {isLargeScreen ? (
          <div className="hidden md:flex md:space-x-6 lg:space-x-8">
            <Link href="/" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              Home
            </Link>
            <Link href="/about-us" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              About Us
            </Link>
            <Link href="/blogs" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              Blogs
            </Link>
            <Link href="/loan-apply" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              Apply Loan
            </Link>
            <Link href="/tools/emi-calculator" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              EMI Calculator
            </Link>
            <Link href="/query" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              Contact Us
            </Link>
            <Link href="/why-choose-us" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              Why Choose Us
            </Link>
          </div>
        ) : (
          <>
            <button
              className="md:hidden text-white text-2xl font-bold hover:text-gray-300"
              onClick={toggleSidebar}
            >
              ☰
            </button>
            {isSidebarOpen && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-70 z-50">
                <div className="bg-white p-6 rounded-lg space-y-4 absolute top-16 left-4 right-4 max-w-sm">
                  <button
                    onClick={toggleSidebar}
                    className="absolute top-2 right-2 text-gray-700 hover:text-gray-500 text-2xl"
                  >
                    &times;
                  </button>
                  <Link
                    href="/"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/blogs"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/loan-apply"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    Apply Loan
                  </Link>
                  <Link
                    href="/tools/emi-calculator"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    EMI Calculator
                  </Link>
                  <Link
                    href="/query"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/why-choose-us"
                    className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                    onClick={handleLinkClick}
                  >
                    Why Choose Us
                  </Link>
                  {status === "authenticated" && (
                    <>
                      <button
                        onClick={toggleDropdown}
                        className="block w-full text-gray-700 text-lg font-bold hover:text-gray-500"
                      >
                        {userName}
                      </button>
                      {isDropdownOpen && (
                        <ul className="mt-2 w-full bg-white text-gray-700 rounded-lg shadow-lg z-10">
                          <li>
                            <Link
                              href="/profile"
                              className="block px-4 py-2 text-lg font-bold hover:bg-gray-100"
                              onClick={handleLinkClick}
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/my-applications"
                              className="block px-4 py-2 text-lg font-bold hover:bg-gray-100"
                              onClick={handleLinkClick}
                            >
                              My Applications
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => signOut()}
                              className="block w-full px-4 py-2 text-lg font-bold text-left hover:bg-gray-100"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      )}
                    </>
                  )}
                  {status !== "authenticated" && (
                    <Link
                      href="/login"
                      className="block text-gray-700 text-lg font-bold hover:text-gray-500"
                      onClick={handleLinkClick}
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        <div className={`m-2 md:flex items-center space-x-4 ${status === "authenticated" ? "space-x-6" : ""}`}>
          {status === "authenticated" ? (
            <div className=" m-4 relative">
              <button
                onClick={toggleDropdown}
                className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300"
              >
                {userName}
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-lg shadow-lg z-10">
                  <li>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm md:text-base lg:text-lg font-bold hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/my-applications"
                      className="block px-4 py-2 text-sm md:text-base lg:text-lg font-bold hover:bg-gray-100"
                      onClick={handleLinkClick}
                    >
                      My Applications
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="block w-full px-4 py-2 text-sm md:text-base lg:text-lg font-bold text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link href="/login" className="text-white text-sm md:text-base lg:text-lg font-bold hover:text-gray-300 transition duration-300">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
