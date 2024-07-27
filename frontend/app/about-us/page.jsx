
import React from 'react';



const AboutUs = () => {
  
  
  return (
    <div className="font-sans bg-gray-800 min-h-screen text-gray-100">
      <main className="container mx-auto py-6 px-1">
        <section className="about-us text-center">
          {/* Header Image */}
          <div
            className="header-image bg-cover bg-center py-48 text-center relative"
            style={{ backgroundImage: "url('/images/6a38b575-e094-462c-8e21-dccb94077a0b.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-white relative z-10 drop-shadow-xl hover:drop-shadow-2xl transition-shadow duration-300">
              About Us
            </h1>
          </div>
          
          {/* Content */}
          <div className="content bg-gray-900 p-6 sm:p-8 md:p-12 shadow-2xl rounded-lg mx-auto mt-[-100px] relative z-10 max-w-5xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Our Story
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              At Loan Provider, we are committed to helping families achieve their dreams of home ownership. As a leading mortgage lender, we offer a wide range of financial solutions to meet diverse needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                  Our Core Values
                </h2>
                <ul className="list-disc list-inside text-base sm:text-lg text-gray-300 mb-6 pl-4 sm:pl-6">
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Trust
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      We build long-lasting relationships with our clients through consistent reliability and honesty.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Transparency
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      We ensure that all processes and costs are clear and upfront, with no hidden fees or surprises.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Integrity
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      We adhere to the highest ethical standards, ensuring fair and respectful treatment for all clients.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Excellence
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      We strive to exceed expectations through superior service and innovative financial solutions.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
                  Benefits for You
                </h2>
                <ul className="list-disc list-inside text-base sm:text-lg text-white mb-6 pl-4 sm:pl-6">
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Wide Product Range
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      We offer a variety of loan products to suit different financial needs and situations.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Interest Calculation on Daily Reducing Balance
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      Your interest is calculated on a daily reducing balance, saving you money over time.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Overdraft Facility
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      Access additional funds easily with our convenient overdraft options.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Low Interest Rates
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      Benefit from competitive interest rates designed to make your loan more affordable.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    Low Processing Fees
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      Our processing fees are minimal, reducing the upfront cost of your loan.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    No Hidden Costs
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      We provide complete cost transparency with no hidden fees or charges.
                    </p>
                  </li>
                  <li className="font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                    No Pre-payment Penalty
                    <p className="text-sm sm:text-base font-normal text-gray-300">
                      You can repay your loan early without any additional charges, giving you financial flexibility.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Our Reach
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              With over 24,000 branches and a dedicated team of 1,600+ professionals, we are committed to delivering exceptional service across the country.
            </p>
          </div>
          
          {/* Features */}
          <div className="features text-center bg-gray-900 p-6 sm:p-8 md:p-12 shadow-2xl rounded-lg mt-12 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Our Key Features & Benefits
            </h2>
            <div className="feature-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                  Exclusive Benefit Packages
                </p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                  Personalized Service
                </p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                  Easy Online Application
                </p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                  Fast Approvals
                </p>
              </div>
              <div className="feature-item text-center mb-8 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                <div className="text-blue-400 mb-4">
                  <svg className="mx-auto" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0L14.9 7.6H22.8L16.4 12.4L19.3 20L12 15.2L4.7 20L7.6 12.4L1.2 7.6H9.1L12 0Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 font-bold drop-shadow-md hover:text-blue-400 transition-colors duration-300">
                  Attractive Interest Rates
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="cta text-center py-8 sm:py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 md:mb-10 drop-shadow-md hover:drop-shadow-lg transition-shadow duration-300">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Contact us today to learn more about our mortgage solutions and how we can help you achieve your home ownership goals.
            </p>
            <a
              href="tel:+919320600554"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300"
            >
              Contact Us at +91 9320600554
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
