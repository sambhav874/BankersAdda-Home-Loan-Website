import React from 'react';

function Rend() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-bold">Grow More Loan</h1>
              <p className="mt-4 text-lg">Growmoreloans.com: We are one of India's largest Corporate DSA & fastest growing Loan Distribution Company in India. We are part of Intellex Strategic Consulting Private Limited that manages multiple Financial and Management Advisory Services and Accounting and Taxation and Compliances practices across India.</p>
              <p className="mt-4 text-lg">GrowmoreLoans is a DSA, having partnerships with more than 60+ leading Banks and NBFCs and Fintechs to offer loans across India.</p>
              <p className="mt-4 text-lg">We cater to Finance and Loan requirements such as Personal Loans, Business Loans, Home Loans, Mortgage Loans, Car And Vehicles Loans, Education Loans, Project Finance, Working Capital, Invoice Discounting, Bills Discounting, Supply Chain Finance, Revenue Based Financing (RBF), Venture Debt, Venture Capital.</p>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img src="https://www.growmoreloans.com/images/hero-img.jpg" alt="Grow More Loan" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </header>

      <footer className="bg-blue-600 text-white py-4">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Grow More Loan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Rend;
