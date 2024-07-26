'use client';
import AdminTabs from "@/components/layout/AdminTabs";
import { useEffect, useState } from "react";
import { useProfile } from "@/components/useProfile";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const { loading, data } = useProfile();

  useEffect(() => {
    fetch("/api/application-form")
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setApplications(applications.map(app => 
      app._id === id ? { ...app, status: newStatus } : app
    ));

    fetch(`/api/application-form?_id=${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status: newStatus })
    })
    .then((res) => res.json())
    .catch((error) => console.error(error));
  };



  return (
    <>
      <AdminTabs isAdmin={data.admin} />
      <div className="max-w-5xl mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-5xl font-bold mb-4">Applications</h1>
        <ul className="divide-y divide-gray-200">
          {applications.length > 0 ? (
            applications.map((application) => (
              <li key={application._id} className="py-6  m-8 bg-slate-900 text-white p-6 hover:text-black rounded-lg shadow-md hover:bg-white transition duration-200">
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
                  <label className="text-gray-600 font-medium mr-2">Status:</label>
                  <select
                    value={application.status}
                    onChange={(e) => handleStatusChange(application._id, e.target.value)}
                    className="p-2 border bg-white text-black rounded"
                  >
                    <option value="in progress">In Progress</option>
                    <option value="rejected">Rejected</option>
                    <option value="successful">Successful</option>
                  </select>
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-600">No applications found</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Applications;
