// components/layout/AdminTabs.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminTabs({ isAdmin }) {
  const path = usePathname();

  return (
    <div className="flex mx-auto justify-center gap-2 tabs bg-slate-700 items-center">
      <Link className={path === "/profile" ? "active" : ""} href="/profile">
        Profile
      </Link>
      {isAdmin && (
        <>
          <Link
            className={path === "/loan" ? "active" : ""}
            href="/loan"
          >
            Loan
          </Link>

          <Link
            className={path === "/queries" ? "active" : ""}
            href="/queries"
          >
            Queries
          </Link>

          <Link className={path.includes("users") ? "active" : ""} href="/users">
            Users
          </Link>

          <Link className={path === "/orders" ? "active" : ""} href="/orders">
            Orders
          </Link>
        </>
      )}
    </div>
  );
}
