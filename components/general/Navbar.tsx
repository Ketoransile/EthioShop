import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import { NavbarProfileDropdown } from "../modular/NavbarProfileDropdown";
export const Navbar = () => {
  return (
    <>
      <div className="flex pt-6 pb-4 items-center justify-between ">
        <Link href="/" className="text-2xl font-bold">
          Ethio<span className="text-blue-600">shop</span>
        </Link>
        <nav className="flex gap-12 items-center justify-between font-medium">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex gap-6 items-center">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl ">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className=" placeholder:text-sm border-none focus:border-none focus:outline-none"
            />
            <IoSearchOutline size={24} className="font-normal" />
          </div>
          <div className="hidden items-center gap-4 ">
            <Link href="/login" className="">
              <Button
                variant="default"
                className="bg-gray-200 text-black hover:text-white cursor-pointer"
              >
                Login
              </Button>
            </Link>
            <Link href="/sign-up" className="">
              <Button variant="default" className="bg-brandBg cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="gap-4 items-center justify-between flex">
            <Link href="/wish-list">
              <FaRegHeart size={24} className="" />
            </Link>
            <Link href="/cart">
              <IoCartOutline size={28} className="" />
            </Link>
            <NavbarProfileDropdown />
          </div>
        </div>
      </div>
      <div className="border-b border-b-slate-300  -mx-20"></div>
    </>
  );
};
