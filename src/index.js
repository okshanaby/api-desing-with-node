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

const app = require("./server");

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
