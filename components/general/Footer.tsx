import Link from "next/link";
import { MdSend } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <>
      <div className="relative flex items-start justify-between bg-black text-slate-200 mt-20 -mx-20 px-20 pt-12 pb-32">
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl pb-4">
            Ethio<span className="text-blue-600">shop</span>
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Subscribe
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Get 10% off your first order
          </Link>
          <div className="flex items-center border border-white jsutify-between px-4 py-2">
            <input
              type="text"
              placeholder="Enter your email"
              className=" border-none focus:outline-none placeholder:text-md placeholder:text-gray-500 "
            />
            <MdSend size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl pb-4">
            Support
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Adama, Oromia Region, Ethiopia{" "}
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            abdisileshi123@gmail.com
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            +251-988-734-632
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl pb-4">
            Account
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            My Account
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Login / Register
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Cart
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Wishlist
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Shop
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl pb-4">
            Quick Link
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Terms of Use
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            FAQ
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-xl  pb-4">
            Download App
          </Link>
          <Link href="#" className="text-sm text-gray-400">
            Save $3 with App New User Only
          </Link>
          <div className="flex justify-between items-center">
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaLinkedinIn size={24} />
            <FaInstagram size={24} />
          </div>
        </div>{" "}
        <p className="text-gray-500  absolute bottom-4  left-0 right-0 text-center ">
          &copy; Copyright Abdi 2025. All rights reserved
        </p>
      </div>
    </>
  );
};
