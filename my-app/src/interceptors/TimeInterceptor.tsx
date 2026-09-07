import axios from "axios";

export function TimeInterceptor() {
  axios.interceptors.request.use((req: any) => { // request Interceptor
    req.meta = req.meta || {};
    req.meta.requestStartedAt = new Date().getTime();
    return req;
  });

  axios.interceptors.response.use(  // response Interceptor
    (res: any) => {
      res.durationInMs =
        new Date().getTime() - res.config.meta.requestStartedAt;
      return res;
    },
    (err: any) => {
      err.durationInMs =
        new Date().getTime() - err.config.meta.requestStartedAt;
      throw err;
    },
  );
};