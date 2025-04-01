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
  return (
    <div className="flex flex-col ">
      <div className="relative py-6  flex items-center justify-center  rounded-t-xl  bg-gray-100">
        <Image
          src={product.thumbnailImage}
          width={100}
          height={100}
          alt={product.title}
          className="w-40 h-40 onject-contain"
        />
        <CiHeart size={24} className="absolute top-4 right-4" />
        {isDiscounted && (
          <div className="absolute top-4 left-4 bg-red-500 px-2 py-1 rounded-md text-white">{`-${discount}%`}</div>
        )}
      </div>

      <div className="flex flex-col gap-2 pt-4 pb-4">
        <p className="font-bold">
          {product.title.split(" ").slice(0, 4).join(" ")}
        </p>
        <div className="flex gap-4 ">
          <p className="text-brandBg font-bold">${product.price?.value}</p>
          <p className="text-slate-400 line-through">
            ${product.listPrice?.value}
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < numStars ? (
                  <FaStar size={20} className="text-yellow-400" />
                ) : (
                  <FaStar size={20} className="text-slate-200" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button className="bg-brandBg hover:bg-blue-400  py-2 text-white rounded-none rounded-b-xl cursor-pointer">
        <p className="text-white text-center font-bold ">Add to cart</p>
      </Button>
    </div>
  );
};
