// 最新的一个请求
let cancel = null;

// 所有请求
let cancelTokenList = [];

function setToken(cancelToken) {
  cancel = cancelToken;
  cancelTokenList.push(cancelToken);
}

function cancelToken() {
  // cancel && cancel();
  cancel && cancel.abort();
  cancelTokenList.pop();
}

function clearAllToken() {
  while (cancelTokenList.length > 0) {
    let cancel = cancelTokenList.pop();
    // cancel && cancel();
    cancel && cancel.abort();
  }
}

export { setToken, cancelToken, clearAllToken };
