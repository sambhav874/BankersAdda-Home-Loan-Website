'use client';
import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(2);
  const [tenureType, setTenureType] = useState('Year');

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const tenure = tenureType === 'Year' ? loanTenure * 12 : loanTenure;

    const emi = principal * rate * (Math.pow(1 + rate, tenure) / (Math.pow(1 + rate, tenure) - 1));
    return emi.toFixed(2);
  };

  const totalInterestPayable = () => {
    const emi = calculateEMI();
    const tenure = tenureType === 'Year' ? loanTenure * 12 : loanTenure;
    return (emi * tenure - loanAmount).toFixed(2);
  };

  const totalPayment = () => {
    const emi = calculateEMI();
    const tenure = tenureType === 'Year' ? loanTenure * 12 : loanTenure;
    return (emi * tenure).toFixed(2);
  };

  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [loanAmount, totalInterestPayable()],
        backgroundColor: ['#4CAF50', '#FF6384'],
        hoverBackgroundColor: ['#45A049', '#FF4365'],
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg ">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex-1 lg:pr-8 mb-6 lg:mb-0">
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold">Loan Amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-500 rounded-lg bg-gray-800 text-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold">Interest Rate (%)</label>
            <input
              type="range"
              min="0"
              max="25"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full mt-2"
            />
            <div className="text-gray-300 mt-2">{interestRate}%</div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-lg font-semibold">Loan Tenure</label>
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-500 rounded-lg bg-gray-700 text-gray-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            />
          </div>
          <div className="mb-4 flex">
            <button
              className={`px-4 py-2 mr-2 rounded-lg ${tenureType === 'Year' ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' : 'bg-gray-600 text-gray-200 shadow-md hover:bg-gray-700'}`}
              onClick={() => setTenureType('Year')}
            >
              Year
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${tenureType === 'Month' ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700' : 'bg-gray-600 text-gray-200 shadow-md hover:bg-gray-700'}`}
              onClick={() => setTenureType('Month')}
            >
              Month
            </button>
          </div>
          <div className="mt-6">
            <div className="text-xl font-bold text-gray-100 mb-2">Loan EMI: <span className="text-blue-400">{calculateEMI()}</span></div>
            <div className="text-xl font-bold text-gray-100 mb-2">Total Interest Payable: <span className="text-blue-400">{totalInterestPayable()}</span></div>
            <div className="text-xl font-bold text-gray-100 mb-2">Total Payment (Principal + Interest): <span className="text-blue-400">{totalPayment()}</span></div>
          </div>
        </div>
        <div className="flex-1 max-w-xs mx-auto lg:mx-0">
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
