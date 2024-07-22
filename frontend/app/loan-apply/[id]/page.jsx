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
      <h1 className="text-3xl font-bold text-center mb-8">{loan.name}</h1>
      <div className="bg-black p-6 rounded-lg shadow-lg">
        <img src={loan.photo} alt={loan.name} className="w-full h-64 object-cover mb-6 rounded" />
        <p className="text-gray-700 text-base mb-4">{loan.description}</p>
      </div>
    </div>
  );
};

export default LoanDetails;
