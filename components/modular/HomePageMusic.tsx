"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import asus from "../../assets/computers/gaming.jpg";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HomePageMusic = () => {
  const router = useRouter();

  // Set target date to 3 days from now for demo purposes, or a fixed date
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    // Determine the target date once on mount (e.g., 5 days from now)
    // For a consistent "offer" look, we can just countdown from a fixed duration or set a specific future date
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 dark:bg-card border border-border/10">

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-16">

          {/* Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Limited Time Offer
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Enhance Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Gaming Experience
                </span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-md mx-auto lg:mx-0">
                Level up with our premium selection of high-performance gaming gear. Unmatched speed, precision, and style.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-500 text-white border-0"
                onClick={() => router.push("/products?category=gaming")}
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-12 text-lg font-semibold text-white border-zinc-700 hover:bg-zinc-800 bg-transparent"
                onClick={() => router.push("/products")}
              >
                View All
              </Button>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-6 mt-4 text-zinc-500 text-sm font-medium">
              <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/5 min-w-[70px]">
                <span className="text-white text-2xl font-bold tabular-nums">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider mt-1">Days</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/5 min-w-[70px]">
                <span className="text-white text-2xl font-bold tabular-nums">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider mt-1">Hours</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/5 min-w-[70px]">
                <span className="text-white text-2xl font-bold tabular-nums">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider mt-1">Min</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/5 min-w-[70px]">
                <span className="text-white text-2xl font-bold tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-wider mt-1">Sec</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full aspect-square max-w-[500px] lg:max-w-none">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-violet-500/10 rounded-full scale-90" />

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={asus}
                  alt="Gaming Experience"
                  fill
                  className="object-cover rounded-2xl shadow-2xl skew-y-1 transform border border-white/5"
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
