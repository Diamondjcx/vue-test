import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// SSE 接口：逐字输出
app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const text =
    "你好，我是一个模拟的 AI 模型，会逐字输出消息，演示流式输出优化效果。";

  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      res.write(`data: ${text[i]}\n\n`);
      i++;
    } else {
      res.write("data: [DONE]\n\n");
      clearInterval(timer);
      res.end();
    }
  }, 100); // 每 100ms 输出一个字
});

app.listen(3000, () => {
  console.log("SSE server running at http://localhost:3000/stream");
});
