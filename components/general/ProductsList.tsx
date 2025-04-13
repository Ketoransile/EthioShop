import { ProductCard } from "../modular/ProductCard";

async function fetchProducts() {
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
}

export const ProductsList = async () => {
  const data = await fetchProducts();

  if (data.status !== 200 || !data.data || data.data.length === 0) {
    return <div className="">No Products found matching your criteria</div>;
  }
  const products = data.data;

  return (
    <div className="flex flex-col gap-4 ">
      <div className="grid grid-cols-5 gap-10 gap-y-16 items-center justify-between pt-20">
        {products.slice(0, 20).map((product) => (
          // <Suspense fallback={<ProductCardSkeleton />} key={product._id}>
          <ProductCard product={product} key={product.title} />
          // </Suspense>
        ))}
      </div>
    </div>
  );
};
