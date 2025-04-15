import HomePageFeaturesList from "@/components/general/HomePageFeaturesList";
import AboutPageCards from "@/components/modular/AboutPageCards";
import { AboutPageCarousel } from "@/components/modular/AboutPageCarousel";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pt-20">
      <div className="flex max-lg:flex-col  gap-64 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-7xl font-bold max-lg:text-center">Our Story</h1>
            <div className="flex flex-col gap-2"></div>
            <p className="text-md text-gray-600 max-lg:text-center">
              Launced in 2015, EthioShop is Ethiopia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region.{" "}
            </p>
            <p className="text-md text-gray-600 max-lg:text-center">
              EthioShop has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <Image
          src="/aboutPageImage.jpg"
          width={800}
          height={800}
          alt="about-page-image"
          className="-mx-20 rounded-l-xl max-lg:hidden"
        />
      </div>
      <AboutPageCards />
      <AboutPageCarousel />
      <HomePageFeaturesList />
    </div>
  );
}
