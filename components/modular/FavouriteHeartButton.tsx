"use client";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { toast } from "sonner";
import { useWishStore } from "@/store/wishlist-store";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const FavouriteHeartButton = ({ product }) => {
  const { wishItems, addToWish, removeFromWish } = useWishStore();
  const isWishItem = wishItems.some((item) => item._id === product._id);

  return isWishItem ? (
    <button
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();
        removeFromWish(product);

        const { data: session } = await authClient.getSession();
        if (!session) {
          addToWish(product);
          toast.error("Please login to manage wishlist");
          return redirect("/login");
        }

        return toast.success("Item removed from wishlist successfully!!");
      }}
      className="flex item-center justify-center w-fit rounded-full p-2 cursor-pointer"
      aria-label="Remove from wishlist"
    >
      <FaHeart size={24} color="red" />
    </button>
  ) : (
    <button
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();
        addToWish(product);

        const { data: session } = await authClient.getSession();
        if (!session) {
          removeFromWish(product);
          toast.error("Please login to manage wishlist");
          return redirect("/login");
        }

        return toast.success("Item added to wish list successfully!!");
      }}
      className="flex item-center justify-center w-fit rounded-full p-2 cursor-pointer"
      aria-label="Add to wishlist"
    >
      <CiHeart size={24} />
    </button>
  );
};

export default FavouriteHeartButton;
