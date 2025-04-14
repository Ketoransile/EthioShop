import Filter from "@/components/general/Filter";
import { ProductsList } from "@/components/general/ProductsList";
import { Suspense } from "react";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function ProductsPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const selectedCategory = searchParams.category || "Products";

  return (
    <div className="pt-10 relative">
      {/* <div className="-mt-20 w-full flex items-center justify-center rounded-xl">
        <Image
          src="/leonardo/img1.jpg"
          width={500}
          height={500}
          className="w-64 h-64 rounded-bl-2xl "
          alt="img1"
          // width={300}
          // height={300}
        />
        <Image
          src="/leonardo/img2.jpg"
          alt="img1"
          width={500}
          height={500}
          className="w-64 h-64"
        />
        <Image
          src="/leonardo/img3.jpg"
          alt="img1"
          width={500}
          height={500}
          className="w-64 h-64"
        />
        <Image
          src="/leonardo/img4.jpg"
          alt="img1"
          width={500}
          height={500}
          className="w-64 h-64 rounded-br-xl"
        />
      </div> */}
      {/* FIlter */}{" "}
      <Suspense fallback={<div>Loading...</div>}>
        <Filter />
      </Suspense>
      <h1 className="mt-20 font-semibold text-2xl">
        <span className="text-blue-500 font-bold">{selectedCategory}</span> For
        You
      </h1>
      {/* Products List */}
      <ProductsList filters={searchParams} />
    </div>
  );
}
