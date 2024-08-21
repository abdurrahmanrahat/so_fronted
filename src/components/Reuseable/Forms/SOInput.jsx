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
          className={className}
          placeholder={placeholder}
          required
        />
      )}
    />
  );
};

export default SOInput;
