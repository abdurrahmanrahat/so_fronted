import SOForm from "../Reuseable/Forms/SOForm";
import SOInput from "../Reuseable/Forms/SOInput";

const defaultValues = {
  studentName: "",
};

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
          <SOInput name="studentName" placeholder="Enter your name" />
        </div>

        <input type="submit" value="Registration" />
      </SOForm>
    </div>
  );
};

export default StudentRegistration;
