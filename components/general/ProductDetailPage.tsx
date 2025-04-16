"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { useCartStore } from "@/store/cart-store";

// import { use } from "react";
import { Document } from "mongoose";
import Link from "next/link";
import FavouriteHeartButton from "../modular/FavouriteHeartButton";
import { useRouter } from "next/navigation";
interface Price {
  value: number;
  currency: string;
}
interface IProduct extends Document {
  _id: string;
  title: string;
  description?: string | null;
  brand: string;
  price: Price | null;
  listPrice: Price | null;
  galleryThumbnails: string[];
  highResolutionImages: string[];
  thumbnailImage: string;
  stars: number;
  inStock: boolean;
}
export default function ProductsDetailPage({ product }: { product: IProduct }) {
  const router = useRouter();
  const numStars = Math.floor(product?.stars) || 0;

  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const onAddItem = () => {
    addItem({
      id: product._id,
      name: product.title,
      price: product.price?.value || 0,
      imageUrl: product.highResolutionImages
        ? product.highResolutionImages[0]
        : product.thumbnailImage || "",
      quantity: 1,
    });
  };
  const onRemoveItem = () => {
    removeItem(product._id);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="flex flex-col lg:gap-10 items-center lg:justify-center ">
        <div className=" flex flex-col gap-4 pt-20">
          <Image
            src={product.thumbnailImage}
            alt="Product Thumbnail"
            width={200}
            height={200}
            className=" object-cover max-lg:w-32 max-lg:h-auto"
          />
        </div>
        <div className="flex gap-4 items-center pt-20">
          {product.highResolutionImages.slice(0, 4).map((thumbnail, index) => (
            <Image
              key={index}
              src={thumbnail}
              width={100}
              height={100}
              alt="Product Thumbnail"
              className="object-cover cursor-pointer rounded-md max-lg:w-20 max-lg:h-auto"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:pt-20">
        <h1 className="text-2xl font-bold">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h1>

        <div className="flex justify-between text-md items-center">
          <div className="flex items-center justify-between gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < numStars ? (
                  <FaStar size={16} className="text-yellow-400" />
                ) : (
                  <FaStar size={16} className="text-slate-200" />
                )}
              </span>
            ))}
            <p>({numStars})</p>
          </div>
          {product.inStock && (
            <p className="text-green-500 font-bold text-xs">In Stock</p>
          )}
        </div>
        <div className="text-sm  border-b pb-4 border-b-gray-500">
          {product.description?.split(". ").slice(0, 3).join(". ") +
            (product.description?.split(". ").length > 3 ? "..." : "") || ""}
        </div>
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">${product.price?.value}</div>
          <div className="text-sm line-through text-gray-500">
            ${product.listPrice?.value}
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4 ">
            <Button
              onClick={onRemoveItem}
              className="bg-gray-300 text-black rounded-none rounded-l-xl"
            >
              -
            </Button>
            {/* <Button className=" bg-transparent px-4 rounded-none text-black"> */}
            <div className="px-4">{quantity}</div>
            {/* </Button> */}
            <Button
              onClick={onAddItem}
              className="bg-brandBg text-white rounded-none rounded-r-xl"
            >
              +
            </Button>
            <FavouriteHeartButton product={product} />
          </div>
          <Link href="/">
            <Button
              className="bg-brandBg cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              Buy Now
            </Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="border border-gray-500 rounded-md">
            <div className="flex items-center gap-4 p-4 border-b border-gray-500">
              <FaTruckFast size={32} className="text-brandBg" />
              <div className="flex flex-col gap-1 ">
                <p className="text-md font-semibold">Free Shipping</p>
                <p className="text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <GrPowerCycle size={32} className="text-brandBg" />
              <div className="flex flex-col gap-1">
                <p className="text-md font-semibold">Free Returns</p>
                <p className="text-xs ">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
