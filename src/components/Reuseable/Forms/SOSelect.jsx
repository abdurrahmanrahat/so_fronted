import { Controller, useFormContext } from "react-hook-form";

const SOSelect = ({ name, className, options }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select {...field} className={className} required>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
};

export default SOSelect;
