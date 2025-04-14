"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavbarProfileDropdown } from "../modular/NavbarProfileDropdown";
import { authClient } from "@/lib/auth-client";
import { useCartStore } from "@/store/cart-store";
import { useWishStore } from "@/store/wishlist-store";
import { productsDataSet } from "@/lib/productsDataSet";
import { usePathname } from "next/navigation";
import NavbarSearch from "./NavbarSearch";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];
export const Navbar = () => {
  const pathname = usePathname();

  const { items } = useCartStore();
  const { wishItems } = useWishStore();
  const numberOfWishItems = wishItems.reduce((total) => total + 1, 0);
  const numberOfCartItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  console.log("Navbar rendered");
  console.log("Productsdataset length is : ", productsDataSet.length);
  const {
    data: session,
    // isPending, //loading state
    // error, //error object
    // refetch, //refetch the session
  } = authClient.useSession();
  if (session) {
    console.log("session from navbar is:", session);
  }
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 flex pt-6 pb-4 items-center justify-between -mx-20 px-20 ">
        <Link href="/" className="text-2xl font-bold">
          Ethio<span className="text-blue-600">shop</span>
        </Link>
        <nav className="flex gap-12 items-center justify-between font-medium">
          {navLinks.map((navLink) => {
            const isActive =
              pathname === navLink.href ||
              (pathname.startsWith(navLink.href) && navLink.href !== "/");
            return (
              <Link
                href={navLink.href}
                key={navLink.name}
                className={isActive ? "text-blue-500 font-bold" : "text-black"}
              >
                {navLink.name}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-6 items-center">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl ">
            <NavbarSearch />
          </div>
          {session ? (
            // <div className="gap-4 items-center justify-between flex">
            <div className="gap-6 items-center justify-between flex">
              {/* <Link href="/wish-list">
                <FaRegHeart size={24} className="" />
              </Link> */}
              <div className="relative">
                <Link href="/wish-list">
                  <IoMdHeartEmpty size={28} className="" />
                  {numberOfWishItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {numberOfWishItems}
                    </span>
                  )}
                </Link>
              </div>
              <div className="relative">
                <Link href="/cart">
                  <IoCartOutline size={28} />
                  {numberOfCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {numberOfCartItems}
                    </span>
                  )}
                </Link>
              </div>

              <NavbarProfileDropdown />
            </div>
          ) : (
            <div className="flex items-center gap-4 ">
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
          )}
        </div>
      </div>
      <div className="border-b border-b-slate-300  -mx-20"></div>
    </>
  );
};
