const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://user-service:8000",
    changeOrigin: true,
  })
);
app.use(
  "/posts",
  createProxyMiddleware({
    target: "http://discussion-service:8001",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
