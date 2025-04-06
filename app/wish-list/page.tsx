"use client";
import { ProductCard } from "@/components/modular/ProductCard";
import { Button } from "@/components/ui/button";
import { useWishStore } from "@/store/wishlist-store";
import { TbRectangleVerticalFilled } from "react-icons/tb";

export default function WishListPage() {
  const { wishItems, addToWish, removeFromWish } = useWishStore();
  const numOfWishList = wishItems.length;
  return (
    <div className="flex flex-col pt-20 gap-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <TbRectangleVerticalFilled size={24} className="text-blue-500" />
            <h1 className="text-sm text-blue-500 font-bold">Favourite</h1>
          </div>
          <h1 className="text-4xl font-semibold">
            Wish List ({numOfWishList})
          </h1>
        </div>
        <Button className="bg-brandBg text-white  px-6 py-2  rounded-md">
          Move All To Bag
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-6 gap-y-16 items-center justify-between ">
        {wishItems.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
}
