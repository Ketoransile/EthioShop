// import { ProductCard } from "../modular/ProductCard";
// import ProductsPagination from "./ProductsPagination";
// type ProductsListProps = {
//   filters: { [key: string]: string | string[] | undefined };
// };
// async function fetchProducts(filters: any) {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
//     const query = new URLSearchParams(filters).toString();
//     const url = `${baseUrl}/api/products/list?${query}`;
//     const response = await fetch(url, {
//       method: "GET",

//       cache: "no-store",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const status = response.status;
//       console.error(`Failed to fetch products.  Status: ${status}`);
//       return {
//         status,
//         data: null,
//         error: `Request failed with status ${status}`,
//       };
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return {
//       status: 500,
//       data: null,
//       error: error.message || "Unknown error",
//     };
//   }
// }

// export const ProductsList = async ({ filters }: ProductsListProps) => {
//   const data = await fetchProducts(filters);

//   if (data.status !== 200 || !data.data || data.data.length === 0) {
//     return <div className="">No Products found matching your criteria</div>;
//   }
//   const products = data.data;

//   return (
//     <div className="flex flex-col gap-4 ">
//       <div className="grid grid-cols-4 gap-10 gap-y-16 items-center justify-between pt-20">
//         {products.map((product) => (
//           // <Suspense fallback={<ProductCardSkeleton />} key={product._id}>
//           <ProductCard product={product} key={product.title} />
//           // </Suspense>
//         ))}
//       </div>{" "}
//       <ProductsPagination totalItems={totalProductsCount} />
//     </div>
//   );
// };
import { Suspense } from "react";
import { ProductCard } from "../modular/ProductCard";
import ProductsPagination from "./ProductsPagination";

type ProductsListProps = {
  filters: { [key: string]: string | string[] | undefined };
};
const limit = 10;
async function fetchProducts(filters) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const query = new URLSearchParams(filters).toString();
    const url = `${baseUrl}/api/products/list?limit=${limit}&${query}`;
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const status = response.status;
      return {
        status,
        data: null,
        error: `Request failed with status ${status}`,
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      status: 500,
      data: null,
      error: error.message || "Unknown error",
    };
  }
}

export const ProductsList = async ({ filters }: ProductsListProps) => {
  const data = await fetchProducts(filters);

  if (data.status !== 200 || !data.data || data.data.length === 0) {
    return <div className="">No Products found matching your criteria</div>;
  }

  const products = data.data;
  const { currentPage, totalPages } = data.pagination;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-5 gap-10 gap-y-16 items-center justify-between pt-20">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsPagination currentPage={currentPage} totalPages={totalPages} />
      </Suspense>
    </div>
  );
};
