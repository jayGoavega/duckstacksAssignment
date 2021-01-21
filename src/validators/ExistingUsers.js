import * as yup from "yup";

export const InitialValues = {
  email: "",
  password: "",
};

export const ExistingUserSchema = yup.object({
  email: yup
    .string()
    .strict()
    .trim()
    .required("email is required!")
    .trim()
    .email("please enter correct email!"),
  password: yup
    .string()
    .strict()
    .trim()
    .min(6, "min 6 characters required!")
    .required("password is required!"),
});
