import { default as axiosNative } from "axios";

export const axios = axiosNative.create({
  baseURL: "http://localhost:4000",
});
