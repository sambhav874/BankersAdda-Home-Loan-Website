'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Page = () => {
  const [applications, setApplications] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/my-applications')
        .then(response => response.json())
        .then(data => setApplications(data));
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading user info.....</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">My Applications</h1>
      <ul className="divide-y divide-gray-200">
        {applications.length > 0 ? (
          applications.map((application) => (
            <li key={application._id} className="py-6 m-8 bg-slate-900 text-white p-6 hover:text-black rounded-lg shadow-md hover:bg-white transition duration-200">
              <div className="flex items-center mb-4">
                <img src={application.image} alt={application.name} className="w-16 h-16 rounded-full mr-6" />
                <h2 className="text-xl font-bold">{application.name}</h2>
              </div>
              <div className="flex flex-wrap mb-4">
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Street Address:</span> {application.streetAddress}
                </p>
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Phone Number:</span> {application.phoneNumber}
                </p>
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Email:</span> {application.email}
                </p>
              </div>
              <div className="flex flex-wrap mb-4">
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">City:</span> {application.city}
                </p>
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Pincode:</span> {application.pincode}
                </p>
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Country:</span> {application.country}
                </p>
              </div>
              <div className="flex flex-wrap mb-4">
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Loan Type:</span> {application.loanType}
                </p>
                <p className="w-full md:w-1/3 lg:w-1/4 pr-4 mb-2">
                  <span className="text-gray-600 font-medium">Identity Proof Type:</span> {application.identityProofType}
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium mr-2">Status:</span>
                <button
                  className={`p-2 rounded-lg uppercase font-bold tracking-wider ${
                    application.status === 'in progress' ? 'bg-yellow-500 hover:bg-yellow-600' :
                    application.status === 'rejected' ? 'bg-red-500 hover:bg-red-600' :
                    'bg-green-500 hover:bg-green-600'
                  } text-white transition duration-300 ease-in-out transform hover:scale-105`}
                >
                  {application.status}
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-600">No applications found</li>
        )}
      </ul>
    </div>
  );
};

export default Page;
