import Link from "next/link";
// import React, { useState } from "react";

const MyAccountNavigation = () => {
  return (
    <div className="flex flex-col pt-20">
      {/* <h1 className="text-lg font-bold self-end pb-12">
        Welcome! <span className="text-brandBg ">User</span>
      </h1> */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg">Manage My Account</h1>
            <div className="flex flex-col gap-2 px-8 text-gray-500">
              <Link href="/profile">My Profile</Link>
              {/* <Link href="/my-address">My Address</Link> */}
              {/* <Link href="/my-payment-option">My Payment Options</Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="font-semibold text-lg">Manage Orders</h1>
            <div className="flex flex-col gap-2 px-8 text-gray-500">
              <Link href="/my-orders">My Orders</Link>
              {/* <Link href="/my-cancellations">My Cancellations</Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-lg"> My WishList</h1>
            <div className="flex flex-col gap-2 px-8 text-gray-500">
              <Link href="/wish-list">My Favourites</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountNavigation;
