import axios from "axios";

export const networkClient = axios.create({
  baseURL: "http://localhost:4000/todos",
  headers: {
    Authorization: "Bearer abc",
  },
});
