import axios from "axios";
import { uri } from "./Config";

export const registerUser = ({correo, telefono, pw1}) => {
    let values = {
      correo: correo,
      telefono: telefono,
      password: pw1,
    };

    let config = {
      method: "POST",
      url: "http://" + uri + "/app_bienestar/api/registrar.php",
      data: JSON.stringify(values),
    };

    return axios(config);
}