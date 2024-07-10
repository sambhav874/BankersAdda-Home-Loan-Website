'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className='text-[75px] font-extralight'>Grow More Loans</div>
      <Carousel images={images} />
      

      <section className="px-8 py-12 text-center">
  <h2 className="text-3xl font-bold mb-6">Welcome to Grow More Loan</h2>
  <p className="text-lg mb-8">Your trusted partner for all types of loans</p>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {loans.map((loan) => (
      <LoanCard key={loan._id} loan={loan} />
    ))}
  </div>
</section>

      
      <Rend /> {/* Render the Rend component */}

  
    </main>
  );
}