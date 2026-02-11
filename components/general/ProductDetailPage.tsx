"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { useCartStore } from "@/store/cart-store";
import { Document } from "mongoose";
import Link from "next/link";
import FavouriteHeartButton from "../modular/FavouriteHeartButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { HiOutlineBolt } from "react-icons/hi2";

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
  const [selectedImage, setSelectedImage] = useState(0);

  const { items, addItem, removeItem, increaseQuantity, decreaseQuantity } =
    useCartStore();
  const cartItem = items.find((item) => item.id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Calculate discount percentage
  const discountPercent =
    product.price?.value && product.listPrice?.value
      ? Math.round(
        ((product.listPrice.value - product.price.value) /
          product.listPrice.value) *
        100
      )
      : 0;

  // Get all display images
  const allImages = product.highResolutionImages?.length
    ? product.highResolutionImages
    : [product.thumbnailImage];

  const onAddItem = () => {
    const cartItem = items.find((i) => i.id === product._id);
    if (cartItem) {
      increaseQuantity(product._id);
    } else {
      addItem({
        id: product._id,
        name: product.title,
        price: product.price?.value || 0,
        imageUrl: allImages[0] || product.thumbnailImage || "",
        quantity: 1,
      });
    }
    toast.success("Added to cart");
  };

  const onRemoveItem = () => {
    const cartItem = items.find((i) => i.id === product._id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        decreaseQuantity(product._id);
      } else {
        removeItem(product._id);
        toast.success("Removed from cart");
      }
    }
  };

  const handleBuyNow = () => {
    // Add to cart if not already there
    const existingItem = items.find((i) => i.id === product._id);
    if (!existingItem) {
      addItem({
        id: product._id,
        name: product.title,
        price: product.price?.value || 0,
        imageUrl: allImages[0] || product.thumbnailImage || "",
        quantity: 1,
      });
    }
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/products"
            className="hover:text-primary transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-[200px]">
            {product.title.split(" ").slice(0, 3).join(" ")}
          </span>
        </nav>

        {/* Main Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left — Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail Strip */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[500px] pb-2 md:pb-0 md:pr-2">
              {allImages.slice(0, 5).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${selectedImage === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-primary/50"
                    }`}
                >
                  <Image
                    src={img}
                    fill
                    alt={`Product view ${index + 1}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square bg-muted/30 rounded-2xl overflow-hidden border border-border group">
              <Image
                src={allImages[selectedImage] || product.thumbnailImage}
                fill
                alt={product.title}
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {discountPercent > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  -{discountPercent}%
                </div>
              )}
              <div className="absolute top-4 right-4">
                <FavouriteHeartButton product={product} />
              </div>
            </div>
          </div>

          {/* Right — Product Info */}
          <div className="flex flex-col gap-5">
            {/* Brand */}
            {product.brand && (
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {product.brand}
              </span>
            )}

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {product.title}
            </h1>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={16}
                    className={
                      index < numStars
                        ? "text-yellow-400"
                        : "text-muted-foreground/30"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  ({numStars}/5)
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              {product.inStock ? (
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Stock
                </span>
              ) : (
                <span className="text-sm font-semibold text-red-500">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 pt-1">
              <span className="text-3xl font-extrabold text-foreground">
                ${product.price?.value}
              </span>
              {product.listPrice?.value &&
                product.listPrice.value !== product.price?.value && (
                  <span className="text-lg line-through text-muted-foreground mb-0.5">
                    ${product.listPrice.value}
                  </span>
                )}
              {discountPercent > 0 && (
                <span className="text-sm font-bold text-emerald-500 mb-1">
                  Save {discountPercent}%
                </span>
              )}
            </div>

            {/* Description */}
            <div className="border-t border-border pt-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description?.split(". ").slice(0, 3).join(". ") +
                  ((product.description?.split(". ").length ?? 0) > 3
                    ? "..."
                    : "") || "No description available."}
              </p>
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-col gap-4 pt-2">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground">
                  Quantity:
                </span>
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={onRemoveItem}
                    disabled={quantity === 0}
                    className="p-3 hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold text-sm tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={onAddItem}
                    className="p-3 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={onAddItem}
                  variant="outline"
                  className="flex-1 h-12 text-sm font-bold rounded-xl gap-2 border-primary text-primary hover:bg-primary/10 cursor-pointer"
                >
                  <FiShoppingCart size={18} />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleBuyNow}
                  className="flex-1 h-12 text-sm font-bold rounded-xl gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <HiOutlineBolt size={18} />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FaTruckFast size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Free Shipping
                  </p>
                  <p className="text-xs text-muted-foreground">
                    On orders over $50
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GrPowerCycle size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Free Returns
                  </p>
                  <p className="text-xs text-muted-foreground">
                    30-day return policy
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors sm:col-span-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <IoShieldCheckmarkOutline size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Secure Checkout
                  </p>
                  <p className="text-xs text-muted-foreground">
                    SSL encrypted payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
