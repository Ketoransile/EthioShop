import React from "react";
import { FaShippingFast, FaHeadset } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const HomePageFeaturesList = () => {
  const features = [
    {
      icon: <FaShippingFast size={28} />,
      title: "Free Fast Delivery",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadset size={28} />,
      title: "24/7 Customer Service",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <VscWorkspaceTrusted size={28} />,
      title: "Money Back Guarantee",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-muted bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-center p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {feature.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageFeaturesList;
