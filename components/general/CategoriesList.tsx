"use client";
import { dummyCategories } from "@/lib/dummyData";
import Link from "next/link";
import { CategoriesListMobileCarousel } from "./CategoriesListMobileCarousel";
import Image from "next/image";

// Import images for categories
import phoneImg from "../../assets/phones/iphone1.jpg";
import laptopImg from "../../assets/computers/asus.jpg";
import cameraImg from "../../assets/monitor.jpg";
import watchImg from "../../assets/smartwatch/galaxywatch1.jpg";
import headphoneImg from "../../assets/headphone/headsetone.jpg";
import gamingImg from "../../assets/computers/gaming.jpg";

const categoryImages = {
  cat_phones: phoneImg,
  cat_computers: laptopImg,
  cat_cameras: cameraImg,
  cat_wearables: watchImg,
  cat_audio: headphoneImg,
  cat_gaming: gamingImg,
};

export const CategoriesList = () => {
  return (
    <div className="flex flex-col gap-10 py-16 md:py-24">
      <div className="flex flex-col gap-3 text-center items-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Browse by <span className="text-primary">Category</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Discover premium electronics across our most popular categories.
        </p>
      </div>

      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyCategories.map((category, index) => {
          const image = categoryImages[category.id as keyof typeof categoryImages] || phoneImg;

          return (
            <Link
              href={`/products${category.href}`}
              key={index}
              className="relative group overflow-hidden rounded-3xl cursor-pointer h-[400px] border border-border/20 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 blur-[0.5px] group-hover:blur-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300" />

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2 opacity-80 group-hover:opacity-100 group-hover:text-primary transition-colors">
                  <category.image size={32} className="text-white group-hover:text-primary transition-colors" />
                  <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Explore</span>
                </div>
                <h3 className="text-white font-bold text-3xl tracking-tight">{category.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="w-full mx-auto lg:hidden">
        <CategoriesListMobileCarousel />
      </div>
    </div>
  );
};
