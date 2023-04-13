import axios from "axios";

export const networkClient = axios.create({
  baseURL: "/api/todos",
  headers: {
    Authorization: "Bearer abc",
  },
});
