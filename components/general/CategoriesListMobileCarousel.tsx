"use client";
import React from "react";
import Slider from "react-slick";
import { dummyCategories } from "@/lib/dummyData";
import Link from "next/link";

export function CategoriesListMobileCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {dummyCategories.map((category, index) => (
        <Link
          href={`/products${category.href}`}
          className="w-20 h-32 flex flex-col items-center justify-center pt-10 gap-2 border  rounded-md frop-shadow-xl shadow-brandBg cursor-pointer text-center"
          key={index}
        >
          <div className="flex justify-center items-center">
            <category.image size={48} />
          </div>
          <p className="text-lg">{category.name}</p>
        </Link>
      ))}
    </Slider>
  );
}
