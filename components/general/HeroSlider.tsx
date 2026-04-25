"use client";
import monitor from "../../assets/monitor.jpg";
import headset2 from "../../assets/headset2.jpg";
import headset from "../../assets/headset.jpg";
import iphone from "../../assets/iphone.jpg";
import iphone1 from "../../assets/iphone3.jpg";
import laptop2 from "../../assets/laptop2.jpg";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export const heroSliderData = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    description: "Experience the future of smartphones with the new iPhone 15.",
    images: [iphone, iphone1],
    link: "/products?category=smartphone",
    color: "from-blue-950 via-indigo-950 to-violet-950",
  },
  {
    id: 2,
    title: "Pro Workstations",
    subtitle: "Power for your biggest ideas.",
    description: "High-performance setups for creative professionals.",
    images: [monitor, laptop2],
    link: "/products?category=computer",
    color: "from-blue-950 to-slate-900",
  },
  {
    id: 3,
    title: "Immersive Audio",
    subtitle: "Sound that surrounds you.",
    description: "Wireless freedom with noise-cancelling technology.",
    images: [headset2, headset],
    link: "/products?category=audio",
    color: "from-purple-950 to-indigo-950",
  },
];

export const HeroSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section className="w-full pt-8 pb-8">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        className="w-full rounded-3xl overflow-hidden shadow-2xl"
      >
        <CarouselContent>
          {heroSliderData.map((slide, index) => (
            <CarouselItem key={slide.id} className="w-full">
              <div className={`relative h-[500px] md:h-[600px] w-full overflow-hidden bg-gradient-to-br ${slide.color}`}>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3" />

                <div className="relative z-10 h-full container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                  {/* Text Content */}
                  <div className="flex flex-col gap-6 text-center md:text-left max-w-xl pt-10 md:pt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3 className="text-lg md:text-xl font-medium text-white/80 tracking-wide mb-2 uppercase">
                        {slide.subtitle}
                      </h3>
                      <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
                        {slide.title}
                      </h2>
                      <p className="text-lg text-white/70 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                        {slide.description}
                      </p>

                      <div className="flex gap-4 justify-center md:justify-start">
                        <Link href={slide.link}>
                          <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 text-lg">
                            Shop Now
                          </Button>
                        </Link>
                        <Link href={slide.link}>
                          <Button size="lg" variant="outline" className="rounded-full !border-white/30 !text-white !bg-transparent hover:!bg-white/10 px-8 py-6 text-lg backdrop-blur-sm">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Composition */}
                  <div className="relative flex-1 w-full h-full flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 50 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="relative w-full h-[300px] md:h-[500px] max-w-[600px]"
                    >
                      <Image
                        src={slide.images[0]}
                        alt={slide.title}
                        fill
                        className="object-contain drop-shadow-2xl z-20"
                        priority={index === 0}
                      />
                      {/* Secondary floating image detail (visual flair) */}
                      {slide.images[1] && (
                        <div className="hidden md:block absolute -bottom-10 -left-10 w-40 h-40 z-10 opacity-80">
                          <Image
                            src={slide.images[1]}
                            alt="Detail"
                            fill
                            className="object-contain drop-shadow-lg rounded-xl"
                          />
                        </div>
                      )}
                    </motion.div>
                  </div>

                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
