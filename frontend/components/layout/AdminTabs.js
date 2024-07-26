// components/layout/AdminTabs.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminTabs({ isAdmin }) {
  const path = usePathname();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-slate-900 rounded-lg shadow-lg">
      <Link
        href="/profile"
        className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
          path === "/profile" ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
        }`}
      >
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            href="/loan"
            className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
              path === "/loan" ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Loan
          </Link>
          <Link
            href="/queries"
            className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
              path === "/queries" ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Queries
          </Link>
          <Link
            href="/users"
            className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
              path.includes("users") ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Users
          </Link>
          <Link
            href="/applications"
            className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
              path === "/applications" ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Applications
          </Link>
          <Link
            href="/blogs-mgm"
            className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
              path === "/blogs-mgm" ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/carousel"
            className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ${
              path === "/carousel" ? "bg-blue-600 text-white shadow-md" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Carousel
          </Link>
        </>
      )}
    </div>
  );
}
