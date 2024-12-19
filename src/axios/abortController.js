import axios from "axios";

const controller = new AbortController();

axios
  .get("/foo/bar", {
    signal: controller.signal,
  })
  .then((response) => {
    // 处理响应
  })
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("请求被取消");
    } else {
      console.error("发生了一个错误:", error);
    }
  });

// 取消请求
controller.abort();
