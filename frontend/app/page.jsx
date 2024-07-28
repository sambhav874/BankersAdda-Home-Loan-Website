// Home Component (Home.js)
'use client';
import React, { useEffect, useState } from 'react';
import Carousel from '../components/layout/Carousel';
import Rend from '../components/Rend'; 
import LoanCard from '../components/layout/LoanCard';

export default function Home() {
  const [images, setImages] = useState([]);
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    async function fetchCarouselImages() {
      try {
        const response = await fetch('/api/carousel');
        if (response.ok) {
          const carouselImages = await response.json();
          const images = carouselImages.images.map(image => image.imageUrl);
          setImages(images);
        }
      } catch (error) {
        console.error('Error fetching carousel images:', error);
      }
    }

    async function fetchLoans() {
      try {
        const response = await fetch("/api/loan");
        if (response.ok) {
          const loanData = await response.json();
          setLoans(loanData);
        }
      } catch (error) {
        console.error("Error fetching loans:", error);
      }
    }

    fetchCarouselImages();
    fetchLoans();
  }, []);

  return (
    <main className=" bg-gray-800 flex flex-col pt-10 items-center">
      
      
      <Carousel images={images} />
<Rend />
<section className="px-8 py-12 text-center bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-lg w-full max-w-7xl my-12 mx-auto shadow-lg">
  <h2 className="text-5xl font-extrabold text-gray-100 mb-6">Welcome to Bankers Adda</h2>
  <p className=" text-gray-300 font-semibold  mb-8 text-2xl">Your Trusted Partner for All Types of Loans</p>
  
  <div className="max-w-4xl mx-auto text-center text-white hover:text-gray-400 duration-300 mb-10">
    <p className="mb-4 text-xl font-extralight tracking-wider hover:text-gray-400 duration-300">At Bankers Adda, we offer a comprehensive range of loan products designed to meet diverse financial needs. Our goal is to provide you with the best loan options, competitive interest rates, and flexible terms. Explore our offerings below:</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {loans.map((loan) => (
      <div key={loan._id} className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <LoanCard loan={loan} />
        
      </div>
    ))}
  </div>

  
</section>



      
    </main>
  );
}
