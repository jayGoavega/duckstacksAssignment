import { API } from "../../config/api";
import Admin from "../../config/admin-credentials";
import axios from "axios";

//adding initial root admin to login
export const addRootAdmin = async () => {
  try {
    await axios.post(`${API}register-admin`, {
      fName: Admin.ADMIN_FNAME,
      lName: Admin.ADMIN_LNAME,
      email: Admin.ADMIN_EMAIL,
      role: Admin.ADMIN_ROLE,
      password: Admin.ADMIN_PASSWORD,
    });
    console.log("successfully root-admin Added");
  } catch (error) {
    console.log(error.response.data);
  }
};

//redirecting according to users
export const RedirectTo = async (res, props) => {
  localStorage.setItem("auth", res.data.data.token);
  localStorage.setItem("role", JSON.stringify(res.data.data.role));
  const role = res.data.data.role;
  if (role === "admin") {
    props.history.push(`/admin/${role}`);
  } else if (role === "sponsor") {
    props.history.push(`/sponsor/${role}`);
  } else if (role === "doctor") {
    props.history.push(`/doctor/${role}`);
  } else if (role === "consultant") {
    props.history.push(`/consultant/${role}`);
  }
};
