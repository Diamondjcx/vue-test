import { setToken } from "./globalCancelToken.js";
import axios from "axios";
import axiosRetry from "axios-retry";
const instance = axios.create({
  baseURL: " http://127.0.0.1:3000/",
  timeout: 10000,
  timeoutErrorMessage: "请求超时，请稍后重试",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});
axiosRetry(instance, {
  retries: 3, // 设置重试次数
  retryDelay: () => 500, // 设置重试延迟时间
  shouldResetTimeout: true, // 重置请求超时时间
  retryCondition: (error) =>
    ["ECONNABORTED", "ERR_NETWORK"].includes(error.code), // 重试条件
});

// request拦截器
instance.interceptors.request.use(
  (config) => {
    // config.cancelToken = new axios.CancelToken((c) => setToken(c));
    const controller = new AbortController();
    config.signal = controller.signal;
    setToken(controller);
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || "0";
    // 二进制数据则直接返回
    if (
      res.request.responseType === "blob" ||
      res.request.responseType === "arraybuffer"
    ) {
      return res.data;
    }
    if (code === 401 || code === "10006") {
      return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
    } else if (code === 500) {
      console.log("服务器挂掉了");
      return Promise.reject(new Error(""));
    } else if (code !== "0") {
      return Promise.reject("error");
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    if (error.name === "CanceledError") {
      console.log("请求已取消");
      return Promise.reject("请求已取消");
    }
    message.error("请求已取消");
    return Promise.reject(error);
  }
);

export default {
  get(url, params, options) {
    return instance.get(url, { params, ...options });
  },
  post(url, params, options) {
    return instance.post(url, params, options);
  },
};
