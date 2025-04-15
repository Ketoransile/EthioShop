// import React from "react";
// import { FaShippingFast } from "react-icons/fa";
// import { FaHeadset } from "react-icons/fa";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// const HomePageFeaturesList = () => {
//   return (
//     <div className="w-full lg:flex items-center justify-between py-44 px-52 ">
//       <div className=" flex flex-col items-center justify-center gap-4">
//         <div className="flex items-center justify-center bg-gray-300 rounded-full p-2">
//           <div className="flex items-center justify-center bg-black p-2 rounded-full">
//             <FaShippingFast size={32} className="text-white" />
//           </div>
//         </div>

//         <div className="w-full flex flex-col gap-0.5 items-center justify-center">
//           <h1 className="lg:text-lg font-bold">FREE AND FAST DELIVERY</h1>
//           <p className="text-xs">Free delivery for all orders over $140</p>
//         </div>
//       </div>

//       <div className="flex flex-col items-center justify-center gap-4">
//         <div className="flex items-center justify-center bg-gray-300 rounded-full p-2">
//           <div className="flex items-center justify-center bg-black p-2 rounded-full">
//             <FaHeadset size={32} className="text-white" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-0.5 items-center justify-center">
//           <h1 className="text-lg font-bold w-full">24/7 CUSTOMER SERVICE</h1>
//           <p className="text-xs">Friendly 24/7 customer support</p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center gap-6">
//         <div className="flex items-center justify-center bg-gray-300 rounded-full p-2">
//           <div className="flex items-center justify-center bg-black p-2 rounded-full">
//             <VscWorkspaceTrusted size={32} className="text-white" />
//           </div>
//         </div>
//         <div className="flex flex-col gap-0.5 items-center justify-center">
//           <h1 className="text-lg font-bold">MONEY BACK GUARANTEE</h1>
//           <p className="text-xs">We reurn money within 30 days</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePageFeaturesList;
import React from "react";
import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const HomePageFeaturesList = () => {
  const features = [
    {
      icon: <FaShippingFast size={24} className="text-white" />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadset size={24} className="text-white" />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <VscWorkspaceTrusted size={24} className="text-white" />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 p-6 sm:p-4 lg:p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center bg-gray-200 rounded-full p-2">
              <div className="flex items-center justify-center bg-black p-3 rounded-full">
                {feature.icon}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-sm sm:text-base lg:text-lg font-bold mb-1">
                {feature.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageFeaturesList;
