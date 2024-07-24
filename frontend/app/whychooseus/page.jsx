import React from 'react';

const LoanApplicationProcess = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-black">You Deserve A Better Loan</h1>
        <p className="text-lg text-gray-600 mt-2">We usually follow 4 steps to get a better business loan.</p>
      </header>
      <div className="steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="step bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-gray-400 mb-2">1 STEP</h2>
          <h3 className="text-xl text-black mb-4">Apply In 10 Minutes</h3>
          <p className="text-gray-600 mb-4">You can upload your documents on web portal or at our WhatsApp.</p>
          <svg className="mx-auto w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm1.42 17.58l-.93.92c-.36.36-.94.42-1.32.14-2.14-1.53-3.83-3.6-4.82-5.88-.18-.41-.05-.91.31-1.18l.9-.67c.24-.18.57-.22.86-.12.86.29 1.78.44 2.74.44.22 0 .42-.03.61-.08.16-.05.34-.02.49.08l1.08.8c.37.27.5.78.28 1.18-.18.31-.37.63-.55.96-.05.09-.15.16-.27.18-.22.03-.46.08-.69.12-.16.04-.32.09-.47.15-.18.07-.35.2-.49.38-.23.29-.47.57-.73.82z"/>
          </svg>
        </div>
        <div className="step bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-gray-400 mb-2">2 STEP</h2>
          <h3 className="text-xl text-black mb-4">Hear From Us In 1 Hour</h3>
          <p className="text-gray-600 mb-4">Our telecaller executive will reach out to you.</p>
          <svg className="mx-auto w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm1.42 17.58l-.93.92c-.36.36-.94.42-1.32.14-2.14-1.53-3.83-3.6-4.82-5.88-.18-.41-.05-.91.31-1.18l.9-.67c.24-.18.57-.22.86-.12.86.29 1.78.44 2.74.44.22 0 .42-.03.61-.08.16-.05.34-.02.49.08l1.08.8c.37.27.5.78.28 1.18-.18.31-.37.63-.55.96-.05.09-.15.16-.27.18-.22.03-.46.08-.69.12-.16.04-.32.09-.47.15-.18.07-.35.2-.49.38-.23.29-.47.57-.73.82z"/>
          </svg>
        </div>
        <div className="step bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-gray-400 mb-2">3 STEP</h2>
          <h3 className="text-xl text-black mb-4">Get Approval</h3>
          <p className="text-gray-600 mb-4">Once documents submission is completed you will get approval from us.</p>
          <svg className="mx-auto w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm1.42 17.58l-.93.92c-.36.36-.94.42-1.32.14-2.14-1.53-3.83-3.6-4.82-5.88-.18-.41-.05-.91.31-1.18l.9-.67c.24-.18.57-.22.86-.12.86.29 1.78.44 2.74.44.22 0 .42-.03.61-.08.16-.05.34-.02.49.08l1.08.8c.37.27.5.78.28 1.18-.18.31-.37.63-.55.96-.05.09-.15.16-.27.18-.22.03-.46.08-.69.12-.16.04-.32.09-.47.15-.18.07-.35.2-.49.38-.23.29-.47.57-.73.82z"/>
          </svg>
        </div>
        <div className="step bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl text-gray-400 mb-2">4 STEP</h2>
          <h3 className="text-xl text-black mb-4">Your Loan is Funded</h3>
          <p className="text-gray-600 mb-4">Once approved your loan will get disbursed at the earliest.</p>
          <svg className="mx-auto w-12 h-12 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm1.42 17.58l-.93.92c-.36.36-.94.42-1.32.14-2.14-1.53-3.83-3.6-4.82-5.88-.18-.41-.05-.91.31-1.18l.9-.67c.24-.18.57-.22.86-.12.86.29 1.78.44 2.74.44.22 0 .42-.03.61-.08.16-.05.34-.02.49.08l1.08.8c.37.27.5.78.28 1.18-.18.31-.37.63-.55.96-.05.09-.15.16-.27.18-.22.03-.46.08-.69.12-.16.04-.32.09-.47.15-.18.07-.35.2-.49.38-.23.29-.47.57-.73.82z"/>
          </svg>
        </div>
      </div>
      <div className="partnership bg-black text-white p-6 rounded-lg text-center">
        <h2 className="text-3xl mb-4">Partnership Benefits</h2>
        <ul className="list-none mb-6">
          <li className="mb-2">Do Less - Earn More</li>
          <li className="mb-2">Earn At Home</li>
          <li className="mb-2">Accountable And Transparent</li>
          <li className="mb-2">Process With Less Documentation</li>
        </ul>
        <div className="join-us bg-white text-black p-6 rounded-lg mt-6">
          <h2 className="text-2xl mb-4">Become An Agent Or Freelancer</h2>
          <p className="mb-4">Join us and fulfill your aspirations</p>
          <p className="mb-4">Join Instant Loan as agent or freelancer, and earn income by referring loan proposals.</p>
          <a href="#" className="join-button bg-black text-white py-2 px-4 rounded-lg">Join us</a>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationProcess;
