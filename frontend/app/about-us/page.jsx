'use client';
import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      
      <main className="container mx-auto p-4">
        <section className="about-us">
          <div className="header-image bg-cover bg-center py-16 text-center" style={{ backgroundImage: "url('path/to/header-image.jpg')" }}>
            <h1 className="text-5xl text-black">About Us</h1>
          </div>
          <div className="content bg-white p-8 shadow-lg -mt-8">
            <h2 className="text-3xl text-gray-800 mt-4">Loan Provider Name</h2>
            <p className="text-lg text-gray-600 mt-2">Loan Provider is the largest Mortgage Lender, helping families achieve the dream of owning a home.</p>
            <h2 className="text-3xl text-gray-800 mt-8">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 ml-4">
              <li>Trust</li>
              <li>Transparency</li>
              <li>Integrity</li>
              <li>Excellence</li>
            </ul>
            <h2 className="text-3xl text-gray-800 mt-8">Value to Customers</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 ml-4">
              <li>Wide Product Range</li>
              <li>Interest Calculation on Daily Reducing Balance</li>
              <li>Overdraft Facility available</li>
              <li>Low Interest Rates</li>
              <li>Low Processing Fees</li>
              <li>No Hidden Costs</li>
              <li>No Pre-payment Penalty</li>
            </ul>
            <h2 className="text-3xl text-gray-800 mt-8">Our Presence</h2>
            <p className="text-lg text-gray-600">We have over 24,000 branches and a 1600+ member strong dedicated Sales Team.</p>
          </div>
          <div className="features text-center bg-white p-8 shadow-lg mt-8">
            <h2 className="text-3xl text-gray-800 mb-6">Our Features & Benefits</h2>
            <div className="feature-icons flex flex-wrap justify-around">
              <div className="feature-item w-1/5 text-center mb-4">
                <svg className="mx-auto mb-2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="#000000"/>
                </svg>
                <p className="text-lg text-gray-600">Packages of exclusive benefits</p>
              </div>
              <div className="feature-item w-1/5 text-center mb-4">
                <svg className="mx-auto mb-2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="#000000"/>
                </svg>
                <p className="text-lg text-gray-600">Low Interest rates. Interest calculation on daily reducing balance.</p>
              </div>
              <div className="feature-item w-1/5 text-center mb-4">
                <svg className="mx-auto mb-2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="#000000"/>
                </svg>
                <p className="text-lg text-gray-600">Home loan also available as an overdraft. Optimally utilize your surplus funds.</p>
              </div>
              <div className="feature-item w-1/5 text-center mb-4">
                <svg className="mx-auto mb-2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="#000000"/>
                </svg>
                <p className="text-lg text-gray-600">Low Processing charges. No hidden costs.</p>
              </div>
              <div className="feature-item w-1/5 text-center mb-4">
                <svg className="mx-auto mb-2" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="#000000"/>
                </svg>
                <p className="text-lg text-gray-600">No Prepayment penalties. Reduce your interest burden by prepaying the loan.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-6 mb-4">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Our Products</Link></li>
            <li><Link href="/approved">Approved Project</Link></li>
            <li><Link href="/calculations">Calculations</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
          <div className="footer-bottom">
            <p className="mb-2">&copy; 2024 Loan Provider. All rights reserved.</p>
            <p className="mb-2">Follow us on:
              <a href="#" className="ml-2">Facebook</a>
              <a href="#" className="ml-2">Twitter</a>
              <a href="#" className="ml-2">LinkedIn</a>
              <a href="#" className="ml-2">Instagram</a>
            </p>
            <p>Call us at 1800 123 456</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
