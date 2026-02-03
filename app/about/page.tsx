import HomePageFeaturesList from "@/components/general/HomePageFeaturesList";
import AboutPageCards from "@/components/modular/AboutPageCards";
import { AboutPageCarousel } from "@/components/modular/AboutPageCarousel";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pt-10">

      {/* Hero Section / Our Story */}
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Our Story</h1>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Launched in 2015, EthioShop is Ethiopia&apos;s premier online
              shopping marketplace. Supported by a wide range of tailored marketing, data, and service
              solutions, EthioShop serves 3 million customers across the region.
            </p>
            <p>
              With over 1 million products on offer and growing fast, we provide a diverse assortment
              in categories ranging from consumer electronics to fashion, ensuring you find exactly what you need.
            </p>
            <p>
              Our mission is to empower local sellers and connect them with millions of customers,
              creating economic opportunity for everyone.
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden bg-muted shadow-2xl">
          <Image
            src="/aboutPageImage.jpg"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Stats Cards */}
      <AboutPageCards />

      {/* Team / Carousel */}
      <AboutPageCarousel />

      {/* Features */}
      <HomePageFeaturesList />
    </div>
  );
}
