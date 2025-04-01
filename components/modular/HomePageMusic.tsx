import Image from "next/image";
import { Button } from "../ui/button";
import music from "../../assets/music.svg";
export const HomePageMusic = () => {
  return (
    <div className="pt-20">
      <div className="flex gap-10 items-center justify-between px-20  py-20 bg-black">
        <div className="flex flex-col gap-12">
          <p className="text-sm font-bold text-brandBg">Categories</p>
          <h1 className="text-7xl font-bold text-white">
            Enhance Your Music Experience
          </h1>
          <Button
            variant="ghost"
            className="bg-brandBg w-fit text-white px-10 py-4 cursor-pointer"
          >
            Buy Now
          </Button>
        </div>

        <Image src={music} width={800} height={800} alt="music-icon" />
      </div>
    </div>
  );
};
