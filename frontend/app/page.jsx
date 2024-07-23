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
    <main className="min-h-screen bg-gray-200 flex flex-col items-center">
      <header className="w-full bg-gray-800 py-8 text-white text-center">
        <div className="text-6xl font-light mb-4">
          Grow More Loans
        </div>
      </header>
      
      <Carousel images={images} />

      <section className="px-8 py-12 text-center bg-gray-100 shadow-lg rounded-lg w-full max-w-7xl my-12">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Welcome to Grow More Loan</h2>
        <p className="text-lg text-gray-700 mb-8">Your trusted partner for all types of loans</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {loans.map((loan) => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>
      </section>

      <Rend />
    </main>
  );
}
