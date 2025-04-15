"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import asus from "../../assets/computers/gaming.jpg";
import { useRouter } from "next/navigation";
export const HomePageMusic = () => {
  const router = useRouter();
  return (
    <div className="pt-20">
      <div className="flex max-lg:flex-col  gap-10 max-lg:gap-4 items-center justify-between px-4 lg:px-20  pb-10 pt-20 bg-black">
        <div className="flex flex-col gap-4 lg:gap-12">
          <p className="text-sm font-bold text-brandBg max-lg:text-center">
            Categories
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white max-lg:text-center">
            Enhance Your Gaming Experience
          </h1>{" "}
          <div className="max-lg:self-center">
            <Button
              variant="ghost"
              className="bg-brandBg w-fit text-white px-10 py-4 max-lg:mt-10 cursor-pointer"
              onClick={() => router.push("/products")}
            >
              Buy Now
            </Button>
          </div>
        </div>

        <Image
          src={asus}
          width={800}
          height={800}
          alt="music-icon"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
