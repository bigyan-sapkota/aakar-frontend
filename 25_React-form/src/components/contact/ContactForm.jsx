import { useState } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FormSchema = z.object({
  name: z.string().min(3, "Name must be greater than 3 letters"),
  email: z.string().email("Invalid email"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormSchema) });

  const formSubmitHandler = (data) => {
    console.log(data);
    console.log(errors);
    console.log("Submitted");
    reset();
  };

  return (
    <div className="px-24">
      <h2 className="text-3xl font-semibold text-center mb-8 ">
        Send Us A Message{" "}
      </h2>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="flex gap-8">
          {/* name input field */}
          <div className="w-1/2">
            <label className="font-semibold mb-2 block">Name: </label>
            <div className="flex items-center justify-between bg-gray-300 px-4 rounded-lg">
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your name"
                className="py-2 border-0 outline-none bg-transparent w-full placeholder:text-black"
              />
              <FaUser />
            </div>
            {errors.name && (
              <p className="text-sm font-semibold text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="w-1/2">
            <label className="font-semibold mb-2 block">Email: </label>
            <div className="flex items-center justify-between bg-gray-300 px-4 rounded-lg">
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your Email..."
                className="py-2 border-0 outline-none bg-transparent w-full placeholder:text-black"
              />
              <MdEmail />
            </div>
            {errors.message && (
              <p className="text-sm font-semibold text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-8">
          {/* submit button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-700 rounded-lg"
          >
            Submit
          </button>

          {/* reset button */}
          <input
            type="reset"
            className="bg-red-500 text-white py-2 px-6 hover:bg-red-700 rounded-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

// const InputField = ({ inputLabel, inputType, inputPlaceholder, inputIcon }) => {
//   return (
//     <div>
//       <label className="font-semibold mb-2 block">{inputLabel}: </label>
//       <div className="flex items-center justify-between bg-gray-300 px-4 rounded-lg">
//         <input
//           type={inputType}
//           {...register("name")}
//           placeholder={inputPlaceholder}
//           className="py-2 border-0 outline-none bg-transparent w-full placeholder:text-black"
//         />
//         {inputIcon}
//       </div>
//     </div>
//   );
// };
