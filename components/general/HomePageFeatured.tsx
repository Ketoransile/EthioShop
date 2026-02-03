import asus from "../../assets/computers/asus.jpg";
import samsung from "../../assets/computers/samsung.jpg";
import iphone1 from "../../assets/phones/iphone1.jpg";
import galaxywatch1 from "../../assets/smartwatch/galaxywatch1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const HomePageFeatured = () => {
  return (
    <div className="flex flex-col gap-8 py-12 md:py-20 px-4 md:px-0">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <div className="h-8 w-4 bg-primary rounded-sm" />
          <span className="font-bold text-primary">Featured</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[600px] h-auto lg:h-[600px]">
        {/* Main large item - iPhone */}
        <div className="bg-black text-white rounded-3xl relative overflow-hidden group col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 border border-white/10 shadow-2xl">
          <Link href="/products?category=smartphone" className="block h-full w-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end items-start transition-opacity duration-300">
              <h3 className="text-3xl font-bold mb-2">iPhone 15 Pro Max</h3>
              <p className="text-gray-300 mb-4 line-clamp-2 max-w-sm">Titanium design. A17 Pro chip. The most powerful iPhone ever built.</p>
              <Button variant="link" className="text-white p-0 h-auto underline decoration-2 underline-offset-4 hover:text-primary transition-colors">
                Shop Collection
              </Button>
            </div>
            <Image
              src={iphone1}
              alt="iPhone 15"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Secondary item - Smartwatch */}
        <div className="bg-zinc-900 rounded-3xl relative overflow-hidden group col-span-1 lg:col-span-2 row-span-1 border border-white/10 shadow-xl">
          <Link href="/products?category=smartwatch" className="block h-full w-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent p-8 flex flex-col justify-center items-start">
              <h3 className="text-2xl font-bold text-white mb-2">Galaxy Watch 6</h3>
              <p className="text-gray-300 text-sm mb-4 max-w-[200px]">Advanced sleep coaching and heart monitoring.</p>
              <span className="text-white font-medium group-hover:text-primary transition-colors">View Details &rarr;</span>
            </div>
            <Image
              src={galaxywatch1}
              alt="Galaxy Watch"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 origin-right"
            />
          </Link>
        </div>

        {/* Small items - Computers */}
        <div className="bg-zinc-900 rounded-3xl relative overflow-hidden group col-span-1 row-span-1 border border-white/10 shadow-lg min-h-[250px]">
          <Link href="/products?category=computer" className="block h-full w-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end items-start">
              <h3 className="text-xl font-bold text-white">Asus ZenBook</h3>
              <p className="text-gray-400 text-xs mt-1">OLED Display</p>
            </div>
            <Image
              src={asus}
              alt="Asus Laptop"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
        </div>

        <div className="bg-zinc-900 rounded-3xl relative overflow-hidden group col-span-1 row-span-1 border border-white/10 shadow-lg min-h-[250px]">
          <Link href="/products?category=computer" className="block h-full w-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end items-start">
              <h3 className="text-xl font-bold text-white">Samsung Book</h3>
              <p className="text-gray-400 text-xs mt-1">Galaxy Ecosystem</p>
            </div>
            <Image
              src={samsung}
              alt="Samsung PC"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
