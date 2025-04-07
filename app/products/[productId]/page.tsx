import ProductsDetailPage from "@/components/general/ProductDetailPage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

async function getProduct(productId: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/products/${productId}`, {
    method: "GET",
    cache: "no-store",
    // credentials: "include",d
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // console.log("Response from getProduct function", data);
  if (!res.ok) {
    console.error("Error occurred while fetching a product");
    return null;
  }
  // const data = await res.json();
  // console.log("Product response from getProduct function", data);
  return data; // Return just the data, not the entire Axios response
}
export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // Don't await the data fetching function
  const { productId } = await params;
  console.log("productid is: ", productId);
  const response = await getProduct(productId);
  console.log("Response Object:", response);
  const product = response.data; // Extract the product data from the response object
  if (
    response.status === 404 ||
    response.status === 500 ||
    response.data === null
  ) {
    return (
      <div className="flex flex-col items-center justify-center gap-12 pt-32">
        <h1 className="text-7xl font-bold">404 Not Found</h1>
        <p className="text-lg">Product not found. You may go home page.</p>
        <Link href="/" className="">
          <Button className="bg-red-500 py-2 lg:w-md cursor-pointer hover:bg-red-400 text-white rounded-md">
            Back to home page
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      // <Suspense fallback={<div>Loading...</div>}>
      <ProductsDetailPage product={product} />
      // </Suspense>
    );
  }
}
