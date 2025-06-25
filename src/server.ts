import express from "express";
import morgan from "morgan";
import router from "./routes";
import { protectedRoute } from "./modules/auth";

const app = express();

// middleware for logging
app.use(morgan("dev"));

app.use(express.json()); // middleware to let the client send a json
app.use(express.urlencoded({ extended: true })); // middleware for url params/queries formatting

// app.use((req, res, next) => {
//   req.body = "Okshan";
//   next();
// });

// const customLogger = message => (req, res, next) => {
//   console.log(`Hello from my loger ${message}`)

//   next();
// };

// app.use(customLogger('Okshan'))

app.get("/", (req, res) => {
  console.log("Express API");

  res.status(200);
  // res.json({ message: "Hello from the server " + req.body });
  res.json({ message: "Hello from the server " });
});

app.use("/api", protectedRoute, router);

export default app;
