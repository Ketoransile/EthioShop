"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";

const OrderOverviewCard = ({ order }) => {
  const trimText = (text, maxWords = 4, maxChars = 30) => {
    if (!text) return "";
    const words = text.split(" ").slice(0, maxWords).join(" ");
    return words.length > maxChars
      ? `${words.substring(0, maxChars - 3)}...`
      : words;
  };
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white  p-10 max-h-[800px] hover:shadow-lg hover:drop-shadow-sm hover:shadow-blue-500 shadow-none ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-400 font-sm">Order ID</h1>
          <h2 className="text-black text-xl font-bold italic">#{order._id}</h2>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="text-gray-400 border   text-xs p-2 border-gray-300 rounded-full">
            Estimated Arrival: 28 may 2025
          </div>
          <Button
            variant="outline"
            className="bg-green-100 border-none text-green-600 rounded-full text-xs"
          >
            On Deliver
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 max-h-48 gap-10  p-2 pb-10   overflow-y-auto border border-gray-300 rounded-2xl">
        {order.products.map((product) => (
          <div className="flex gap-4 items-center " key={product.productId}>
            <Image
              src={`${product.imageUrl}`}
              alt="product"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
            <div className="flex flex-col gap-1 text-sm">
              <h1 className="text-sm">{trimText(product.name, 4, 30)}</h1>
              <div className="flex gap-1">
                <h2 className="text-md">${product.price}</h2>
                <h3 className="text-gray-400">x{product.quantity}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="-m-10 bg-gray-200 border-gray-700 max-h-32 px-2 py-4 flex items-center justify-between rounded-2xl rounded-t-none ">
        <div className="flex items-center gap-2 pl-10 ">
          <div className="font-bold text-xl">
            ${order.totalAmount.toFixed(2)}
          </div>
          <p className="text-gray-400 text-md">
            ({order.products.length}) items
          </p>
        </div>
        <div className="pr-10">
          <Button
            className="bg-black rounded-full cursor-pointer px-6 "
            onClick={() => {
              toast.success("Not implemented yet. Stay Tuned!!");
            }}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderOverviewCard;
