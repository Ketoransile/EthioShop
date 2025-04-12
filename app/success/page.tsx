"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className=" flex flex-col items-center gap-6 justify-center bg-white p-12 rounded-xl shadow-lg max-w-2xl mx-4">
        <Image
          src="/checklist.png"
          width={64}
          height={64}
          alt="checklist-image"
        />
        <h1 className="text-4xl font-bold  text-center border-b border-b-gray-300 pb-4">
          Thank you for Your Order!
        </h1>
        <p>Your order has been confirmed and will be shipped shortly.</p>
        <div className="space-y-2">
          {orderNumber && (
            <p className="text-gray-600 flex items-center space-x-5">
              <span>Order number</span>
              <span className="font-mono text-sm text-brandBg">
                {orderNumber}
              </span>
            </p>
          )}
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            A confirmation email has been sent to your registered email address
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-brandBg hover:bg-blue-400">
              <Link href="/my-orders">View Orders </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
