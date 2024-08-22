import { Controller, useFormContext } from "react-hook-form";

const SOInput = ({ name, type = "text", className, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <input
          {...field}
          type={type}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
          placeholder={placeholder}
          required
        />
      )}
    />
  );
};

export default SOInput;
