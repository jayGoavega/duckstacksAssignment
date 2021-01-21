import * as yup from "yup";

export const InitialValues = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};

export const RegisterUserSchema = yup.object({
  fName: yup
    .string()
    .strict()
    .trim()
    .required("first name is required!")
    .min(3, "min 3 characters required!"),
  lName: yup
    .string()
    .strict()
    .trim()
    .required("last name is required!")
    .min(1, "min 3 characters required!"),
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
