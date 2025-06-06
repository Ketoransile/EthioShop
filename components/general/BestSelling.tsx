export const dynamic = "force-dynamic";
import { TbRectangleVerticalFilled } from "react-icons/tb";

import { ProductCard } from "../modular/ProductCard";

async function fetchBestSellings() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/products/list`, {
      method: "GET",
      // next: { revalidate: revalidate },
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(response);
    if (!response.ok) {
      const status = response.status;
      console.error(`Failed to fetch products.  Status: ${status}`);
      return {
        status,
        data: null,
        error: `Request failed with status ${status}`,
      };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      status: 500,
      data: null,
      error: error.message || "Unknown error",
    };
  }
  // console.log("data from bessellinf: 0", data);
}

export const BestSellingList = async () => {
  const data = await fetchBestSellings();

  if (data.status !== 200 || !data.data || data.data.length === 0) {
    return <div className="">No Products found</div>;
  }
  const products = data.data;

  return (
    <div className="flex flex-col gap-4 pt-20">
      <div className="flex gap-2 items-center">
        <TbRectangleVerticalFilled size={24} className="text-blue-500" />
        <h1 className="text-sm text-blue-500 font-bold">This Month</h1>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold">
        Best Selling Products
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 gap-y-16 items-center justify-between pt-20">
        {products.slice(0, 10).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};
