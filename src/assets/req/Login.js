import axios from "axios";
import { uri } from "./Config";

export const verifyUser = ({ user, pass }) => {
  let values = {
    username: user,
    password: pass,
  };

  const config = {
    method: "POST",
    url: "http://" + uri + "/app_bienestar/api/login.php",
    data: JSON.stringify(values),
  };

  return axios(config);
};
