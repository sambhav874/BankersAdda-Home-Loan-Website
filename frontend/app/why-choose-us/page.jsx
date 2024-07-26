import React from 'react';
import Right from './../../components/icons/Right';
import Image from 'next/image';

const LoanApplicationProcess = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary">You Deserve A Better Loan</h1>
        <p className="text-lg text-gray-600 mt-4">We usually follow 4 steps to get a better business loan.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-gray-200 duration-1000 p-4 md:p-6 lg:p-8 hover:text-black">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500 hover:text-black">1 STEP</h2>
            <h3 className="text-primary hover:text-black">Apply In 10 Minutes</h3>
            <p className="hover:text-black">You can upload your documents on our web portal or at our WhatsApp.</p>
            <div className="card-actions justify-center mt-4">
              <Right className='w-16 h-16 text-black' />
            </div>
          </div>
        </div>
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-gray-200 duration-1000 p-4 md:p-6 lg:p-8 hover:text-black">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500 hover:text-black">2 STEP</h2>
            <h3 className="text-primary hover:text-black">Hear From Us In 1 Hour</h3>
            <p className="hover:text-black">Our telecaller executive will reach out to you.</p>
            <div className="card-actions justify-center mt-4">
              <Image src='/images/Phone.png' alt="Phone Icon" width={64} height={64} className="text-white" />
            </div>
          </div>
        </div>
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-gray-200 duration-1000 p-4 md:p-6 lg:p-8 hover:text-black">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500 hover:text-black">3 STEP</h2>
            <h3 className="text-primary hover:text-black">Get Approval</h3>
            <p className="hover:text-black">Once document submission is completed, you will get approval from us.</p>
            <div className="card-actions justify-center mt-4">
              <Image src='/images/approval-icon.png' alt="Approval Icon" width={64} height={64} className="text-white" />
            </div>
          </div>
        </div>
        <div className="card shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 hover:bg-gray-200 duration-1000 p-4 md:p-6 lg:p-8 hover:text-black">
          <div className="card-body text-center">
            <h2 className="card-title text-gray-500 hover:text-black">4 STEP</h2>
            <h3 className="text-primary hover:text-black">Your Loan is Funded</h3>
            <p className="hover:text-black">Once approved, your loan will get disbursed at the earliest.</p>
            <div className="card-actions justify-center mt-4">
              <svg className="w-16 h-16 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
        <div className="bg-gray-900 text-white p-6 rounded-lg mt-6">
          <h2 className="text-3xl mb-4">Become An Agent Or Freelancer</h2>
          <p className="mb-4">Join us and fulfill your aspirations.</p>
          <p className="mb-4">Join Instant Loan as an agent or freelancer, and earn income by referring loan proposals.</p>
          <a href="tel:+1234567890" className="btn btn-primary text-white py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors">
            Call Us: +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationProcess;
