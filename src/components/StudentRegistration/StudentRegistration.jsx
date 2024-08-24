import { toast } from "sonner";
import { useRegisterStudentIntoDbMutation } from "../../redux/api/studentApi";
import {
  studentRegistrationDefaultValues,
  studentRegistrationGenderOptions,
  studentRegistrationMaritalStatusOptions,
} from "../../utils/formUtils";
import SOForm from "../Reuseable/Forms/SOForm";
import SOInput from "../Reuseable/Forms/SOInput";
import SOSelect from "../Reuseable/Forms/SOSelect";

const StudentRegistration = () => {
  const [registerStudent] = useRegisterStudentIntoDbMutation();

  const handleStudentRegistration = async (values) => {
    console.log(values);
    const toastId = toast.loading("Student registration in...");

    try {
      const res = await registerStudent(values);

      if (res.data.success) {
        toast.success(res.data.message, {
          id: toastId,
          duration: 1200,
        });
      } else {
        toast.error("Something went wrong!", {
          id: toastId,
          duration: 1200,
        });
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div>
      <SOForm
        onSubmit={handleStudentRegistration}
        defaultValues={studentRegistrationDefaultValues}
      >
        <div>
          <label className="font-medium text-[20px] mb-4 block">
            Student Details:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SOInput name="firstName" placeholder="First Name" />
            <SOInput name="lastName" placeholder="Last Name" />
            {/* <SOFileUpload name="imageUrl" /> */}
            <SOInput name="dateOfBirth" type="date" />

            <SOSelect
              options={studentRegistrationGenderOptions}
              name="gender"
            />

            <SOInput name="email" type="email" placeholder="Email Address" />
            <SOInput
              name="contactNumber"
              type="number"
              placeholder="Contact Number"
            />
          </div>
        </div>

        <div>
          <label className="font-medium text-[20px] mt-8 mb-4 block">
            Student Guardian Details:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SOInput name="guardian.fatherName" placeholder="Father Name" />
            <SOInput name="guardian.motherName" placeholder="Mother Name" />
            <SOInput
              name="guardian.guardianContactNumber"
              type="number"
              placeholder="Guardian Contact Number"
            />
            <SOInput
              name="guardian.yearlyIncome"
              type="number"
              placeholder="Parents Yearly Income"
            />
          </div>
        </div>

        <div>
          <label className="font-medium text-[20px] mt-8 mb-4 block">
            Present Address:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SOInput name="presentAddress.division" placeholder="Division" />
            <SOInput name="presentAddress.district" placeholder="District" />
            <SOInput name="presentAddress.address" placeholder="Address" />
          </div>
        </div>

        <div>
          <label className="font-medium text-[20px] mt-8 mb-4 block">
            Permanent Address:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SOInput name="permanentAddress.division" placeholder="Division" />
            <SOInput name="permanentAddress.district" placeholder="District" />
            <SOInput name="permanentAddress.address" placeholder="Address" />
          </div>
        </div>

        <div>
          <label className="font-medium text-[20px] mt-8 mb-4 block">
            Others:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SOInput name="religion" placeholder="Religion" />
            <SOInput name="nationality" placeholder="Nationality" />
            <SOInput
              name="identity"
              type="number"
              placeholder="NID / Birth Certificate"
            />
            <SOInput name="bloodGroup" placeholder="Blood Group" />
            <SOSelect
              options={studentRegistrationMaritalStatusOptions}
              name="maritalStatus"
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
