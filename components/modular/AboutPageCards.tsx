import React from "react";
import { FaWarehouse } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { GiSwapBag } from "react-icons/gi";
import { Card, CardContent } from "../ui/card";

const aboutPageFeatures = [
  {
    id: 1,
    number: "10.5K",
    description: "Sellers active our site",
    icon: FaWarehouse,
  },
  {
    id: 2,
    number: "33K",
    description: "Monthly Product Sale",
    icon: AiOutlineDollarCircle,
  },
  {
    id: 3,
    number: "45.5K",
    description: "Customer active in our site",
    icon: SlPeople,
  },
  {
    id: 4,
    number: "25K",
    description: "Annual gross sale in our site",
    icon: GiSwapBag,
  },
];

const AboutPageCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {aboutPageFeatures.map((feature) => (
        <Card
          key={feature.id}
          className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-muted bg-card"
        >
          <CardContent className="flex flex-col items-center justify-center p-8 gap-6 text-center">
            <div className="p-4 rounded-full bg-muted group-hover:bg-white/20 transition-colors">
              <div className="p-3 rounded-full bg-black text-white group-hover:bg-white group-hover:text-primary transition-colors">
                <feature.icon size={28} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-3xl tracking-tight">
                {feature.number}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 font-medium">
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AboutPageCards;
