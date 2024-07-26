'use client';

import toast from "react-hot-toast";
import { useProfile } from "../../components/useProfile";
import AdminTabs from "../../components/layout/AdminTabs";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const { loading, data: profileData } = useProfile();

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(users => {
        setUsers(users);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const isAdmin = profileData?.admin;

  if (loading) return <p>Loading...</p>;

  if (!isAdmin) {
    return <p>Not an Admin...</p>;
  }

  return (
    <>
      <AdminTabs isAdmin={isAdmin} />
      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-6 text-center">Users Page</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.length > 0 && users.map(user => (
            <div
              key={user._id}
              className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="text-gray-100 text-lg font-semibold">
                {!!user.name ? (
                  <span>{user.name}</span>
                ) : (
                  <span className="italic">No Name</span>
                )}
              </div>
              <div className="text-gray-300 mt-2 text-md">
                {user.email}
              </div>
              <div className="mt-4">
                <Link
                  href={'/users/' + user._id}
                  className="text-blue-500 hover:text-blue-400 font-medium"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
