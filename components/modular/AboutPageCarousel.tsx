"use client";
import * as React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";

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
    image: "/testimonials/man1.jpg", // Repeats man1 (since man3 is removed)
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
    image: "/testimonials/man2.jpg", // Repeats man2
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
    image: "/testimonials/man1.jpg", // Repeats man1
  },
  {
    id: 10,
    name: "Olivia Martinez",
    position: "Customer Success Manager",
    image: "/testimonials/woman1.jpg", // Repeats woman1
  },
];
export function AboutPageCarousel() {
  // const plugin = React.useRef(
  //   Autoplay({ delay: 5000, stopOnInteraction: true })
  // );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className=" pt-20  "
      // plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonialsData.map((testimony, index) => (
          <CarouselItem
            key={index}
            className="w-32  drop-shadow-2xl  flex items-center justify-between   lg:basis-1/4  "
          >
            {/* <div className="w-full flex flex-col   rounded-xl shadow-2xl px-10 pb-10 gap-4 items-center justify-center"> */}
            <div className="w-96 flex flex-col    px-10 pb-10 gap-4 items-center justify-center">
              <Image
                src={testimony.image}
                alt="testimony"
                width={200}
                height={200}
                className="rounded-xl object-cover basis-1/3"
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-black">
                  {testimony.name}
                </h1>
                <p className="text-md ">{testimony.position}</p>
                <div className="flex gap-2">
                  <FaTwitter size={24} />
                  <FaInstagramSquare size={24} />
                  <FaLinkedin size={24} />
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
