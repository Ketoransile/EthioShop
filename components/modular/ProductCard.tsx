import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
export const ProductCard = ({ product }) => {
  const numStars = Math.floor(product.stars) || 0;
  const listPrice = product.listPrice?.value || 0;
  const price = product.price?.value || 0;
  const discount =
    listPrice > price ? Math.floor(((listPrice - price) / listPrice) * 100) : 0;
  const isDiscounted = discount > 0;
  const truncateTitle = (title: string): string => {
    return title.length > 30 ? title.substring(0, 20) + "..." : title;
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="relative py-6  flex items-center justify-center    bg-gray-100">
        <Image
          src={product.thumbnailImage}
          width={200}
          height={200}
          alt={product.title}
          className="h-40 w-40 object-contain object-center"
        />
        <CiHeart size={24} className="absolute top-4 right-4" />
      </div>

      <div className="w-full flex flex-col  pt-4 pb-4 ">
        <p className="font-bold text-sm">
          {truncateTitle(product.title.split(" ").slice(0, 4).join(" "))}
        </p>
        <div className="w-full grid grid-cols-2 gap-y-2 justify-between items-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < numStars ? (
                  <FaStar size={12} className="text-yellow-400" />
                ) : (
                  <FaStar size={12} className="text-slate-200" />
                )}
              </span>
            ))}
          </div>
          <p className="text-sm font-bold">{`(${product.stars})`}</p>
          <p className=" font-bold col-span-2 text-2xl">
            ${product.price?.value}
          </p>
          <p className="text-slate-400 line-through">
            ${product.listPrice?.value}
          </p>
          {isDiscounted && (
            <div className="w-fit self-end  bg-red-500 px-2  rounded-sm text-white text-sm">{`-${discount}%`}</div>
          )}
        </div>
      </div>

      <Button className="bg-brandBg hover:bg-blue-400  py-2 text-white rounded-none  cursor-pointer">
        <p className="text-white text-center font-bold ">Add to cart</p>
      </Button>
    </div>
  );
};
