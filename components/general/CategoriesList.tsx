import { dummyCategories } from "@/lib/dummyData";
import Link from "next/link";
import { TbRectangleVerticalFilled } from "react-icons/tb";
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

      <div className="grid grid-cols-3 w-full gap-y-4 justify-between lg:flex items-center  pt-20 ">
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
    </div>
  );
};
