import axios from "axios";
import {
  onFulfilled as unauthorizedOnFulfilled,
  onRejected as unauthorizedOnRejected
} from "./interceptors/response/unauthorized";

// Register the unauthorized response interceptor
axios.interceptors.response.use(
  unauthorizedOnFulfilled,
  unauthorizedOnRejected
);
