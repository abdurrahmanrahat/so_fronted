export const studentRegistrationDefaultValues = {
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

export const studentRegistrationGenderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
];