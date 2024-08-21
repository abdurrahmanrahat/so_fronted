import StudentRegistration from "./components/StudentRegistration/StudentRegistration";

function App() {
  return (
    <div className="m-10">
      <div className="mb-8 flex justify-center items-center">
        <span className="text-[32px] md:text-[40px] font-semibold border-b-2 border-b-blue-600">
          Student Admission Form
        </span>
      </div>
      <StudentRegistration />
    </div>
  );
}

export default App;
