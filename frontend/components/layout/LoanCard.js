import React from 'react';
import Link from 'next/link';

const LoanCard = ({ loan }) => {
  return (
    <Link key={loan._id} href={`/loan-apply/${loan._id}`}>
      <div className="w-80 h-96 p-5 bg-white border-2 border-transparent bg-clip-padding rounded-lg flex flex-col cursor-pointer transform origin-bottom-right transition-all duration-300 ease-out  relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out hover:scale-110" style={{ backgroundImage: `url(${loan.photo})` }}></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center bg-gradient-to-t from-slate-800 via-transparent to-transparent p-5 rounded-lg">
          <div className="flex justify-center items-center flex-1">
            <h3 className="text-3xl font-bold text-center text-white border-b border-white pb-2">
              {loan.name}
            </h3>
          </div>
          <div className="mt-auto">
            <p className="text-white bg-black bg-opacity-50 rounded-lg p-2">{loan.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LoanCard;
