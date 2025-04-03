"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useCartStore } from "@/store/cart-store";
const product = {
  _id: "nkjqbljb3urp1bp19pb139",
  title:
    "TP-Link Tapo Pan/Tilt Security Camera for Baby Monitor, Pet Camera w/Motion Detection, 1080P, 2-Way Audio, Night Vision, Cloud & SD Card Storage, Works with Alexa & Google Home (Tapo C200)",
  description:
    "Make your home security smarter with Tapo C200 smart indoor security camera Wi-Fi. This Pan/Tilt IP camera sees everything across an entire room or walkway with the 360° horizontal and 114° vertical range pan/tilt field of view. Get instant push notifications when motion, person, or baby crying is detected from this baby camera monitor, all with no additional fee. Check what’s inside your home, even at night with night vision up to 30ft. with integrated IR sensor. Use 2-way audio with built-in siren to see as a pet camera with phone app and ward off intruders. Fully compatible with Amazon Alexa and Google Assistant, use your simple voice command to view Tapo indoor security camera live stream on Echo Show or Google Chorme Cast with a screen. Save footage continuously on up to a 512 GB microSD card (not included) or subscribe to Tapo Care for cloud storage which saves 30-day video history and provides additional benefits such as motion tracking, baby crying detection, and more. [Before purchasing a microSD card, please check the TP-Link website FAQ to ensure compatibility with your device.]",
  brand: "TP-Link",
  price: {
    value: 16.99,
    currency: "$",
  },
  listPrice: {
    value: 19.99,
    currency: "$",
  },
  galleryThumbnails: [
    "https://m.media-amazon.com/images/I/31TsnWnr5uL._AC_US.jpg",
    "https://m.media-amazon.com/images/I/41qGqTgJGaL._AC_US.jpg",
    "https://m.media-amazon.com/images/I/511kQPWapkL._AC_US.jpg",
    "https://m.media-amazon.com/images/I/51NIpI62V-L._AC_US.jpg",
    "https://m.media-amazon.com/images/I/51mRYl5BraL._AC_US.jpg",
    "https://m.media-amazon.com/images/I/51xYsRC6KDL._AC_US.jpg",
  ],
  highResolutionImages: [
    "https://m.media-amazon.com/images/I/41tRa2xorHL._AC_SL1100_.jpg",
    "https://m.media-amazon.com/images/I/5105+UF0+wL._AC_SL1362_.jpg",
    "https://m.media-amazon.com/images/I/81+BiP1Nq+L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71YCoHmLQ3L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71O8l-enPCL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/71-ld+4I3jL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61coWXqOP5L._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61Eox6Y-vrL._AC_SL1500_.jpg",
  ],
  thumbnailImage:
    "https://m.media-amazon.com/images/I/41tRa2xorHL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  stars: 4.4,
  inStock: true,
};
// const product = {
//   title:
//     "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)",
//   description:
//     "The Snowflake White HP 14 Laptop is designed to keep you productive and entertained from anywhere. Maximize your viewing area and see every detail thanks to 6.5 mm micro-edge bezel display, 79% screen-to-body ratio, and 14-inch HD (1366 x 768) display (1) (2). Performance, power consumption, and value come together in the Intel® Celeron® N4020, the ideal processor for your busiest days (3). Enjoy the highest resolution games and movies with the 4K-ready Intel® UHD Graphics 600 (4) (5). Store more of what you love and multitask faster, even with multiple windows open, with this HP laptop’s 64 GB of eMMC storage and 4 GB of RAM (6). Up your creativity and efficiency as this HP 14-inch laptop offers even more features for computing from anywhere. Spend more time focused on your daily tasks and less on the battery life with up to 11 hours and 30 minutes of power (7). Plus, HP Fast Charge keeps you powered especially if you need recharge quickly (8). The exceedingly secure Windows 10 Home in S mode outfits your PC laptop with fast boot times, increased responsiveness, and added protection against phishing and malware (9). Work confidently with 1-year limited hardware warranty and stay connected with the dependable Wi-Fi 5 (1x1) and Bluetooth® 4.2 combo (10) (11). Boost your creativity as your Windows laptop comes with a 1-year subscription to Microsoft 365, including the whole Office Suite: Word, Excel, and PowerPoint (12). Productivity and entertainment features aren’t the only things your device is equipped with; lead a sustainable lifestyle with a thin laptop that is ENERGY STAR® certified and EPEAT® Silver registered (13) (14). (1) Percent of the active plus inactive viewing area to active viewing area plus border. Measure with lid vertical to the desk. (2) High-definition (HD) content is required to view high-definition images. (3) Multi-core is designed to improve the performance of certain software products. Not all customers or software applications will necessarily benefit from the use of this technology. Performance and clock frequency will vary depending on application workload and your hardware and software configurations. Intel’s numbering, branding, and/or naming is not a measurement of higher performance. Intel, Pentium, Intel Core, Celeron, Iris Xe, Intel logo, and the Intel Inside logo are trademarks of Intel Corporation in the U.S. and other countries. (4) Wireless access point and internet service required and sold separately. The availability of public wireless access points is limited. (5) Graphics output may be limited based on the maximum resolution of the display. Shared video memory (UMA) uses part of the total system memory for video performance. System memory dedicated to video performance is not available for other use by other programs. (6) For storage drives, GB = 1 billion bytes. The actual formatted capacity is less. Up to 5.1GB of disk is reserved for system recovery software. (7) Battery life tested by HP using continuous FHD video playback, 1080p (1920x1080) resolution, 150 nits brightness, system audio level at 17%, player audio level at 100%, played full-screen from local storage, headphone attached, wireless on but not connected. Actual battery life will vary depending on configuration and maximum capacity will naturally decrease with time and usage. (8) Features may require software or other 3rd party applications to provide the described functionality. Internet service required and not included. (9) Not all features are available in all editions or versions of Windows. Systems may require upgraded and/or separately purchased hardware, drivers, software, or BIOS update to take full advantage of Windows functionality. Windows 10 is automatically updated, which is always enabled. ISP fees may apply and additional requirements may apply over time for updates.Windows 10 Home (S mode) works exclusively with apps from the Microsoft Store within Windows. Certain default settings, features, and apps cannot be changed. Some accessories and apps compatible with Windows 10 may not work (including some antivirus, PDF Writers, driver utilities, and accessibility apps) and performance may vary, even if you switch to Windows 10 Home configuration (fee may apply). You can’t switch back to Windows 10 Home (S mode).(10) Wireless access point and internet service required and sold separately. The availability of public wireless access points is limited. Wi-Fi 5 (802.11ac) is backward compatible with prior Wi-Fi 5 specs. (11) Bluetooth® is a trademark owned by its proprietor and used by Hewlett-Packard Company under license. (12) Microsoft 365 Personal 1-year subscription included. Activation is required within 6-months of the Windows activation date. Microsoft 365 Family and Microsoft 365 Personal have non-commercial rights and are meant for personal use only. See microsoft.com for full details. (13) ENERGY STAR and the ENERGY STAR mark are registered trademarks owned by the U.S. Environmental Protection Agency. (14) Based on U.S. EPEAT® registration according to IEEE 1680.1-2018 EPEAT®. EPEAT® status varies by country.",
//   brand: "HP",
//   price: {
//     value: 177.35,
//     currency: "$",
//   },
//   listPrice: {
//     value: 229.99,
//     currency: "$",
//   },
//   galleryThumbnails: [
//     "https://m.media-amazon.com/images/I/41iUBrIDcDS._AC_US.jpg",
//     "https://m.media-amazon.com/images/I/41wHfNF0gzL._AC_US.jpg",
//     "https://m.media-amazon.com/images/I/41AhlS+8tfS._AC_US.jpg",
//     "https://m.media-amazon.com/images/I/41Tk-s3Hl1S._AC_US.jpg",
//     "https://m.media-amazon.com/images/I/31e0DWljz+S._AC_US.jpg",
//     "https://m.media-amazon.com/images/I/415pAGsqJQS._AC_US.jpg",
//   ],
//   highResolutionImages: [
//     "https://m.media-amazon.com/images/I/815uX7wkOZS._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/81ZEuPyfKyL._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/71UtGmh9k4S._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/81wQmKSkWVS._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/61DVGcBxglS._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/81XqHVk8fDS._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/810i+tA2hiS._AC_SL1500_.jpg",
//     "https://m.media-amazon.com/images/I/810R32xk7uS._AC_SL1500_.jpg",
//   ],
//   thumbnailImage:
//     "https://m.media-amazon.com/images/I/815uX7wkOZS.__AC_SX300_SY300_QL70_ML2_.jpg",
//   stars: 4.1,
//   inStock: true,
// };
export default function ProductsDetailPage() {
  const numStars = Math.floor(product.stars) || 0;

  const { items, addItem, removeItem } = useCartStore();
  const cartItem = items.find((item) => item.id === product._id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const onAddItem = () => {
    addItem({
      id: product._id,
      name: product.title,
      price: product.price?.value || 0,
      imageUrl: product.highResolutionImages
        ? product.highResolutionImages[0]
        : product.thumbnailImage || "",
      quantity: 1,
    });
  };
  const onRemoveItem = () => {
    removeItem(product._id);
  };

  return (
    <div className="grid grid-cols-3 gap-12">
      <div className="grid grid-cols-4 gap-20 col-span-2 ">
        <div className="col-span-1 flex flex-col gap-10 pt-20">
          {product.highResolutionImages.slice(0, 4).map((thumbnail, index) => (
            <Image
              key={index}
              src={thumbnail}
              width={100}
              height={100}
              alt="Product Thumbnail"
              className="object-cover cursor-pointer rounded-md"
            />
          ))}
        </div>
        <div className="col-span-3 flex flex-col gap-4 pt-20">
          <Image
            src={product.thumbnailImage}
            alt="Product Thumbnail"
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-20">
        <h1 className="text-2xl font-bold">
          {product.title.split(" ").slice(0, 3).join(" ")}
        </h1>

        <div className="flex justify-between text-md items-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < numStars ? (
                  <FaStar size={16} className="text-yellow-400" />
                ) : (
                  <FaStar size={16} className="text-slate-200" />
                )}
              </span>
            ))}
          </div>
          {product.inStock && (
            <p className="text-green-500 font-bold text-xs">In Stock</p>
          )}
        </div>
        <div className="text-xl">${product.price?.value}</div>
        <div className="text-sm  border-b pb-4 border-b-gray-500">
          {product.description?.split(". ").slice(0, 3).join(". ") +
            (product.description?.split(". ").length > 3 ? "..." : "") || ""}
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center ">
            <Button
              onClick={onRemoveItem}
              className="bg-gray-300 text-black rounded-none rounded-l-xl"
            >
              -
            </Button>
            {/* <Button className=" bg-transparent px-4 rounded-none text-black"> */}
            <div className="px-4">{quantity}</div>
            {/* </Button> */}
            <Button
              onClick={onAddItem}
              className="bg-brandBg text-white rounded-none rounded-r-xl"
            >
              +
            </Button>
          </div>
          <Button className="bg-brandBg ">Buy Now</Button>
          <CiHeart size={32} className="border-gray-500" />
        </div>
        <div className="flex flex-col">
          <div className="border border-gray-500 rounded-md">
            <div className="flex items-center gap-4 p-4 border-b border-gray-500">
              <FaTruckFast size={32} className="text-brandBg" />
              <div className="flex flex-col gap-1 ">
                <p className="text-md font-semibold">Free Shipping</p>
                <p className="text-xs">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <GrPowerCycle size={32} className="text-brandBg" />
              <div className="flex flex-col gap-1">
                <p className="text-md font-semibold">Free Returns</p>
                <p className="text-xs ">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
