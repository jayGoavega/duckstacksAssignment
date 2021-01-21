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
