import axios from "axios";

export function AuthInterceptor() {
  axios.interceptors.request.use((req) => {
    console.log("AuthInterceptor called...");
    req.headers.Authorization = "ABCDEF123456";
    return req;
  });
}