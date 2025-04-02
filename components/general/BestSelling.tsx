import { dummyCategories } from "@/lib/dummyData";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { productsFromAmazon } from "@/lib/AmazonDataSet";
import { ProductCard } from "../modular/ProductCard";
export const BestSellingList = () => {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <div className="flex gap-2 items-center">
        <TbRectangleVerticalFilled size={24} className="text-blue-500" />
        <h1 className="text-sm text-blue-500 font-bold">This Month</h1>
      </div>
      <h1 className="text-4xl font-semibold">Best Selling Products</h1>

      <div className="grid grid-cols-5 gap-6 gap-y-16 items-center justify-between pt-20">
        {productsFromAmazon.slice(0, 5).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
};
