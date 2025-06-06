import { BestSellingList } from "@/components/general/BestSelling";
import { CategoriesList } from "@/components/general/CategoriesList";
import { HeroSlider } from "@/components/general/HeroSlider";
import { HomePageFeatured } from "@/components/general/HomePageFeatured";
import HomePageFeaturesList from "@/components/general/HomePageFeaturesList";
import { HomePageProductsList } from "@/components/general/HomePageProductsList";
import { HomePageMusic } from "@/components/modular/HomePageMusic";
import BestSellingSkeleton from "@/components/skeletons/BestSellingSkeleton";
import HomePageProductsListSekeleton from "@/components/skeletons/HomePageProductsListSekeleton";
// import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="max-lg:hidden">
        <HeroSlider />
      </div>
      {/* <div className="lg:hidden flex justify-center -mx-4 md:-mx-12 ">
        <Image
          src="/leonardo/img3.jpg"
          width={800}
          height={800}
          alt="homepage-image"
          className="rounded-xl "
        />
      </div> */}

      <CategoriesList />
      <Suspense fallback={<BestSellingSkeleton />}>
        <BestSellingList />
      </Suspense>
      <HomePageMusic />
      <Suspense fallback={<HomePageProductsListSekeleton />}>
        <HomePageProductsList />
      </Suspense>
      <HomePageFeatured />
      <HomePageFeaturesList />
    </>
  );
}
