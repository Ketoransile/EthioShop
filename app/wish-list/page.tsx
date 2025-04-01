import { ProductCard } from "@/components/modular/ProductCard";
import { Button } from "@/components/ui/button";
import { productsFromAmazon } from "@/lib/AmazonDataSet";

export default function WishListPage() {
  return (
    <div className="flex flex-col pt-20 gap-20">
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">WishList(4)</span>
        <Button className="bg-transparent text-black px-6 py-2 border border-gray-500 rounded-md">
          Move All To Bag
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-6 gap-y-16 items-center justify-between ">
        {productsFromAmazon.slice(12, 20).map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  );
}
