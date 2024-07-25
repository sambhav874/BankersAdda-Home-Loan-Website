'use client';
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
    <div className="relative w-[95%] max-w-7xl  mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800">
      {/* Carousel wrapper */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden rounded-lg">
        {images.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      {totalSlides > 1 && (
        <>
          <button
            className="absolute top-1/2 left-6 z-10 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-6 z-10 transform -translate-y-1/2 text-white text-3xl bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#10095;
          </button>
          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-indigo-600' : 'bg-gray-400'}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
