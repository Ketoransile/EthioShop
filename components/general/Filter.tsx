"use client";
import React from "react";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className=" flex justify-between">
      <div className="flex gap-6 flex-wrap">
        {/* <select
          name="category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200 "
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option value="SmartPhone">SmartPhone</option>
          <option value="Computer">Computer</option>
          <option value="Camera">Camera</option>
          <option value="SmartWatch">SmartWatch</option>
          <option value="HeadPhone">HeadPhone</option>
          <option value="Gaming">Gaming </option>
        </select> */}
        <select
          name="category"
          onChange={handleFilterChange}
          className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
        >
          <option>Category</option>
          <option value="SmartPhone">SmartPhone</option>
          <option value="Computer">Computer</option>
          <option value="Camera">Camera</option>
          <option value="SmartWatch">SmartWatch</option>
          <option value="HeadPhone">HeadPhone</option>
          <option value="Gaming">Gaming</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          onChange={handleFilterChange}
          className="text-xs rounded-2xl pl-2 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          onChange={handleFilterChange}
          className="text-xs rounded-2xl pl-2 ring-1 ring-gray-400"
        />
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
