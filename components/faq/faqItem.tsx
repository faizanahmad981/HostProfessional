"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#f1e8d6] rounded-xl bg-white px-6 py-4 mb-3 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-base md:text-lg text-gray-800">
          {question}
        </span>
        {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600 text-sm md:text-base">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
