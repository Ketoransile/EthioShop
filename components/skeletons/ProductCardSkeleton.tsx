"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col rounded-xl border border-border/50 bg-card">
      {/* Image Placeholder */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted/20 p-8 flex items-center justify-center">
        <Skeleton className="h-full w-full rounded-lg bg-muted/50" />
      </div>

      {/* Content Placeholder */}
      <div className="flex flex-col gap-3 p-5 flex-1 justify-between">
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4 bg-muted" />
          <Skeleton className="h-4 w-1/2 bg-muted" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="h-3 w-3 rounded-full bg-muted" />
          ))}
        </div>

        {/* Price & Button */}
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-20 bg-muted" />
            <Skeleton className="h-4 w-12 bg-muted/50" />
          </div>
          <Skeleton className="h-10 w-full rounded-md bg-muted" />
        </div>
      </div>
    </div>
  );
};
