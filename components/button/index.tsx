"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", ...props }) => {
  const defaultClasses =
    "w-full bg-gradient-to-r from-[#AB8900] to-[#FAC800] hover:from-[#FAC800] hover:to-[#AB8900] text-black font-bold py-3 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300";

  return (
    <button className={clsx(defaultClasses, className)} {...props}>
      {text}
    </button>
  );
};

export default Button;
