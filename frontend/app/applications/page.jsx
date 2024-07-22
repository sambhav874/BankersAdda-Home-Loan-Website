'use client'
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

  console.log(applications)

  return (<>
    <AdminTabs isAdmin={data.admin} />
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Applications</h1>
      <ul className="list-none mb-0">
        {applications.length > 0 ? (
          applications.map((application) => (
            <li key={application._id} className="flex flex-col mb-4 p-4 bg-white rounded shadow-md">
              <h2 className="text-lg font-bold">{application.name}</h2>
              <div className="flex flex-wrap mb-2">
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Email: <span className="text-gray-600">{application.email}</span>
                </p>
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Image: <span className="text-gray-600">{application.image}</span>
                </p>
              </div>
              <div className="flex flex-wrap mb-2">
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Street Address: <span className="text-gray-600">{application.streetAddress}</span>
                </p>
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Phone Number: <span className="text-gray-600">{application.phoneNumber}</span>
                </p>
              </div>
              <div className="flex flex-wrap mb-2">
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  City: <span className="text-gray-600">{application.city}</span>
                </p>
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Pincode: <span className="text-gray-600">{application.pincode}</span>
                </p>
              </div>
              <div className="flex flex-wrap mb-2">
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Country: <span className="text-gray-600">{application.country}</span>
                </p>
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Loan Type: <span className="text-gray-600">{application.loanType}</span>
                </p>
              </div>
              <div className="flex flex-wrap mb-2">
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Identity Proof Type: <span className="text-gray-600">{application.identityProofType}</span>
                </p>
                <p className="w-1/2 md:w-1/3 xl:w-1/4 pr-2">
                  Identity Proof File: <span className="text-gray-600">{application.identityProofFile}</span>
                </p>
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