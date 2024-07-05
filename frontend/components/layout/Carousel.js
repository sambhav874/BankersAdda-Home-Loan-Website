'use client'
import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ensure images is an array and has a length property
  const totalSlides = Array.isArray(images) ? images.length : 0;

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (totalSlides > 1) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // Change slides every 5 seconds

      return () => clearInterval(timer); // Cleanup the timer
    }
  }, [currentSlide, totalSlides]);

  // Render null if images is not an array or has no items
  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full z-0">
      {/* Carousel wrapper */}
      <div className="relative h-96 overflow-hidden rounded-lg z-0">
        {images.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === currentSlide ? 'block' : 'hidden'}`}>
            <img src={slide} className="absolute inset-0 w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      {totalSlides > 1 && (
        <>
          <button className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 -translate-x-1/2 focus:outline-none border-none" onClick={prevSlide}>&#10094;</button>
          <button className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 translate-x-1/2 focus:outline-none border-none" onClick={nextSlide}>&#10095;</button>
        </>
      )}
    </div>
  );
};

export default Carousel;
