import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Skeleton } from "../ui/skeleton";

export default function HomePageProductsListSekeleton() {
  return (
    <div className="flex flex-col gap-12 py-16 px-4 md:px-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-4 bg-muted rounded-sm animate-pulse" />
          <div className="h-6 w-32 bg-muted rounded-md animate-pulse" />
        </div>
        <div className="h-10 w-80 bg-muted rounded-lg animate-pulse" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Skeleton className="h-12 w-52 rounded-md bg-muted" />
      </div>
    </div>
  );
}
