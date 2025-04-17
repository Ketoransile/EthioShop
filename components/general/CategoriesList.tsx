import { dummyCategories } from "@/lib/dummyData";
import Link from "next/link";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { CategoriesListMobileCarousel } from "./CategoriesListMobileCarousel";
export const CategoriesList = () => {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <div className="flex gap-2 items-center">
        <TbRectangleVerticalFilled size={24} className="text-blue-500" />
        <h1 className="text-sm text-blue-500 font-bold">Categories</h1>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold">
        Browse By Categories
      </h1>

      <div className="hidden lg:grid grid-cols-4 lg:grid-cols-6 items-center gap-2     pt-20 ">
        {dummyCategories.map((category, index) => (
          <Link
            href={`/products${category.href}`}
            className="flex flex-col gap-4 w-32 lg:w-48 justify-between items-center border border-slate-300 p-10 rounded-md shadow-xl hover:bg-brandBg hover:text-white cursor-pointer"
            key={index}
          >
            <category.image size={32} />

            <p>{category.name}</p>
          </Link>
        ))}
      </div>
      <div className="w-full mx-auto lg:hidden">
        <CategoriesListMobileCarousel />
      </div>
    </div>
  );
};
