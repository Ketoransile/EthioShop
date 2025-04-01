import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../ui/button";
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
          <Button variant="default" className="bg-brandBg">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
      <div className="border-b border-b-slate-300  -mx-20"></div>
    </>
  );
};
