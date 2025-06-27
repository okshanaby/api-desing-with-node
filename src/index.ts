// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     console.log("Hello from the server");
//     res.end();
//   } else {
//     console.log("URL: " + req.url);
//     res.end();
//   }
// });

// server.listen(3001, () => {
//   console.log("Server is running on http://localhost:3001");
// });
import * as dotenv from "dotenv";
import config from "./config";
dotenv.config();

import app from "./server";

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
