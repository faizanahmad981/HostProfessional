"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { lock } from "@/assets/images";

// Define Zod schema
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  lastname: z
    .string()
    .min(2, { message: "last Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  age: z
    .number()
    .min(18, { message: "You must be 18 or older." })
    .max(99, { message: "Age must be less than 100." }),
  option: z.string().min(1, { message: "Please select an option" }),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
});

type FormSchemaType = z.infer<typeof formSchema>;

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    console.log("Form Data Submitted:", data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" my-5 mx-auto p-6 ">
      <div className="mb-4 flex flex-row gap-2">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            placeholder="Max Mustermann"
            id="name"
            {...register("name")}
            className={`shadow appearance-none border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="last name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Mustermann GmbH"
            {...register("lastname")}
            className={`shadow appearance-none border ${
              errors.lastname ? "border-red-500" : "border-gray-300"
            }  rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.lastname && (
            <p className="text-red-500 text-xs italic">
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4 flex flex-row gap-2">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="text"
            placeholder="max@mustermann.at"
            id="email"
            {...register("email")}
            className={`shadow appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }  rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="last name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number:
          </label>
          <input
            type="text"
            placeholder="+43 123456789"
            id="lastname"
            {...register("phone")}
            className={`shadow appearance-none border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }  rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6 flex flex-col">
        <label htmlFor="option">Select an option:</label>
        <select
          id="option"
          {...register("option")}
          className={`shadow appearance-none border ${
            errors.option ? "border-red-500" : "border-gray-300"
          }  rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        >
          <option value="">Wählen Sie die Anzahl Ihrer Mitarbeiter</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {errors.option && <p>{errors.option.message}</p>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#AB8900] to-[#FAC800] hover:from-[#FAC800] hover:to-[#AB8900] text-black font-bold py-3 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Jetzt Kostenlos Beraten Lassen
        </button>
      </div>
      <div className="flex flex-row gap-1 justify-center items-center mt-4">
        <Image src={lock} alt="tick" />
        Ihre Daten sind sicher – Keine Werbung!
      </div>
    </form>
  );
};

export default MyForm;
