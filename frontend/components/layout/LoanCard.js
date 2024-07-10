import React from 'react';
import Link from 'next/link';

const LoanCard = ({ loan }) => {
  return (
    <Link key={loan._id} href="#">
      <div className="w-80 h-96 p-5 bg-white bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-transparent bg-clip-padding rounded-lg flex flex-col cursor-pointer transform origin-bottom-right transition-all duration-600 ease-out hover:scale-105 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${loan.photo})` }}></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center">
          <div className="flex justify-center items-center flex-1">
            <h3 className="text-2xl font-bold text-center text-white  border-b border-black ">
              {loan.name}
            </h3>
            
          </div>
          <div className="mt-auto">
            <p className="text-white">
              {loan.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LoanCard;
