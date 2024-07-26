'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const LoanDetails = () => {
  const { id } = useParams();
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    if (id) {
      fetchLoanDetails(id);
    }
  }, [id]);

  async function fetchLoanDetails(loanId) {
    try {
      const response = await fetch(`/api/loan?_id=${loanId}`);
      if (response.ok) {
        const loanData = await response.json();
        setLoan(loanData);
      } else {
        console.error("Error fetching loan details:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching loan details:", error);
    }
  }

  if (!loan) {
    return <div>Loading...</div>;
  }

  console.log(loan)

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-5xl font-bold text-center mb-8">{loan.name}</h1>
      <div className="bg-gray-800 p-6  shadow-lg  rounded-xl">
        <img src={loan.photo} alt={loan.name} className="w-full h-full object-cover p-12 " />
        <p className="text-gray-200 text-3xl hover:text-white mb-4">{loan.description}</p>
      </div>
    </div>
  );
};

export default LoanDetails;
