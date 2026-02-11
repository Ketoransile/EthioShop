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
import { ToggleTheme } from "./ToggleTheme";

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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white dark:bg-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="text-2xl font-black tracking-tighter"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300">
                Ethio
              </span>
              <span className="text-foreground">Shop</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((navLink) => {
              const isActive =
                pathname === navLink.href ||
                (pathname.startsWith(navLink.href) && navLink.href !== "/");
              return (
                <Link
                  href={navLink.href}
                  key={navLink.name}
                  className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors text-foreground/80 hover:text-primary"
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{navLink.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="w-full max-w-[200px] transition-all duration-300 focus-within:max-w-[240px]">
              <Suspense fallback={<div className="h-9 w-40 animate-pulse rounded-md bg-muted" />}>
                <NavbarSearch />
              </Suspense>
            </div>

            <div className="h-6 w-px bg-border/40 mx-2" />

            <div className="flex items-center gap-2">
              <ToggleTheme />

              {session ? (
                <>
                  <Link href="/wish-list" className="relative p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-primary">
                    <IoMdHeartEmpty size={22} />
                    {numberOfWishItems > 0 && (
                      <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                        {numberOfWishItems}
                      </span>
                    )}
                  </Link>

                  <Link href="/cart" className="relative p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-primary">
                    <IoCartOutline size={22} />
                    {numberOfCartItems > 0 && (
                      <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-background">
                        {numberOfCartItems}
                      </span>
                    )}
                  </Link>

                  <NavbarProfileDropdown />
                </>
              ) : (
                <div className="flex items-center gap-3 ml-2">
                  <Link href="/login">
                    <Button variant="ghost" className="font-semibold text-muted-foreground hover:text-foreground">
                      Login
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button className="rounded-full font-bold px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ToggleTheme />
            <button
              className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="container px-4 py-4 space-y-3">
              <div className="pb-2">
                <NavbarSearch />
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((navLink) => (
                  <Link
                    href={navLink.href}
                    key={navLink.name}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3.5 text-sm font-semibold rounded-xl transition-all ${pathname === navLink.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted text-foreground/80"
                      }`}
                  >
                    {navLink.name}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-between border-t border-border pt-4 mt-2">
                <div className="flex items-center gap-3">
                  {session && (
                    <>
                      <Link href="/wish-list" className="relative p-2.5 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <IoMdHeartEmpty size={22} />
                        {numberOfWishItems > 0 && (
                          <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-background">
                            {numberOfWishItems}
                          </span>
                        )}
                      </Link>
                      <Link href="/cart" className="relative p-2.5 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <IoCartOutline size={22} />
                        {numberOfCartItems > 0 && (
                          <span className="absolute top-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-background">
                            {numberOfCartItems}
                          </span>
                        )}
                      </Link>
                    </>
                  )}
                </div>

                {session ? (
                  <NavbarProfileDropdown />
                ) : (
                  <div className="flex items-center gap-2">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="font-semibold">Login</Button>
                    </Link>
                    <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button size="sm" className="rounded-full font-bold px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">Sign Up</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
