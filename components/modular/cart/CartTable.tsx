import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productsFromAmazon } from "@/lib/AmazonDataSet";
import Image from "next/image";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function CartTable() {
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
        {productsFromAmazon.slice(20, 24).map((product) => (
          // <ProductCard product={product} key={product.title} />
          <TableRow key={product.title}>
            <TableCell className=" ">
              <div className="flex gap-4 items-center ">
                <Image
                  src={product.thumbnailImage}
                  alt={product.title}
                  width={100}
                  height={100}
                  className=" h-12 w-12 rounded-md"
                />
                {product.title.split(" ").slice(0, 2).join(" ")}
              </div>
            </TableCell>
            <TableCell className="font-medium">
              ${product.price?.value}
            </TableCell>
            <TableCell>
              <Input
                type="number"
                defaultValue={0}
                className="w-1/4 [&::-webkit-inner-spin-button]:opacity-100"
              />
            </TableCell>
            <TableCell>{product.price?.value}</TableCell>
          </TableRow>
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
