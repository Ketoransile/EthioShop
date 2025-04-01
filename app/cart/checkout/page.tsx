import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { productsFromAmazon } from "@/lib/AmazonDataSet";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="grid grid-cols-2 gap-12 pt-20">
      <div className="w-2/3 flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">Billing Details</h1>
        <div className="flex flex-col gap-6 text-gray-500">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="" />
          <Label htmlFor="address">Street Address</Label>
          <Input type="text" id="address" placeholder="" />
          <Label htmlFor="apartment">Apartment, floor, etc.</Label>
          <Input type="text" id="apartment" placeholder="" />
          <Label htmlFor="city">Town/City</Label>
          <Input type="text" id="city" placeholder="" />
          <Label htmlFor="phone-number">Phone NUmber</Label>
          <Input type="text" id="phone-number" placeholder="" />
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="" />
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {productsFromAmazon.slice(20, 24).map((product) => (
          <div
            className="flex max-h-96 overflow-auto gap-4 items-center justify-between border-b border-b-gray-600 pb-6"
            key={product.title}
          >
            <div className="flex  items-center gap-4">
              <Image
                src={product.thumbnailImage}
                alt={product.title}
                width={100}
                height={100}
                className=" h-12 w-12 rounded-md"
              />
              <h1 className="text-lg font-semibold">
                {product.title.split(" ").slice(0, 2).join(" ")}
              </h1>
            </div>
            <h1 className="text-sm text-gray-500">${product.price?.value}</h1>
          </div>
        ))}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between py-2 border-b border-b-gray-600">
            <h1 className="text-gray-500">Subtotal</h1>
            <h1 className="text-gray-500">$200.00</h1>
          </div>
          <div className="flex justify-between py-2 border-b border-b-gray-600">
            <h1 className="text-gray-500">Shipping</h1>
            <h1 className="text-gray-500">$20.00</h1>
          </div>
          <div className="flex justify-between py-2 ">
            <h1 className="text-gray-500">Total</h1>
            <h1 className="text-gray-500">$220.00</h1>
          </div>
          <Button className="bg-brandBg w-fit py-2 mt-4">Place Order</Button>
        </div>
      </div>
    </div>
  );
}
