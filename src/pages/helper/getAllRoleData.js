import axios from "axios";
import { API } from "../../config/api";

export const getAllRoleData = async (PATH) => {
  const token = localStorage.getItem("auth");
  
  try {
    const res = await axios.get(`${API}${PATH}`, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (error) {
    return {
      error: "error",
      message: error.response.statusText,
    };
  }
};
