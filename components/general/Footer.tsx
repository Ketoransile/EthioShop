"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-border mt-20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Subscribe */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight">Ethio<span className="text-primary">Shop</span></span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Subscribe to get 10% off your first order and stay updated with our latest products.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
              />
              <Button type="submit" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Adama, Oromia Region, Ethiopia</p>
              <Link href="mailto:abdisileshi123@gmail.com" className="hover:text-primary transition-colors">abdisileshi123@gmail.com</Link>
              <Link href="tel:+251988734632" className="hover:text-primary transition-colors">+251-988-734-632</Link>
            </div>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Account</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/my-account" className="hover:text-primary transition-colors">My Account</Link>
              <Link href="/login" className="hover:text-primary transition-colors">Login / Register</Link>
              <Link href="/cart" className="hover:text-primary transition-colors">Cart</Link>
              <Link href="/wish-list" className="hover:text-primary transition-colors">Wishlist</Link>
              <Link href="/products" className="hover:text-primary transition-colors">Shop</Link>
            </div>
          </div>

          {/* Quick Link */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
              <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} EthioShop. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaFacebook size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaTwitter size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaInstagram size={18} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaLinkedinIn size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
