// const revalidate = 60;
// import { productsFromAmazon } from "@/lib/AmazonDataSetWithId";
// import { dummyCategories } from "@/lib/dummyData";
import Link from "next/link";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { ProductCard } from "../modular/ProductCard";
import { Button } from "../ui/button";
import connectDB from "@/lib/db";

async function fetchHomePageProducts() {
  try {
    await connectDB();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/list`, {
      method: "GET",
      cache: "no-store",
      // next: { revalidate: revalidate },
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (!response.ok) {
      const status = response.status;
      console.error(`Failed to fetch products. Status: ${status}`);
      return {
        status,
        data: null,
        error: `Request failed with status ${status}`,
      };
    }
    const data = await response.json();
    // console.log("data from backnd converted using ,json method is :", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      status: 500,
      data: null,
      error: error.message || "Unknown error",
    };
  }
}

export const HomePageProductsList = async () => {
  const data = await fetchHomePageProducts();
  console.log("Data from hompaegproduct list", data);
  // if (data.status === 404 || data.status === 500 || data.data === null) {
  //   return <div className="">No Products found</div>;
  // }
  if (data.status !== 200 || !data.data || data.data.length === 0) {
    return <div className="">No Products found</div>;
  }

  const products = data.data;
  return (
    <div className="flex flex-col gap-4 pt-20">
      <div className="flex gap-2 items-center">
        <TbRectangleVerticalFilled size={24} className="text-blue-500" />
        <h1 className="text-sm text-blue-500 font-bold">Our Products</h1>
      </div>
      <h1 className="text-4xl font-semibold">Explore our products</h1>

      <div className="grid grid-cols-5 gap-6 gap-y-16 items-center justify-between pt-20">
        {products.slice(10, 22).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
      <Link href="/products" className="pt-10 self-center">
        <Button className="bg-brandBg w-fit text-white px-20 py-6 my-10 cursor-pointer">
          View All Products
        </Button>
      </Link>
    </div>
  );
};
