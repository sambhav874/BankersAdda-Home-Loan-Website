'use client';
import React, { useEffect, useState } from 'react';
import LoanCard from './../../components/layout/LoanCard'; // Adjust the path as per your project structure
import Link from 'next/link';

const LoanApply = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  async function fetchLoans() {
    try {
      const response = await fetch("/api/loan");
      if (response.ok) {
        const loanData = await response.json();
        setLoans(loanData);
      } else {
        console.error("Error fetching loans:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Apply Button and Guidelines */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Ready to Apply for a Loan?</h2>
        <p className="text-lg mb-6">If you're interested in applying for any of the loans listed below, simply click the button to start your application.</p>
        <Link href="/application-form" className="inline-block bg-blue-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          Apply Here
        </Link>
      </div>

      {/* Available Loans Section */}
      <h1 className="text-3xl font-bold text-center mb-8">Available Loans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loans.length > 0 ? (
          loans.map((loan) => (
            <LoanCard key={loan._id} loan={loan} />
          ))
        ) : (
          <p className="text-center text-gray-600">No loans available at the moment. Please check back later.</p>
        )}
      </div>
    </div>
  );
};

export default LoanApply;
