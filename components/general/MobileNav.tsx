"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { navLinks } from "./Navbar";
import Link from "next/link";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-4 backdrop-blur-xl bg-white/60">
      {isOpen ? (
        <button className="" onClick={handleToggle}>
          <IoClose size={24} />
        </button>
      ) : (
        <button className="" onClick={handleToggle}>
          <GiHamburgerMenu size={24} onClick={handleToggle} />
        </button>
      )}
      <div className="flex flex-col gap-4 backdrop-blur-2xl bg-white/40 p-10">
        {isOpen &&
          navLinks.map((navLink) => (
            <Link href={navLink.href} key={navLink.href}>
              {navLink.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MobileNav;
