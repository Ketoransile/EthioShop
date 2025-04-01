import { CartTable } from "@/components/modular/cart/CartTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  return (
    <div className="flex flex-col gap-16 pt-20">
      <CartTable />
      <div className="flex items-center justify-between text-white">
        <Button
          variant="outline"
          className="w-fit py-2 px-6 bg-red-500 cursor-pointer"
        >
          Return To Shop
        </Button>
        <Button
          variant="outline"
          className="w-fit cursor-pointer py-2 px-6 bg-brandBg"
        >
          Update Cart
        </Button>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex gap-4">
          <Input type="text" placeholder="Coupon Code" className="w-1/2" />
          <Button className="bg-brandBg">Apply Coupon</Button>
        </div>
        <div className="w-1/3 border border-gray-600 px-4 py-6 rounded-md">
          <div className="flex flex-col gap-6">
            <h1 className="text-black font-bold">Cart Total</h1>
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
            <Button className="bg-brandBg w-full py-2 mt-4">
              Proceed To Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
