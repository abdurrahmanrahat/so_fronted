import SOForm from "../Reuseable/Forms/SOForm";
import SOInput from "../Reuseable/Forms/SOInput";
import SOSelect from "../Reuseable/Forms/SOSelect";

const defaultValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  contactNumber: "",
  address: "",
  guardian: {
    fatherName: "",
    motherName: "",
    guardianContactNumber: "",
  },
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
          <label className="font-medium text-[20px] mb-4 block">
            Student Details:
          </label>
          <div className="grid grid-cols-3 gap-6">
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

            <SOInput
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
            <SOInput
              name="contactNumber"
              type="number"
              placeholder="Contact Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
            <SOInput
              name="address"
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
          </div>
        </div>

        <div>
          <label className="font-medium text-[20px] mt-8 mb-4 block">
            Student Guardian Details:
          </label>
          <div className="grid md:grid-cols-3 gap-6">
            <SOInput
              name="guardian.fatherName"
              placeholder="Father Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
            <SOInput
              name="guardian.motherName"
              placeholder="Mother Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all ease-in-out"
            />
            <SOInput
              name="guardian.guardianContactNumber"
              type="number"
              placeholder="Guardian Contact Number"
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
