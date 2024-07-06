'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from './../components/layout/Carousel';
import Rend from './../components/Rend'; // Ensure correct import path

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/carousel')
      .then(res => res.json())
      .then(carouselImages => {
        const images = carouselImages.images.map(image => image.imageUrl);
        setImages(images);
        console.log(images);
      })
      .catch(error => console.error('Error fetching carousel images:', error));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Carousel images={images} />
      
      <section className="px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to Grow More Loan</h2>
        <p className="text-lg mb-8">Your trusted partner for all types of loans</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/home-loan">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center">
                <Image src="/home-loan.svg" alt="Home Loan" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Home Loan and Mortgage Loans</h3>
              <p className="mt-2">Get affordable home loans with low-interest rates.</p>
              <p className="text-blue-500 mt-4 font-bold">Apply Now</p>
            </div>
          </Link>

          <Link href="/vehicle-loan">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center">
                <Image src="/vehicle-loan.svg" alt="Vehicle Loan" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Vehicle Loans</h3>
              <p className="mt-2">Finance your new vehicle with our easy vehicle loans.</p>
              <p className="text-blue-500 mt-4 font-bold">Apply Now</p>
            </div>
          </Link>

          <Link href="/gold-loan">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center">
                <Image src="/gold-loan.svg" alt="Gold Loan" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Gold Loan</h3>
              <p className="mt-2">Quick and hassle-free gold loans at competitive rates.</p>
              <p className="text-blue-500 mt-4 font-bold">Apply Now</p>
            </div>
          </Link>

          <Link href="/education-loan">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center">
                <Image src="/education-loan.svg" alt="Education Loan" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Educational Loan</h3>
              <p className="mt-2">Secure your future with our education loans.</p>
              <p className="text-blue-500 mt-4 font-bold">Apply Now</p>
            </div>
          </Link>

          <Link href="/revenue-loan">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center">
                <Image src="/revenue-loan.svg" alt="Revenue Based" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Revenue Based Financing</h3>
              <p className="mt-2">Flexible financing solutions based on your revenue.</p>
              <p className="text-blue-500 mt-4 font-bold">Apply Now</p>
            </div>
          </Link>

          <Link href="/venture-debt">
            <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center">
                <Image src="/venture-debt.svg" alt="Venture Debt" width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold mt-4">Venture Debt</h3>
              <p className="mt-2">Funding for startups and emerging companies.</p>
              <p className="text-blue-500 mt-4 font-bold">Apply Now</p>
            </div>
          </Link>
        </div>
      </section>
      
      <Rend /> {/* Render the Rend component */}

      <footer className="bg-blue-600 text-white py-4">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Grow More Loan. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
