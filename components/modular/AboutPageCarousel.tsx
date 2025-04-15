"use client";
import * as React from "react";
import { FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export const testimonialsData = [
  {
    id: 1,
    name: "Tom Cruise",
    position: "Founder & Chairman",
    image: "/testimonials/man1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Marketing Director",
    image: "/testimonials/woman1.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO, Tech Innovations",
    image: "/testimonials/man2.jpg",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Senior UX Designer",
    image: "/testimonials/woman2.jpg",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Financial Analyst",
    image: "/testimonials/man1.jpg",
  },
  {
    id: 6,
    name: "Jessica Kim",
    position: "Product Manager",
    image: "/testimonials/woman3.jpg",
  },
  {
    id: 7,
    name: "Robert Taylor",
    position: "Operations Lead",
    image: "/testimonials/man2.jpg",
  },
  {
    id: 8,
    name: "Amanda Smith",
    position: "HR Director",
    image: "/testimonials/woman4.jpg",
  },
  {
    id: 9,
    name: "James Peterson",
    position: "Sales Executive",
    image: "/testimonials/man1.jpg",
  },
  {
    id: 10,
    name: "Olivia Martinez",
    position: "Customer Success Manager",
    image: "/testimonials/woman1.jpg",
  },
];

export function AboutPageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="px-4 py-20 w-full max-w-7xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonialsData.map((testimony) => (
            <CarouselItem
              key={testimony.id}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="bg-brandBg rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 h-full">
                <div className="relative w-64 h-64 rounded-b-full overflow-hidden">
                  <Image
                    src={testimony.image}
                    alt={testimony.name}
                    fill
                    className="object-contain"
                    // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {testimony.name}
                  </h3>
                  <p className="text-gray-300">{testimony.position}</p>
                  <div className="flex justify-center gap-3 pt-2">
                    <FaTwitter className="text-white hover:text-blue-400 transition-colors" />
                    <FaInstagramSquare className="text-white hover:text-pink-500 transition-colors" />
                    <FaLinkedin className="text-white hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-center gap-4">
          <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
          <CarouselNext className="relative top-0 left-0 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
