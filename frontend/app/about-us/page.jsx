'use client';
import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4">
        <section className="about-us text-center">
          {/* Header Image */}
          <div 
            className="header-image bg-cover bg-center py-24 text-center" 
            style={{ backgroundImage: "url('/path/to/header-image.jpg')" }}
          >
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Us</h1>
          </div>
          
          {/* Content */}
          <div className="content bg-white p-8 shadow-lg rounded-lg mx-auto mt-[-80px] relative z-10 max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Loan Provider Name</h2>
            <p className="text-lg text-gray-700 mb-6">Loan Provider is the largest Mortgage Lender, helping families achieve the dream of owning a home.</p>
            
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 pl-5">
              <li>Trust</li>
              <li>Transparency</li>
              <li>Integrity</li>
              <li>Excellence</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Value to Customers</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-6 pl-5">
              <li>Wide Product Range</li>
              <li>Interest Calculation on Daily Reducing Balance</li>
              <li>Overdraft Facility available</li>
              <li>Low Interest Rates</li>
              <li>Low Processing Fees</li>
              <li>No Hidden Costs</li>
              <li>No Pre-payment Penalty</li>
            </ul>
            
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Presence</h2>
            <p className="text-lg text-gray-700">We have over 24,000 branches and a 1600+ member strong dedicated Sales Team.</p>
          </div>
          
          {/* Features */}
          <div className="features text-center bg-white p-8 shadow-lg rounded-lg mt-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Features & Benefits</h2>
            <div className="feature-icons flex flex-wrap justify-center gap-8">
              <div className="feature-item w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center mb-6">
                <div className="text-blue-500 mb-3">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Packages of exclusive benefits</p>
              </div>
              <div className="feature-item w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center mb-6">
                <div className="text-blue-500 mb-3">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Low Interest rates. Interest calculation on daily reducing balance.</p>
              </div>
              <div className="feature-item w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center mb-6">
                <div className="text-blue-500 mb-3">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Home loan also available as an overdraft. Optimally utilize your surplus funds.</p>
              </div>
              <div className="feature-item w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center mb-6">
                <div className="text-blue-500 mb-3">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Low Processing charges. No hidden costs.</p>
              </div>
              <div className="feature-item w-full sm:w-1/2 md:w-1/3 lg:w-1/5 text-center mb-6">
                <div className="text-blue-500 mb-3">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg text-gray-700">No Prepayment penalties. Reduce your interest burden by prepaying the loan.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
