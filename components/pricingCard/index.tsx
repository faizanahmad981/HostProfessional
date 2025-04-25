// components/PricingCard.tsx

import { tick } from "@/assets/images";
import Image from "next/image";
import React from "react";

interface PricingCardProps {
  title: string;
  icon: any;
  features: string[];
  prices: {
    price: string;
    unit: string;
    note: string;
  }[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, icon, features, prices }) => {
  return (
    <div className="rounded-xl w-[300px] md:w-[500px] border border-yellow-300 p-6 shadow-sm">
      <div className="flex flex-row items-center gap-2 mb-4">
        <Image src={icon} alt="icon" />
        <h2 className="text-2xl font-semibold text-yellow-500">{title}</h2>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="w-full sm:w-[calc(50%-0.75rem)] flex flex-row items-start leading-6">
            <Image src={tick} alt="tick" className="mt-1" width={16} height={16} />
            <span className="ml-2 font-bold">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-4 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {prices.map((priceObj, idx) => (
            <div key={idx}>
              <p className="text-gray-500">Schon ab</p>
              <p>
                <span className="text-lg font-bold text-[#6b5402]">{priceObj.price}</span>
                <span className="text-gray-900"> {priceObj.unit}</span>
              </p>
              <p className="text-gray-500">{priceObj.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
