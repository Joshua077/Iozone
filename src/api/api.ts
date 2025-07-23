import axios from "axios";

const API = axios.create({
  baseURL: "https://staging.zanzino.com/api/v1",
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default API;
