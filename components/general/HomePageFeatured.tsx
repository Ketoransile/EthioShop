import { TbRectangleVerticalFilled } from "react-icons/tb";
// import headset1 from "../../assets/headset1.jpg";
// import headset from "../../assets/headset.jpg";
// import laptop1 from "../../assets/laptop1.jpg";
// import iphone from "../../assets/iphone.jpg";
import asus from "../../assets/computers/asus.jpg";
import samsung from "../../assets/computers/samsung.jpg";
// import headsetone from "../../assets/headphone/headsetone.jpg";
import iphone1 from "../../assets/phones/iphone1.jpg";
import galaxywatch1 from "../../assets/smartwatch/galaxywatch1.jpg";
import Image from "next/image";
import Link from "next/link";
export const HomePageFeatured = () => {
  return (
    <div className="flex flex-col gap-4 pt-20">
      <div className="flex gap-2 items-center">
        <TbRectangleVerticalFilled size={24} className="text-blue-500" />
        <h1 className="text-sm text-blue-500 font-bold">Featured</h1>
      </div>
      <h1 className="text-4xl font-semibold">New Arrival</h1>

      <div className="grid grid-cols-3  items-center justify-between pt-20">
        <div className="relative row-span-2  ">
          <Link className="  pb-10 " href="/products?category=smartphone">
            <Image
              src={iphone1}
              width={400}
              height={400}
              alt="headset-image"
              className=" shadow-b-gray-200"
            />
          </Link>
          {/* <div className="absolute backdrop-blur-2xl bg-white/60  left-10 bottom-20 flex  flex-col gap-4 max-w-64 text-white w-full stretch ">
            <h1 className="text-2xl front-bold">Iphone 16 series</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Link href="/" className="border-b border-b-slate-400 w-fit">
              Shop Now
            </Link>
          </div> */}
        </div>
        <div className=" row-span-2">
          <Link className="" href="/products?category=smartwatch">
            <Image
              src={galaxywatch1}
              width={400}
              height={400}
              alt="headset-image"
              className=" object-cover"
            />
          </Link>
        </div>
        <div className=" ">
          <Link className="" href="/products?category=computer">
            <Image
              src={asus}
              width={400}
              height={400}
              alt="headset-image"
              className=" object-cover"
            />
          </Link>
        </div>
        <div className=" ">
          <Link className="" href="/products?category=computer">
            <Image
              src={samsung}
              width={400}
              height={400}
              alt="headset-image"
              className=" object-cover"
            />
          </Link>
        </div>

        {/* <div className="">
          <div className="">
            <Image
              src={headsetone}
              width={400}
              height={400}
              alt="headset-image"
              className=" object-cover"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
