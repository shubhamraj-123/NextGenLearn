import * as React from "react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/assets/img1.png";
// import img3 from "@/assets/img3.jpg";
import img2 from "@/assets/img2.jpg";
import img4 from "@/assets/img4.jpg";
import img6 from "@/assets/img6.jpg"

const slides = [
  {
    title: "Empower Your Future with NextGenLearn",
    description: "Unlock your potential with cutting-edge courses and expert-led training. Start learning today and shape tomorrow.",
    image:img1,
  },
  {
    title: "Learn Anytime, Anywhere",
    description: "Access high-quality content on your schedule. Flexible learning designed to fit your busy life.",
    image: img4,
  },
  {
    title: "Join a Community of Lifelong Learners",
    description: "Collaborate, grow, and succeed with peers and mentors from around the globe.",
    image: img6,
  },
  {
    title: "Stay Ahead with Industry-Relevant Skills",
    description: "Gain practical knowledge that keep you competitive in today’s fast-changing world.",
    image: img2,
  },
];

export function NextGenLearnCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full flex items-center justify-center relative">
      <Carousel className="w-full max-w-screen-2xl md:max-w-screen sm:max-w-full">
        <CarouselContent
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="w-full flex-shrink-0 flex justify-center items-center"
              style={{ minWidth: "100%" }}
            >
              <Card className="w-full">
                <CardContent className="flex flex-col items-center justify-center w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                  <div className="text-center mt-4">
                    <h3 className="text-4xl md:text-3xl sm:text-2xl font-semibold">{slide.title}</h3>
                    <p className="text-xl md:text-lg sm:text-base text-gray-600 px-6">{slide.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        {/* Prev button */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-100 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </Carousel>
    </div>
  );
}
