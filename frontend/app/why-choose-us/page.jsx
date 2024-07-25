import React from 'react';

const LoanApplicationProcess = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary">You Deserve A Better Loan</h1>
        <p className="text-lg text-gray-600 mt-4">We usually follow 4 steps to get a better business loan.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500">1 STEP</h2>
            <h3 className="text-primary">Apply In 10 Minutes</h3>
            <p>You can upload your documents on our web portal or at our WhatsApp.</p>
            <div className="card-actions justify-center">
              <svg className="w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm1 2h12v12H6V5zm5.293 6.293L8.586 8.586 7.172 10l3.121 3.121 7.121-7.121L16.707 4.88l-5.414 5.413z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500">2 STEP</h2>
            <h3 className="text-primary">Hear From Us In 1 Hour</h3>
            <p>Our telecaller executive will reach out to you.</p>
            <div className="card-actions justify-center">
              <svg className="w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm1.42 17.58l-.93.92c-.36.36-.94.42-1.32.14-2.14-1.53-3.83-3.6-4.82-5.88-.18-.41-.05-.91.31-1.18l.9-.67c.24-.18.57-.22.86-.12.86.29 1.78.44 2.74.44.22 0 .42-.03.61-.08.16-.05.34-.02.49.08l1.08.8c.37.27.5.78.28 1.18-.18.31-.37.63-.55.96-.05.09-.15.16-.27.18-.22.03-.46.08-.69.12-.16.04-.32.09-.47.15-.18.07-.35.2-.49.38-.23.29-.47.57-.73.82z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500">3 STEP</h2>
            <h3 className="text-primary">Get Approval</h3>
            <p>Once document submission is completed, you will get approval from us.</p>
            <div className="card-actions justify-center">
              <svg className="w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10 20V4m4 0v16m-7-8h10" />
              </svg>
            </div>
          </div>
        </div>
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500">4 STEP</h2>
            <h3 className="text-primary">Your Loan is Funded</h3>
            <p>Once approved, your loan will get disbursed at the earliest.</p>
            <div className="card-actions justify-center">
              <svg className="w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19.41 8.41l-8 8a2 2 0 01-2.83 0l-4-4a2 2 0 012.83-2.83l2.59 2.59 5.59-5.59a2 2 0 012.83 2.83z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white p-8 rounded-lg text-center">
        <h2 className="text-4xl mb-6">Partnership Benefits</h2>
        <ul className="list-none mb-6 space-y-4 text-lg">
          <li>Do Less - Earn More</li>
          <li>Earn At Home</li>
          <li>Accountable And Transparent</li>
          <li>Process With Less Documentation</li>
        </ul>
        <div className="bg-white text-gray-900 p-6 rounded-lg mt-6">
          <h2 className="text-3xl mb-4">Become An Agent Or Freelancer</h2>
          <p className="mb-4">Join us and fulfill your aspirations.</p>
          <p className="mb-4">Join Instant Loan as an agent or freelancer, and earn income by referring loan proposals.</p>
          <a href="#" className="btn btn-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors">Join Us</a>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationProcess;
