import SOForm from "../Reuseable/Forms/SOForm";
import SOInput from "../Reuseable/Forms/SOInput";
import SOSelect from "../Reuseable/Forms/SOSelect";

const defaultValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
};

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];

const StudentRegistration = () => {
  const handleStudentRegistration = (values) => {
    console.log(values);
  };

  return (
    <div>
      <SOForm
        onSubmit={handleStudentRegistration}
        defaultValues={defaultValues}
      >
        <div>
          <label className="font-medium text-[20px] mb-2 block">
            Student Details:
          </label>
          <div className="md:flex gap-6">
            <SOInput
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
            <SOInput
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
            <SOInput
              name="dateOfBirth"
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />

            <SOSelect
              options={genderOptions}
              name="gender"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center">
          <input
            type="submit"
            value="Registration"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out uppercase cursor-pointer"
          />
        </div>
      </SOForm>
    </div>
  );
};

export default StudentRegistration;
