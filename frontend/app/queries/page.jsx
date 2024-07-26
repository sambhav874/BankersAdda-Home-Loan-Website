'use client';
import AdminTabs from "@/components/layout/AdminTabs";
import React, { useEffect, useState } from "react";
import { useProfile } from "@/components/useProfile";

const QueriesPage = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    fetch('/api/queries')
      .then(response => response.json())
      .then(data => {
        setQueries(data);
      })
      .catch(error => {
        console.error('Error fetching queries:', error);
      });
  }, []);

  const handleCheckboxChange = async (_id, isChecked) => {
    try {
      const response = await fetch(`/api/queries`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id, isAnswered: isChecked }),
      });

      if (response.ok) {
        const updatedQueries = queries.map(query =>
          query._id === _id ? { ...query, isAnswered: isChecked } : query
        );
        setQueries(updatedQueries);
      } else {
        throw new Error('Failed to update query');
      }
    } catch (error) {
      console.error('Error updating query:', error);
    }
  };

  const { loading, data } = useProfile();

  if (loading) {
    return "Loading user info.....";
  }

  if (!data.admin) {
    return "Not an admin.";
  }

  return (
    <>
      <AdminTabs isAdmin={data.admin} />
      <section className="mx-auto max-w-screen-lg p-8 sm:p-6 lg:p-8 text-white">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Queries</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {queries.map(query => (
            <div
              key={query._id}
              className="bg-slate-700 bg-opacity-70 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-600"
            >
              <p className="text-lg font-semibold">Email: {query.userEmail}</p>
              <p className="mt-2 text-md">Query: {query.query}</p>
              <label className="inline-flex items-center mt-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-blue-400"
                  checked={query.isAnswered}
                  onChange={(e) => handleCheckboxChange(query._id, e.target.checked)}
                />
                <span className="ml-2 text-base font-medium">Is Answered?</span>
              </label>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default QueriesPage;
