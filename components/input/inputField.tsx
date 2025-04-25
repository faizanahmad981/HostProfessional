"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  id: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegisterReturn;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  placeholder,
  error,
  register,
  type = "text",
  className = "",
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`shadow appearance-none border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default InputField;
