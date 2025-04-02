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
        {/* {productsFromAmazon.slice(20, 24).map((product) => (
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
        ))} */}
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
          <div className="flex flex-col gap-6">
            <form className="flex flex-col gap-6">
              <h1 className="text-2xl font-semibold">Payment Information</h1>
              <div className="w-1/3 flex flex-col gap-0.5 px-2  border-2 border-brandBg rounded-md">
                <Image
                  src="/credit-card.png"
                  width={32}
                  height={32}
                  alt="mastercard_image"
                />
                <h1 className="text-md">Card</h1>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name-on-card">Name on Card</Label>
                  <Input
                    type="text"
                    id="name-on-card"
                    placeholder="First Last"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input
                    type="text"
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className=" flex gap-12 items-center justify-between">
                  <div className="w-1/2 flex flex-col gap-2">
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input type="text" id="expiry-date" placeholder="MM/YY" />
                  </div>
                  <div className="flex w-1/2 flex-col gap-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input type="text" id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-between items-center w-full ">
            <Button className="bg-gray-200 text-black w-1/3 py-2 mt-4">
              Back
            </Button>
            <Button className="bg-brandBg w-1/3 py-2 mt-4">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
