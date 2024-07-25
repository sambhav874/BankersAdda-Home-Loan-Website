'use client';
import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-800 min-h-screen text-gray-100">
      <main className="container mx-auto px-4 py-6">
        <section className="about-us text-center">
          {/* Header Image */}
          <div 
            className="header-image bg-cover bg-center py-48 text-center relative"
            style={{ backgroundImage: "url('/images/6a38b575-e094-462c-8e21-dccb94077a0b.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <h1 className="text-7xl font-extrabold text-white relative z-10 drop-shadow-xl hover:drop-shadow-2xl transition-shadow duration-300">
              About Us
            </h1>
          </div>
          
          {/* Content */}
          <div className="content bg-gray-900 p-12 shadow-2xl rounded-lg mx-auto mt-[-100px] relative z-10 max-w-5xl">
            <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Our Story
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              At Loan Provider, we are committed to helping families achieve their dreams of home ownership. As a leading mortgage lender, we offer a wide range of financial solutions to meet diverse needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                  Our Core Values
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-300 mb-8 pl-6">
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Trust</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Transparency</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Integrity</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Excellence</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                  Benefits for You
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-300 mb-8 pl-6">
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Wide Product Range</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Interest Calculation on Daily Reducing Balance</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Overdraft Facility</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Low Interest Rates</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">Low Processing Fees</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">No Hidden Costs</li>
                  <li className="font-bold hover:text-blue-400 transition-colors duration-300">No Pre-payment Penalty</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Our Reach
            </h2>
            <p className="text-lg text-gray-300">
              With over 24,000 branches and a dedicated team of 1,600+ professionals, we are committed to delivering exceptional service across the country.
            </p>
          </div>
          
          {/* Features */}
          <div className="features text-center bg-gray-900 p-12 shadow-2xl rounded-lg mt-12 max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-10 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Our Key Features & Benefits
            </h2>
            <div className="feature-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xl text-gray-300 font-bold hover:text-blue-400 transition-colors duration-300">Exclusive Benefit Packages</p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xl text-gray-300 font-bold hover:text-blue-400 transition-colors duration-300">Competitive Interest Rates. Daily Reducing Balance Calculation.</p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xl text-gray-300 font-bold hover:text-blue-400 transition-colors duration-300">Flexible Overdraft Options for Home Loans. Optimal Use of Funds.</p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xl text-gray-300 font-bold hover:text-blue-400 transition-colors duration-300">Low Processing Charges. Transparent Costs.</p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xl text-gray-300 font-bold hover:text-blue-400 transition-colors duration-300">No Prepayment Penalties. Reduce Your Loan Burden Easily.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
