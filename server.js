import express from "express";

const app = express();

app.get("/getLongData", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  res.send({
    code: 200,
    message: "请求成功！",
  });
});
//监听端口号，启动 Web 服务
app.listen(3000, () => {
  console.log("服务器启动成功,请在http://localhost:3000中访问....");
});
