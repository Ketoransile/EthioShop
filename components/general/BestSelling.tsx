export const dynamic = "force-dynamic";

import { ProductCard } from "../modular/ProductCard";
// Define a simplified local interface just for this component to avoid 'any'
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

// Ensure the return type matches the expected structure of the API response
interface ApiResponse {
  status: number;
  data: Product[] | null;
}

async function fetchBestSellings(): Promise<ApiResponse> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/list`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return { status: response.status, data: null };
    }
    return await response.json();
  } catch {
    // Avoid unused 'error' variable
    return { status: 500, data: null };
  }
}

export const BestSellingList = async () => {
  const data = await fetchBestSellings();

  if (data.status !== 200 || !data.data || data.data.length === 0) {
    return null; // Don't show empty section
  }

  const products = data.data;

  return (
    <div className="flex flex-col gap-8 py-16 px-4 md:px-0">
      <div className="flex flex-col gap-2 relative">
        <div className="flex items-center gap-2">
          <div className="h-8 w-4 bg-primary rounded-sm" />
          <span className="font-bold text-primary">This Month</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Best Selling Products</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.slice(0, 5).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};
