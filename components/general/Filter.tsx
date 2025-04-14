// "use client";
// import React, { useState, useEffect } from "react";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { Button } from "../ui/button";
// import { useDebouncedCallback } from "use-debounce";

// const Filter = () => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();

//   // Local state for immediate UI updates
//   const [filters, setFilters] = useState({
//     category: searchParams.get("category") || "",
//     min: searchParams.get("min") || "",
//     max: searchParams.get("max") || "",
//     sort: searchParams.get("sort") || "",
//   });

//   // Update local state immediately on input change
//   const handleFilterChange = (
//     e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
//   ) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   // Debounce the URL update that triggers the API call
//   const updateURL = useDebouncedCallback(() => {
//     const params = new URLSearchParams();

//     // Only include non-empty filters in the URL
//     if (filters.category) params.set("category", filters.category);
//     if (filters.min) params.set("min", filters.min);
//     if (filters.max) params.set("max", filters.max);
//     if (filters.sort) params.set("sort", filters.sort);

//     replace(`${pathname}?${params.toString()}`);
//   }, 500);

//   // Call updateURL whenever filters change
//   useEffect(() => {
//     updateURL();
//   }, [filters, updateURL]);

//   const clearAllFilters = () => {
//     setFilters({
//       category: "",
//       min: "",
//       max: "",
//       sort: "",
//     });
//     // Immediately clear the URL
//     replace(pathname);
//   };

//   return (
//     <div className="flex flex-col gap-4 md:flex-row md:justify-between">
//       <div className="flex items-center gap-4">
//         <select
//           name="category"
//           onChange={handleFilterChange}
//           value={filters.category}
//           className="h-10 w-full min-w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           <option value="">All Categories</option>
//           <option value="smartphone">SmartPhone</option>
//           <option value="computer">Computer</option>
//           <option value="camera">Camera</option>
//           <option value="smartwatch">SmartWatch</option>
//           <option value="headphone">HeadPhone</option>
//           <option value="gaming">Gaming</option>
//         </select>

//         <input
//           type="number"
//           name="min"
//           placeholder="Min price"
//           value={filters.min}
//           onChange={handleFilterChange}
//           min="0"
//           className="h-10 w-full min-w-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//         />

//         <input
//           type="number"
//           name="max"
//           placeholder="Max price"
//           value={filters.max}
//           onChange={handleFilterChange}
//           min="0"
//           className="h-10 w-full min-w-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
//         />
//       </div>

//       <div className="flex w-full items-center gap-4 md:w-auto">
//         <select
//           name="sort"
//           value={filters.sort}
//           onChange={handleFilterChange}
//           className="h-10 w-full min-w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           <option value="">Default Sorting</option>
//           <option value="ascPrice">Price (low to high)</option>
//           <option value="descPrice">Price (high to low)</option>
//           <option value="ascLastUpdated">Newest</option>
//           <option value="descLastUpdated">Oldest</option>
//         </select>

//         <Button
//           onClick={clearAllFilters}
//           className="h-10 rounded-md bg-brandBg px-4 py-2 text-sm hover:bg-blue-400"
//         >
//           Clear All
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Filter;
"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useDebouncedCallback } from "use-debounce";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Initialize state from URL params
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    min: searchParams.get("min") || "",
    max: searchParams.get("max") || "",
    sort: searchParams.get("sort") || "",
  });

  // Handle input changes immediately
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Debounce URL updates (API calls)
  const updateURL = useDebouncedCallback(() => {
    const params = new URLSearchParams();

    // Only include non-empty, valid filters
    if (filters.category) params.set("category", filters.category);
    if (filters.min && !isNaN(Number(filters.min)))
      params.set("min", filters.min);
    if (filters.max && !isNaN(Number(filters.max)))
      params.set("max", filters.max);
    if (filters.sort) params.set("sort", filters.sort);

    replace(`${pathname}?${params.toString()}`);
  }, 200);

  // Update URL when filters change
  useEffect(() => {
    updateURL();
  }, [filters, updateURL]);

  const clearAllFilters = () => {
    setFilters({
      category: "",
      min: "",
      max: "",
      sort: "",
    });
    replace(pathname);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex justify-between items-center gap-4">
        {/* Category Select */}
        <select
          name="category"
          onChange={handleFilterChange}
          value={filters.category}
          className="h-10 w-full min-w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">All Categories</option>
          <option value="smartphone">SmartPhone</option>
          <option value="computer">Computer</option>
          <option value="camera">Camera</option>
          <option value="smartwatch">SmartWatch</option>
          <option value="headphone">HeadPhone</option>
          <option value="gaming">Gaming</option>
        </select>

        {/* Price Filters */}
        <input
          type="number"
          name="min"
          placeholder="Min price"
          value={filters.min}
          onChange={handleFilterChange}
          min="0"
          step="0.01"
          className="h-10 w-full min-w-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />

        <input
          type="number"
          name="max"
          placeholder="Max price"
          value={filters.max}
          onChange={handleFilterChange}
          min="0"
          step="0.01"
          className="h-10 w-full min-w-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>

      <div className="flex w-full items-center gap-4 md:w-auto">
        {/* Sort Select */}
        <select
          name="sort"
          value={filters.sort}
          onChange={handleFilterChange}
          className="h-10 w-full min-w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Default Sorting</option>
          <option value="ascPrice">Price (low to high)</option>
          <option value="descPrice">Price (high to low)</option>
          <option value="ascLastUpdated">Newest</option>
          <option value="descLastUpdated">Oldest</option>
        </select>

        {/* Clear Button */}
        <Button
          onClick={clearAllFilters}
          className="h-10 rounded-md bg-brandBg px-4 py-2 text-sm hover:bg-blue-400"
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default Filter;
