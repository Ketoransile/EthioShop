"use client";
import * as React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../ui/card";

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
    position: "CTO",
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
];

export function AboutPageCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="py-20 w-full">
      <div className="flex flex-col gap-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Our Leadership Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet the visionaries behind EthioShop&apos;s success.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-[1400px] mx-auto px-4 md:px-12"
      >
        <CarouselContent className="-ml-6">
          {testimonialsData.map((person) => (
            <CarouselItem
              key={person.id}
              className="pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="border-none shadow-none bg-transparent group">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Social Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-sm transition-all">
                        <FaTwitter />
                      </a>
                      <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-sm transition-all">
                        <FaInstagram />
                      </a>
                      <a href="#" className="p-2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-sm transition-all">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold tracking-tight">{person.name}</h3>
                    <p className="text-muted-foreground">{person.position}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Dots (optional, or keeping arrows but styled better) */}
        <div className="flex justify-end gap-2 mt-8 pr-12 relative">
          <CarouselPrevious className="static translate-y-0 border-muted bg-transparent hover:bg-primary hover:text-white" />
          <CarouselNext className="static translate-y-0 border-muted bg-transparent hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
}
