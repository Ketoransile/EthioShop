import { ProductCardSkeleton } from "./ProductCardSkeleton";

export default function BestSellingSkeleton() {
  return (
    <div className="flex flex-col gap-8 py-16 px-4 md:px-0">
      <div className="flex flex-col gap-2 relative">
        <div className="flex items-center gap-2">
          <div className="h-8 w-4 bg-muted rounded-sm animate-pulse" />
          <div className="h-6 w-24 bg-muted rounded-md animate-pulse" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-10 w-64 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
