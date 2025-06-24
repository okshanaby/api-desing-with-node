import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Express API");

  res.status(200);
  res.json({ message: "Hello from the server" });
});

export default app;
