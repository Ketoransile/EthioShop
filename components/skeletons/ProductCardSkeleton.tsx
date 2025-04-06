"use client";

import { Skeleton } from "@/components/ui/skeleton"; // Using ShadCN's Skeleton (or create your own)

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Image Placeholder */}
      <div className="relative py-6 flex items-center justify-center bg-gray-100">
        <Skeleton className="h-40 w-40 rounded-none" />
      </div>

      {/* Content Placeholder */}
      <div className="w-full flex flex-col pt-4 pb-4 gap-3">
        {/* Title */}
        <Skeleton className="h-4 w-3/4" />

        {/* Rating Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="h-3 w-3 rounded-full" />
          ))}
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-y-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-4 w-12 ml-auto" />
        </div>

        {/* Discount Badge (conditional) */}
        <Skeleton className="h-4 w-8 ml-auto" />
      </div>

      {/* Button Placeholder */}
      <Skeleton className="h-10 w-full rounded-none" />
    </div>
  );
};
