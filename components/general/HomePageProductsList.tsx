export const dynamic = "force-dynamic";
import Link from "next/link";
import { ProductCard } from "../modular/ProductCard";
import { Button } from "../ui/button";
import connectDB from "@/lib/db";

// Define simplified Interface
interface Product {
  _id: string;
  title: string;
  thumbnailImage: string;
  price?: { value: number };
  listPrice?: { value: number };
  stars: number;
  highResolutionImages?: string[];
  [key: string]: unknown;
}

interface ApiResponse {
  status: number;
  data: Product[] | null;
}

async function fetchHomePageProducts(): Promise<ApiResponse> {
  try {
    await connectDB();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/list?limit=0`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) return { status: response.status, data: null };
    return await response.json();
  } catch {
    return { status: 500, data: null };
  }
}

export const HomePageProductsList = async () => {
  const data = await fetchHomePageProducts();

  if (data.status !== 200 || !data.data || data.data.length === 0) {
    return null;
  }

  const products = data.data;

  return (
    <div className="flex flex-col gap-12 py-16 px-4 md:px-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-4 bg-primary rounded-sm" />
          <span className="font-bold text-primary">Our Products</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Explore Our Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.slice(15, 25).map((product) => (
          <ProductCard product={product} key={product._id || product.title} />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Link href="/products">
          <Button size="lg" className="px-8 min-w-[200px] font-semibold text-lg h-12">
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};
