import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const HomePageFeaturesList = () => {
  return (
    <div className="flex items-center justify-between py-20 px-52">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center bg-gray-300 rounded-full p-2">
          <div className="flex items-center justify-center bg-black p-2 rounded-full">
            <FaShippingFast size={32} className="text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5 items-center justify-center">
          <h1 className="text-lg font-bold">FREE AND FAST DELIVERY</h1>
          <p className="text-xs">Free delivery for all orders over $140</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center bg-gray-300 rounded-full p-2">
          <div className="flex items-center justify-center bg-black p-2 rounded-full">
            <FaHeadset size={32} className="text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5 items-center justify-center">
          <h1 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h1>
          <p className="text-xs">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center bg-gray-300 rounded-full p-2">
          <div className="flex items-center justify-center bg-black p-2 rounded-full">
            <VscWorkspaceTrusted size={32} className="text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-0.5 items-center justify-center">
          <h1 className="text-lg font-bold">MONEY BACK GUARANTEE</h1>
          <p className="text-xs">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageFeaturesList;
