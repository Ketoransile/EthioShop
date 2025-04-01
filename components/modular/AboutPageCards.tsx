import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { GiSwapBag } from "react-icons/gi";
const aboutPageFeatures = [
  {
    id: 1,
    number: 10.5,
    description: "Sellers active in our site",
    icon: FaWarehouse,
  },
  {
    id: 2,
    number: 33,
    description: "Monthly Produduct Sale",
    icon: AiOutlineDollarCircle,
  },
  {
    id: 3,
    number: 45.5,
    description: "Customer active in our site",
    icon: SlPeople,
  },
  {
    id: 4,
    number: 25,
    description: "Anual gross sale in our site",
    icon: GiSwapBag,
  },
];
const AboutPageCards = () => {
  return (
    <div className="flex items-center justify-between gap-4 pt-20">
      {aboutPageFeatures.map((feature) => (
        <div
          className="flex flex-col gap-6 items-center justify-center border border-gray-300 rounded-md p-16 shadow-2xl "
          key={feature.id}
        >
          <div className="flex items-center justify-center rounded-full bg-gray-400 p-2">
            <div className="flex items-center justify-center bg-black p-2 rounded-full">
              <feature.icon size={24} className="text-white" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="font-bold text-2xl">{feature.number}K</p>
            <p className="text-md text-black">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutPageCards;
