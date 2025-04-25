"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { lock } from "@/assets/images";
import InputField from "../input/inputField";
import Button from "../button";


const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  lastname: z.string().min(2, { message: "last Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  age: z.number().min(18, { message: "You must be 18 or older." }).max(99, { message: "Age must be less than 100." }),
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-5 mx-auto ">
      <div className="mb-4 flex flex-row gap-2">
        <InputField
          label="Name:"
          id="name"
          placeholder="Max Mustermann"
          register={register("name")}
          error={errors.name?.message}
        />
        <InputField
          label="Last Name:"
          id="lastname"
          placeholder="Mustermann GmbH"
          register={register("lastname")}
          error={errors.lastname?.message}
        />
      </div>

      <div className="mb-4 flex flex-row gap-2">
        <InputField
          label="Email:"
          id="email"
          placeholder="max@mustermann.at"
          register={register("email")}
          error={errors.email?.message}
        />
        <InputField
          label="Phone Number:"
          id="phone"
          placeholder="+43 123456789"
          register={register("phone")}
          error={errors.phone?.message}
        />
      </div>

      <div className="mb-6 flex flex-col">
        <label htmlFor="option" className="text-sm font-bold text-gray-700 mb-2">
          Select an option:
        </label>
        <select
          id="option"
          {...register("option")}
          className={`shadow appearance-none border ${
            errors.option ? "border-red-500" : "border-gray-300"
          } rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        >
          <option value="">Wählen Sie die Anzahl Ihrer Mitarbeiter</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {errors.option && <p className="text-red-500 text-xs italic">{errors.option.message}</p>}
      </div>

      <div className="flex items-center justify-between">
      <Button type="submit" text="Jetzt Kostenlos Beraten Lassen" />
      </div>
      <div className="flex flex-row gap-1 justify-center items-center mt-4">
        <Image src={lock} alt="tick" />
        Ihre Daten sind sicher – Keine Werbung!
      </div>
    </form>
  );
};

export default MyForm;
