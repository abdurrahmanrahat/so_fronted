export const studentRegistrationDefaultValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "male",
    email: "",
    contactNumber: "",
    guardian: {
        fatherName: "",
        motherName: "",
        guardianContactNumber: "",
        yearlyIncome: "",
    },
    presentAddress: {
        division: "",
        district: "",
        address: "",
    },
    permanentAddress: {
        division: "",
        district: "",
        address: "",
    },
    religion: "",
    nationality: "",
    identity: "",
    bloodGroup: "",
    maritalStatus: "single"
};

export const studentRegistrationGenderOptions = [
    { label: "Male", value: "male", selected: true },
    { label: "Female", value: "female", selected: false },
    { label: "Others", value: "others", selected: false },
];

export const studentRegistrationMaritalStatusOptions = [
    { label: "Single", value: "single", selected: true },
    { label: "Married", value: "married", selected: false },
];