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
    <main className="min-h-screen bg-gray-800 flex flex-col pt-10 items-center">
      
      
      <Carousel images={images} />
<Rend />
      <section className="px-8  text-center bg-gray-800  rounded-lg w-full max-w-7xl my-12">
        <h2 className="text-4xl font-semibold text-gray-400 mb-6">Welcome to Banker's Adda</h2>
        <p className="text-lg text-gray-700 mb-8">Your trusted partner for all types of loans</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-800 lg:grid-cols-3 gap-8 justify-items-center">
          {loans.map((loan) => (
            <LoanCard key={loan._id} loan={loan} />
          ))}
        </div>
      </section>

      
    </main>
  );
}
