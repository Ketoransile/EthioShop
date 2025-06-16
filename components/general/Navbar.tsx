"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavbarProfileDropdown } from "../modular/NavbarProfileDropdown";
import { authClient } from "@/lib/auth-client";
import { useCartStore } from "@/store/cart-store";
import { useWishStore } from "@/store/wishlist-store";
import { usePathname } from "next/navigation";
import NavbarSearch from "./NavbarSearch";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
// import { toast } from "sonner";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // const router = useRouter();
  const { items } = useCartStore();
  const { wishItems } = useWishStore();
  const numberOfWishItems = wishItems.length;
  const numberOfCartItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { data: session } = authClient.useSession();
  // const handleLogout = async () => {
  //   await authClient.signOut({
  //     fetchOptions: {
  //       onSuccess: () => {
  //         toast.success("Logout successful");
  //         router.push("/login"); // redirect to login page
  //       },
  //     },
  //   });
  // };
  return (
    <header
      className="sticky top-0 z-50 
 bg-white 
  border lg:border-gray-200 shadow-lg  px-4 md:px-12 lg:px-20
 
  "
    >
      <div className="container mx-auto px-4 sm:px-2 lg:px-8 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-lg lg:text-2xl font-bold max-lg:px-2"
              whileHover={{ scale: 1.05 }}
            >
              Ethio<span className="text-blue-600 ">shop</span>
            </motion.span>
            {/* <Image
              src="/logo1.png"
              width={200}
              height={200}
              className=""
              alt="logo"
            /> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              const isActive =
                pathname === navLink.href ||
                (pathname.startsWith(navLink.href) && navLink.href !== "/");
              return (
                <Link
                  href={navLink.href}
                  key={navLink.name}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {navLink.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 top-full h-0.5 w-full bg-blue-600"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Suspense
              fallback={<div className="w-40 h-8 bg-gray-100 rounded-md" />}
            >
              <div className="relative border border-gray-200 p-2 px-4 rounded-full">
                <NavbarSearch />
              </div>
            </Suspense>

            {session ? (
              <div className="flex items-center space-x-6">
                <Link href="/wish-list" className="relative p-1">
                  <IoMdHeartEmpty
                    size={28}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  />
                  {numberOfWishItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {numberOfWishItems}
                    </span>
                  )}
                </Link>

                <Link href="/cart" className="relative p-1">
                  <IoCartOutline
                    size={28}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  />
                  {numberOfCartItems > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {numberOfCartItems}
                    </span>
                  )}
                </Link>

                <NavbarProfileDropdown />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50 cursor-pointer"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button
                    variant="default"
                    className="bg-brandBg hover:bg-blue-700 cursor-pointer"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border drop-shadow-lg  border-gray-200 rounded-none"
          >
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full px-4 py-3 space-y-4">
                <div className="flex items-center justify-between lg:hidden">
                  {" "}
                  {session ? (
                    <div className="w-full flex items-center  justify-between pt-4">
                      <div className="flex items-center gap-4">
                        <Link
                          href="/wish-list"
                          className="relative p-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <IoMdHeartEmpty size={22} />
                          {numberOfWishItems > 0 && (
                            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                              {numberOfWishItems}
                            </span>
                          )}
                        </Link>
                        <Link
                          href="/cart"
                          className="relative p-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <IoCartOutline size={22} />
                          {numberOfCartItems > 0 && (
                            <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                              {numberOfCartItems}
                            </span>
                          )}
                        </Link>
                      </div>
                      {/* <Button onClick={handleLogout} className="">
                        Logout
                      </Button> */}{" "}
                      <NavbarProfileDropdown />
                    </div>
                  ) : (
                    <div className="flex space-x-3 pt-4">
                      <Link
                        href="/login"
                        className="flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button variant="outline" className="w-full">
                          Login
                        </Button>
                      </Link>
                      <Link
                        href="/sign-up"
                        className="flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button
                          variant="default"
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
                <div className=" border p-2 px-4 border-gray-300 rounded-full">
                  <Suspense
                    fallback={
                      <div className="w-full h-10 bg-gray-100 rounded-md" />
                    }
                  >
                    <NavbarSearch />
                  </Suspense>
                </div>
                {navLinks.map((navLink) => (
                  <Link
                    href={navLink.href}
                    key={navLink.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === navLink.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {navLink.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
