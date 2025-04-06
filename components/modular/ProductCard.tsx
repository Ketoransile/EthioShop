"use client";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import { MdRemoveShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleXmark } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useWishStore } from "@/store/wishlist-store";

export const ProductCard = ({ product }) => {
  const { wishItems, addToWish, removeFromWish } = useWishStore();
  const isWishItem = wishItems.find((item) => item._id === product._id);
  const { items, removeItem, addItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product._id);
  const numStars = Math.floor(product?.stars) || 0;
  const listPrice = product.listPrice?.value || 0;
  const price = product.price?.value || 0;
  const discount =
    listPrice > price ? Math.floor(((listPrice - price) / listPrice) * 100) : 0;
  const isDiscounted = discount > 0;
  const truncateTitle = (title: string): string => {
    return title.length > 30 ? title.substring(0, 20) + "..." : title;
  };

  return (
    <div className="relative w-full flex flex-col  hover:drop-shadow-sm hover:shadow-blue-500 border-b rounded-xl border-gray-100 shadow-md  shadow-gray-200">
      <Link
        href={`/products/${product._id}`}
        // className="hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
      >
        <div className="relative  flex items-center justify-center   h-60 w-full overflow-hidden border border-gray-200 rounded-2xl">
          <Image
            src={product.thumbnailImage}
            width={200}
            height={200}
            alt={product.title}
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="w-full flex flex-col  pt-4 pb-4 px-4 ">
          <p className="font-bold text-sm text-gray-600">
            {truncateTitle(product.title.split(" ").slice(0, 4).join(" "))}
          </p>
          <div className="w-full grid grid-cols-4  gap-y-2 justify-between items-center">
            {" "}
            <div className="col-span-2 flex items-center gap-2">
              <p className=" font-bold col-span-2 text-xl text-black">
                ${product.price?.value}
              </p>
              {isDiscounted && (
                <p className="text-slate-400 line-through">
                  ${product.listPrice?.value}
                </p>
              )}
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex gap-1">
                <div className="flex items-center justify-between ">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < numStars ? (
                        <FaStar size={12} className="text-yellow-400" />
                      ) : (
                        <FaStar size={12} className="text-slate-200" />
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-bold">{`(${product.stars})`}</p>
              </div>
              <div className="">
                {" "}
                {isWishItem ? (
                  <button
                    onClick={async () => {
                      removeFromWish(product);
                      const { data: session } = await authClient.getSession();
                      if (!session) {
                        addToWish(product);
                        toast.error("Please login to manage wishlist");
                        return redirect("/login");
                      }
                      return toast.success(
                        "Item removed from wishlist successfully!!"
                      );
                    }}
                    className="flex item-center justify-center w-fit rounded-full  p-2 cursor-pointer"
                  >
                    <FaHeart
                      size={20}
                      color="red"
                      // className="absolute top-4 right-4 "
                    />
                  </button>
                ) : (
                  <button
                    onClick={async () => {
                      addToWish(product);
                      const { data: session } = await authClient.getSession();
                      if (!session) {
                        removeFromWish(product);
                        toast.error("Please login to manage wishlist");
                        return redirect("/login");
                      }
                      return toast.success(
                        "Item added to wish list successfully!!"
                      );
                    }}
                    className="flex item-center justify-center w-fit rounded-full  p-2  cursor-pointer"
                  >
                    {" "}
                    <CiHeart
                      size={20}
                      color=""
                      // className="absolute top-4 right-4 "
                    />
                  </button>
                )}
              </div>

              {isDiscounted && (
                // <div className="w-fit self-end  bg-red-500 px-2  rounded-sm text-white text-sm">{`-${discount}%`}</div>
                <div className="absolute top-4 left-0   bg-red-500 p-1  font-bold  rounded-r-sm text-white text-sm">{`-${discount}%`}</div>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="self-end p-2">
        {cartItem ? (
          <button
            onClick={async () => {
              removeItem(product._id);
              const { data: session } = await authClient.getSession();
              if (!session) {
                addItem({
                  id: product._id,
                  name: product.title,
                  price: product.price?.value || 0,
                  imageUrl: product.highResolutionImages
                    ? product.highResolutionImages[0]
                    : product.thumbnailImage || "",
                  quantity: 1,
                });
                toast.error("Remove from cart Failed. Please Login first!");
                return redirect("/login");
              }
              toast.error("Item removed from cart.");
            }}
            // className="bg-black hover:bg-gray-800  py-2 text-white rounded-none  cursor-pointer"
            className="flex item-center justify-center w-fit rounded-full  p-2 bg-red-500 cursor-pointer"
          >
            <MdRemoveShoppingCart size={24} color="white" />
          </button>
        ) : (
          <button
            onClick={async () => {
              addItem({
                id: product._id,
                name: product.title,
                price: product.price?.value || 0,
                imageUrl: product.highResolutionImages
                  ? product.highResolutionImages[0]
                  : product.thumbnailImage || "",
                quantity: 1,
              });
              const { data: session } = await authClient.getSession();
              if (!session) {
                removeItem(product._id);
                toast.error("Add To Cart Failed. Please Login first!");
                return redirect("/login");
              }
              toast.success("Item added to cart!");
            }}
            // className="bg-brandBg hover:bg-blue-400  py-2 text-white rounded-none  cursor-pointer"
            className="flex item-center justify-center w-fit rounded-full  p-2 bg-brandBg cursor-pointer"
          >
            <FaCartPlus className="" size={24} color="white" />
            {/* <p className="text-white text-center font-bold ">Add to cart</p> */}
          </button>
        )}
      </div>
    </div>
  );
};
