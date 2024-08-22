import { baseApi } from "./baseApi";

const studentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        registerStudentIntoDb: build.mutation({
            query: (student) => ({
                url: "/students/registration",
                method: "POST",
                body: student
            })
        })
    })
})

export const { useRegisterStudentIntoDbMutation } = studentApi;