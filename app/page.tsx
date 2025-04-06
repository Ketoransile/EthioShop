import { BestSellingList } from "@/components/general/BestSelling";
import { CategoriesList } from "@/components/general/CategoriesList";
import { HeroSlider } from "@/components/general/HeroSlider";
import { HomePageFeatured } from "@/components/general/HomePageFeatured";
import HomePageFeaturesList from "@/components/general/HomePageFeaturesList";
import { HomePageProductsList } from "@/components/general/HomePageProductsList";
import { HomePageMusic } from "@/components/modular/HomePageMusic";
import BestSellingSkeleton from "@/components/skeletons/BestSellingSkeleton";
import HomePageProductsListSekeleton from "@/components/skeletons/HomePageProductsListSekeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <HeroSlider />
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
