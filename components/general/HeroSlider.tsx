"use client";
import monitor from "../../assets/monitor.jpg";
import headset2 from "../../assets/headset2.jpg";
import headset1 from "../../assets/headset1.jpg";
import headset from "../../assets/headset.jpg";
import iphone from "../../assets/iphone.jpg";
import iphone1 from "../../assets/iphone3.jpg";
import iphone2 from "../../assets/iphone2.jpg";
import laptop1 from "../../assets/laptop1.jpg";
import laptop2 from "../../assets/laptop2.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const heroSliderData = [
  {
    id: 1,
    title: "iPhone 15 series",
    description: "The ultimate iPhone experience.",
    images: [iphone, iphone1, iphone2], // Reference the imported variable
  },
  {
    id: 2,
    title: "Premium Monitors",
    description: "High-resolution displays for professionals",
    images: [monitor, laptop1, laptop2], // Reference the imported variable
  },
  {
    id: 3,
    title: "Wireless Headsets",
    description: "Immersive sound experience",
    images: [headset, headset1, headset2], // Reference the imported variable
  },
];

export const HeroSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      className="pt-20"
    >
      <CarouselContent>
        {heroSliderData.map((heroSlider) => (
          <CarouselItem key={heroSlider.id} className="text-white w-full">
            <Link
              href="/"
              className="relative bg-black flex items-center justify-center w-full   "
              key={heroSlider.id}
            >
              <div className="absolute flex flex-col gap-4 pt-20 items-center justify-center">
                <p className="text-7xl font-bold">{heroSlider.title}</p>
                <p className="text-lg font-bold">{heroSlider.description}</p>
              </div>
              {heroSlider.images.map((image, index) => (
                <Image
                  src={image}
                  alt="heroSliderImage"
                  width={200}
                  height={100}
                  className="w-full h-96"
                  key={index}
                />
              ))}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
