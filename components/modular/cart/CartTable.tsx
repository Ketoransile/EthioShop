import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";import { Checkbox } from "@/components/ui/checkbox"
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartItem, useCartStore } from "@/store/cart-store";
import Image from "next/image";
// import { useState } from "react";

export function CartTable() {
  const { items } = useCartStore();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="">Subtotal</TableHead>
          <TableHead className="">Select</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item: CartItem) => (
          <CartTableRow item={item} key={item.id} />
        ))}
      </TableBody>
    </Table>
  );
}

function CartTableRow({ item }: { item: CartItem }) {
  const { items, addItem, removeItem, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const subTotal = parseFloat((item.price * item.quantity).toFixed(2));

  const handleIncreaseQuantity = (item: CartItem, itemId: string) => {
    const cartItem = items.find((i) => i.id === itemId);
    if (cartItem) {
      increaseQuantity(itemId);
    } else {
      addItem(item);
    }
  };

  const handleDecreaseQuantity = (itemId: string) => {
    const cartItem = items.find((i) => i.id === itemId);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        decreaseQuantity(itemId);
      } else {
        removeItem(itemId);
      }
    }
  };

  return (
    <TableRow>
      <TableCell>
        <div className="flex max-lg:flex-col gap-4 lg:items-center">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={100}
            height={100}
            className="h-12 w-12 rounded-md"
          />
          {item.name.split(" ").slice(0, 2).join(" ")}
        </div>
      </TableCell>
      <TableCell className="font-medium">${item.price}</TableCell>
      <TableCell className="flex item-center">
        <Button
          className="rounded-none rounded-l-xl bg-gray-200 cursor-pointer text-black hover:text-white"
          onClick={() => handleDecreaseQuantity(item.id)}
        >
          -
        </Button>

        <div className="lg:w-10 text-center my-auto border-gray-500">
          {item.quantity}
        </div>
        <Button
          className="rounded-none rounded-r-xl bg-brandBg cursor-pointer"
          onClick={() => handleIncreaseQuantity(item, item.id)}
        >
          +
        </Button>
      </TableCell>
      <TableCell>${subTotal}</TableCell>
      <TableCell>
        <Checkbox />
      </TableCell>
    </TableRow>
  );
}
