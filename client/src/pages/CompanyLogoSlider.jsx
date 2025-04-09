import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const CompanyLogoCarousel = () => {
  const logos = [
    "accenture.jpg",
    "amazon.svg",
    "capgemini.jpg",
    "cognizant.svg",
    "dell.svg",
    "deloitte.svg",
    "fractal.svg",
    "google.svg",
    "hcl.svg",
    "amazon.svg",
    "microsoft.jpg",
    "mindtree.svg",
    "pwc.svg",
    "tcs.svg",
    "usigma.svg",
    "synopsys.svg",
    "oracle.svg",
    "tata.svg"
  ];

  const visibleCards = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const maxIndex = logos.length - visibleCards;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  // Auto-scroll
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current); // Cleanup
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      next();
    }, 3000);
  };

  const handleUserClick = (direction) => {
    if (direction === "next") next();
    else prev();
    startAutoSlide(); // Restart auto-slide after manual click
  };

  return (
    // dark:bg-gray-900
    <div className="w-full py-10 bg-[#fdfafa] bg-gradient-to-r dark:from-black dark:via-gray-900 dark:to-black"> 
  <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
    Our Achievers Work With
  </h2>
  <div className="relative max-w-6xl mx-auto">
    {/* Logo Cards */}
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 flex-shrink-0"
          >
            {/* dark:bg-gray-800 */}
            <div className="bg-white  h-28 flex items-center justify-center rounded-xl shadow hover:shadow-lg transition border-1">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="h-12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Controls */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
      <button
        onClick={() => handleUserClick("prev")}
        className="bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white" />
      </button>
    </div>
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
      <button
        onClick={() => handleUserClick("next")}
        className="bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      >
        <ChevronRight className="w-5 h-5 text-gray-800 dark:text-white" />
      </button>
    </div>
  </div>
</div>

  );
};

export default CompanyLogoCarousel;
