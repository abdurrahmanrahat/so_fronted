export const studentRegistrationDefaultValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "male",
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
    { label: "Male", value: "male", selected: true },
    { label: "Female", value: "female", selected: false },
    { label: "Others", value: "others", selected: false },
];