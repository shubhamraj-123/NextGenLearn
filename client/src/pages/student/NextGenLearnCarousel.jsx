import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "First slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    image: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/23151218/BA-Courses.png",
  },
  {
    title: "Second slide label",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://schoolings.org/wp-content/uploads/Courses-Offered-in-UNIJOS.jpg",
  },
  {
    title: "Third slide label",
    description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    image: "https://brightfuturewelfare.com/img/courses.jpg",
  },
  {
    title: "Third slide label",
    description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    image: "/images/slide3.jpg",
  },
];

export function NextGenLearnCarousel() {
  return (
    <div className="w-full flex items-center justify-center ">
      <Carousel className="w-full max-w-screen-2xl md:max-w-screen sm:max-w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full flex justify-center items-center">
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
        <CarouselPrevious className="absolute left-6 md:left-4 sm:left-2 z--1" />
        <CarouselNext className="absolute right-6 md:right-4 sm:right-2 z--1" />
      </Carousel>
    </div>
  );
}