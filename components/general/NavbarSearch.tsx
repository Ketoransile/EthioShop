"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiDelete, FiSearch } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";

const NavbarSearch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();

  // Initialize state from URL params
  const [filter, setFilter] = useState({
    search: searchParams.get("search") || "",
  });

  // Handle input changes
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Enter key for immediate search
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (filter.search.trim()) {
        if (pathname !== "/products") {
          push(`/products?search=${filter.search}`);
        } else {
          replace(`${pathname}?search=${filter.search}`);
        }
      }
    }
  };

  // Debounce URL updates
  const updateURL = useDebouncedCallback(() => {
    // If on products page, always update/refine the search
    if (pathname === "/products") {
      const params = new URLSearchParams();
      if (filter.search) {
        params.set("search", filter.search);
      } else {
        params.delete("search");
      }
      replace(`${pathname}?${params.toString()}`);
    } else {
      // If NOT on products page (e.g. Home), only redirect if there is actual input
      // This creates the "redirect after gap" behavior
      if (filter.search.trim().length > 0) {
        push(`/products?search=${filter.search}`);
      }
    }
  }, 800); // 800ms delay to allow user to stop typing

  // Trigger debounce when filter changes
  useEffect(() => {
    // Only trigger if local state differs from URL state (prevents loops)
    if (filter.search !== (searchParams.get("search") || "")) {
      updateURL();
    }
  }, [filter, updateURL, searchParams]);

  // Sync local state if URL changes externally (e.g. back button)
  useEffect(() => {
    if (pathname === "/products") {
      setFilter({ search: searchParams.get("search") || "" });
    } else if (!filter.search) {
      // If navigating away from products, and we have no local search, keep it empty. 
      // If we have local search but navigated to Home, we can optionally keep or clear.
      // Let's keep it to allow "return to search" or clear it? 
      // Usually clearing is safer to avoid confusion.
      setFilter({ search: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const clearAllFilters = () => {
    setFilter({
      search: "",
    });
    if (pathname === "/products") {
      replace(pathname);
    }
  };

  return (
    <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 border border-transparent focus-within:border-primary/50 focus-within:bg-muted transition-all duration-300">
      <FiSearch className="text-muted-foreground" size={18} />
      <input
        type="text"
        name="search"
        onChange={handleFilterChange}
        onKeyDown={handleKeyDown}
        value={filter.search}
        placeholder="Search..."
        className="w-full bg-transparent text-sm placeholder:text-muted-foreground/70 focus:outline-none"
      />
      {filter.search && (
        <FiDelete
          size={18}
          className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          onClick={clearAllFilters}
        />
      )}
    </div>
  );
};

export default NavbarSearch;
