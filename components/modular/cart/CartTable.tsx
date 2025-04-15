import { Input } from "@/components/ui/input";
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
import { useState } from "react";

export function CartTable() {
  const { items } = useCartStore();

  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {invoices.map((invoice) => ( */}
        {items.map((item: CartItem) => (
          // <ProductCard item={item} key={item.title} />
          <CartTableRow item={item} key={item.id} />
        ))}
        {/* ))} */}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}

function CartTableRow({ item }: { item: CartItem }) {
  const { removeItem } = useCartStore();
  const { updateItemQuantity } = useCartStore();
  const [quantity, setQuantity] = useState(item.quantity);
  const subTotal = parseFloat((item.price * item.quantity).toFixed(2));
  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Math.max(0, parseInt(e.target.value) || 0);
    setQuantity(newQuantity);
    if (newQuantity === 0) {
      removeItem(item.id);
    }
    updateItemQuantity(item.id, newQuantity);
  };
  return (
    <TableRow key={item.name}>
      <TableCell className=" ">
        <div className="flex max-lg:flex-col gap-4 lg:items-center ">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={100}
            height={100}
            className=" h-12 w-12 rounded-md"
          />
          {item.name.split(" ").slice(0, 2).join(" ")}
        </div>
      </TableCell>
      <TableCell className="font-medium">${item.price}</TableCell>
      <TableCell>
        <Input
          type="number"
          value={quantity}
          onChange={onQuantityChange}
          className="max-w-20 max-h-20 [&::-webkit-inner-spin-button]:opacity-100"
        />
      </TableCell>
      <TableCell>${subTotal}</TableCell>
    </TableRow>
  );
}
