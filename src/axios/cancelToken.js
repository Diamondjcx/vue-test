import axios from "axios";
import CancelToken from "axios/cancelToken";

let cancel;

// 发起请求
axios
  .get("/foo/bar", {
    cancelToken: new CancelToken((c) => (cancel = c)),
  })
  .then((response) => {
    // 处理响应
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log("请求被取消");
    } else {
      console.error("发生了一个错误:", error);
    }
  });

// 取消请求
if (cancel) {
  cancel("取消请求的原因");
}
