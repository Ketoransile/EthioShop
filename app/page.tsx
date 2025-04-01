import { BestSellingList } from "@/components/general/BestSelling";
import { CategoriesList } from "@/components/general/CategoriesList";
import { HeroSlider } from "@/components/general/HeroSlider";
import { HomePageFeatured } from "@/components/general/HomePageFeatured";
import HomePageFeaturesList from "@/components/general/HomePageFeaturesList";
import { HomePageProductsList } from "@/components/general/HomePageProductsList";
import { HomePageMusic } from "@/components/modular/HomePageMusic";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategoriesList />
      <BestSellingList />
      <HomePageMusic />
      <HomePageProductsList />
      <HomePageFeatured />
      <HomePageFeaturesList />
    </>
  );
}
