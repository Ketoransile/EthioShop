// "use client";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { IoCartOutline } from "react-icons/io5";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { NavbarProfileDropdown } from "../modular/NavbarProfileDropdown";
// import { authClient } from "@/lib/auth-client";
// import { useCartStore } from "@/store/cart-store";
// import { useWishStore } from "@/store/wishlist-store";
// import { productsDataSet } from "@/lib/productsDataSet";
// import { usePathname } from "next/navigation";
// import NavbarSearch from "./NavbarSearch";
// import { Suspense, useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";
// import { motion, AnimatePresence } from "framer-motion"; // ✅ added

// export const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Products", href: "/products" },
//   { name: "Contact", href: "/contact" },
//   { name: "About", href: "/about" },
// ];

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleToggle = () => setIsOpen(!isOpen);
//   const pathname = usePathname();

//   const { items } = useCartStore();
//   const { wishItems } = useWishStore();
//   const numberOfWishItems = wishItems.length;
//   const numberOfCartItems = items.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   const { data: session } = authClient.useSession();

//   return (
//     <>
//       {/* Navbar */}
//       <div className="max-lg:relative sticky top-10 max-lg:top-0 z-50 backdrop-blur-xl bg-white/60 flex pt-6 mt-10 pb-4 items-center justify-between px-6 lg:px-20 border rounded-full">
//         <Link href="/" className="text-2xl font-bold">
//           Ethio<span className="text-blue-600">shop</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="max-lg:hidden lg:flex gap-12 items-center justify-between font-medium">
//           {navLinks.map((navLink) => {
//             const isActive =
//               pathname === navLink.href ||
//               (pathname.startsWith(navLink.href) && navLink.href !== "/");
//             return (
//               <Link
//                 href={navLink.href}
//                 key={navLink.name}
//                 className={isActive ? "text-blue-500 font-bold" : "text-black"}
//               >
//                 {navLink.name}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Desktop Right Section */}
//         <div className="max-lg:hidden lg:flex gap-6 items-center">
//           <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl">
//             <Suspense fallback={<div>Loading...</div>}>
//               <NavbarSearch />
//             </Suspense>
//           </div>

//           {session ? (
//             <div className="gap-6 items-center justify-between flex">
//               <div className="relative">
//                 <Link href="/wish-list">
//                   <IoMdHeartEmpty size={28} />
//                   {numberOfWishItems > 0 && (
//                     <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
//                       {numberOfWishItems}
//                     </span>
//                   )}
//                 </Link>
//               </div>
//               <div className="relative">
//                 <Link href="/cart">
//                   <IoCartOutline size={28} />
//                   {numberOfCartItems > 0 && (
//                     <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
//                       {numberOfCartItems}
//                     </span>
//                   )}
//                 </Link>
//               </div>
//               <NavbarProfileDropdown />
//             </div>
//           ) : (
//             <div className="flex items-center gap-4">
//               <Link href="/login">
//                 <Button
//                   variant="default"
//                   className="bg-gray-200 text-black hover:text-white"
//                 >
//                   Login
//                 </Button>
//               </Link>
//               <Link href="/sign-up">
//                 <Button variant="default" className="bg-brandBg">
//                   Sign Up
//                 </Button>
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <div className="lg:hidden z-[999]">
//           <button onClick={handleToggle}>
//             {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               className="fixed inset-0 bg-black/30 z-40"
//               onClick={handleToggle}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             />

//             {/* Slide-in Panel */}
//             <motion.div
//               initial={{ x: "-100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ duration: 0.3 }}
//               className="fixed top-0 left-0 h-full w-3/4 max-w-sm z-50 bg-white shadow-lg p-6 flex flex-col gap-6"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-bold">Menu</h2>
//                 <button onClick={handleToggle}>
//                   <IoClose size={24} />
//                 </button>
//               </div>
//               {navLinks.map((navLink) => (
//                 <Link
//                   href={navLink.href}
//                   key={navLink.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-lg font-medium"
//                 >
//                   {navLink.name}
//                 </Link>
//               ))}
//               <div className="mt-auto flex flex-col gap-4">
//                 {session ? (
//                   <>
//                     <Link href="/wish-list" onClick={() => setIsOpen(false)}>
//                       Wishlist
//                     </Link>
//                     <Link href="/cart" onClick={() => setIsOpen(false)}>
//                       Cart
//                     </Link>
//                     <NavbarProfileDropdown />
//                   </>
//                 ) : (
//                   <>
//                     <Link href="/login" onClick={() => setIsOpen(false)}>
//                       <Button variant="outline" className="w-full">
//                         Login
//                       </Button>
//                     </Link>
//                     <Link href="/sign-up" onClick={() => setIsOpen(false)}>
//                       <Button className="w-full bg-brandBg">Sign Up</Button>
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };
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

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { items } = useCartStore();
  const { wishItems } = useWishStore();
  const numberOfWishItems = wishItems.length;
  const numberOfCartItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const { data: session } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border lg:border-gray-200 shadow-lg  rounded-full mt-10">
      <div className="container mx-auto px-4 sm:px-2 lg:px-8 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.span
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Ethio<span className="text-blue-600">shop</span>
            </motion.span>
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
            className="lg:hidden bg-white border drop-shadow-lg  border-gray-200 rounded-2xl"
          >
            <div className="w-full px-4 py-3 space-y-4">
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

              <div className="pt-4 border-t border-gray-100">
                <Suspense
                  fallback={
                    <div className="w-full h-10 bg-gray-100 rounded-md" />
                  }
                >
                  <NavbarSearch />
                </Suspense>
              </div>

              {session ? (
                <div className="flex items-center space-x-4 pt-4">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
