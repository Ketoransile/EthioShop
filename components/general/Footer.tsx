import Link from "next/link";
// import { MdSend } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <>
      <div className="max-lg:grid grid-cols-2 gap-4 md:grid-cols-3   relative lg:flex items-start justify-between bg-black text-slate-200 mt-20 -mx-4 md:-mx-12 lg:-mx-20 px-4 lg:px-20 md:px-12  pt-12 pb-32">
        <div className="flex flex-col gap-4 max-lg:text-xs ">
          <Link href="#" className="font-bold text-xl max-lg:text-sm pb-4">
            Ethio<span className="text-blue-600">shop</span>
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Subscribe
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Get 10% off your first order
          </Link>
          {/* <div className="w-fit flex items-center border border-white justify-between px-4 py-2 rounded-xl">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-1/2 lg:w-full border-none focus:outline-none placeholder:text-md placeholder:text-gray-500 "
            />
            <MdSend size={24} />
          </div> */}
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl max-lg:text-sm pb-4">
            Support
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Adama, Oromia Region, Ethiopia{" "}
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            abdisileshi123@gmail.com
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            +251-988-734-632
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl max-lg:text-sm pb-4">
            Account
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            My Account
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Login / Register
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Cart
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Wishlist
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Shop
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl max-lg:text-sm pb-4">
            Quick Link
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Terms of Use
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            FAQ
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl max-lg:text-sm  pb-4">
            Download App
          </Link>
          <Link href="#" className="text-sm max-lg:text-xs text-gray-400">
            Save $3 with App New User Only
          </Link>
          <div className="grid grid-cols-2 gap-y-4 lg:flex lg:justify-between items-center">
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaLinkedinIn size={24} />
            <FaInstagram size={24} />
          </div>
        </div>{" "}
        <p className="text-gray-500  absolute bottom-4  left-0 right-0 text-center max-lg:text-xs">
          &copy; Copyright EthioShop 2025. All rights reserved
        </p>
      </div>
    </>
  );
};
