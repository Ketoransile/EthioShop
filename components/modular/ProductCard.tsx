"use client";
import Image from "next/image";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useCartStore } from "@/store/cart-store";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import FavouriteHeartButton from "./FavouriteHeartButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Define simplified local interface
interface Product {
  _id: string;
  title: string;
  thumbnailImage: string;
  price?: { value: number };
  listPrice?: { value: number };
  stars: number;
  highResolutionImages?: string[];
  [key: string]: unknown;
}

export const ProductCard = ({ product }: { product: Product }) => {
  const { items, removeItem, addItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product._id);
  const numStars = Math.floor(product?.stars) || 0;
  const listPrice = product.listPrice?.value || 0;
  const price = product.price?.value || 0;

  // Calculate discount percentage
  const discount =
    listPrice > price
      ? Math.round(((listPrice - price) / listPrice) * 100)
      : 0;

  const isDiscounted = discount > 0;

  // Handler for adding/removing from cart
  const handleCartAction = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const { data: session } = await authClient.getSession();
    if (!session) {
      toast.error("Please login to manage cart!");
      return redirect("/login");
    }

    if (cartItem) {
      removeItem(product._id);
      toast.info("Removed from cart");
    } else {
      addItem({
        id: product._id,
        name: product.title,
        price: product.price?.value || 0,
        imageUrl: product.highResolutionImages?.[0] || product.thumbnailImage || "",
        quantity: 1,
      });
      toast.success("Added to cart");
    }
  };

  return (
    <div className="group relative w-full h-full flex flex-col rounded-xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
      <Link href={`/products/${product._id}`} className="flex-1 flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
          <Image
            src={product.thumbnailImage}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />

          {/* Discount Badge */}
          {isDiscounted && (
            <Badge variant="destructive" className="absolute top-3 left-3 px-2 py-1 text-xs font-bold shadow-md">
              -{discount}%
            </Badge>
          )}

          {/* Quick Actions Overlay (Desktop) */}
          <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            <div className="bg-background/80 backdrop-blur-md rounded-full shadow-sm hover:bg-background transition-colors">
              <FavouriteHeartButton product={product} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1 justify-between">
          <div className="space-y-1.5">
            <h3 className="font-semibold leading-tight tracking-tight line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
              {product.title}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className={i < numStars ? "fill-current" : "text-muted"} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-1">({product.stars})</span>
            </div>
          </div>

          <div className="space-y-3">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight text-primary">
                ${price.toLocaleString()}
              </span>
              {isDiscounted && (
                <span className="text-sm text-muted-foreground line-through decoration-muted-foreground/50">
                  ${listPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              size="sm"
              className={`w-full gap-2 transition-all duration-300 ${cartItem ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground" : "hover:bg-primary/90"}`}
              variant={cartItem ? "destructive" : "default"}
              onClick={handleCartAction}
            >
              {cartItem ? (
                <>
                  <MdRemoveShoppingCart size={16} /> Remove
                </>
              ) : (
                <>
                  <FaCartPlus size={16} /> Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};
