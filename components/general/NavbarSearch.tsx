import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";

const NavbarSearch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const router = useRouter();

  // Initialize state from URL params
  const [filter, setFilter] = useState({
    search: searchParams.get("search") || "",
  });

  // Handle input changes immediately
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    router.push("/products");
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  // Debounce URL updates (API calls)
  const updateURL = useDebouncedCallback(() => {
    const params = new URLSearchParams();

    // Only include non-empty, valid filter
    if (filter.search) params.set("search", filter.search);

    replace(`${pathname}?${params.toString()}`);
  }, 200);

  // Update URL when filter change
  useEffect(() => {
    updateURL();
  }, [filter, updateURL]);

  const clearAllFilters = () => {
    setFilter({
      search: "",
    });
    replace(pathname);
  };

  return (
    <>
      <input
        type="text"
        name="search"
        onChange={handleFilterChange}
        value={filter.search}
        placeholder="What are you looking for ?"
        className=" placeholder:text-sm border-none focus:border-none focus:outline-none"
      />
      <FiDelete
        size={24}
        className="font-normal cursor-pointer"
        onClick={clearAllFilters}
      />
    </>
  );
};

export default NavbarSearch;
