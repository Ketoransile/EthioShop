import { TbRectangleVerticalFilled } from "react-icons/tb";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Button } from "../ui/button";

export default function HomePageProductsListSekeleton() {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <div className="flex gap-2 items-center">
        <TbRectangleVerticalFilled size={24} className="text-blue-500" />
        <h1 className="text-sm text-blue-500 font-bold">Our Products</h1>
      </div>
      <h1 className="text-4xl font-semibold">Explore our products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-16 items-center justify-between pt-20">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
      <div className="pt-10 self-center">
        <Button className="bg-brandBg w-fit text-white px-20 py-6 cursor-pointer">
          View All Products
        </Button>
      </div>
    </div>
  );
}
