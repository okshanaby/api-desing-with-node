import express from "express";
import morgan from "morgan";
import { createUser, signIn } from "./handlers/user";
import { protectedRoute } from "./modules/auth";
import router from "./routes";

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

app.get("/", (req, res, next) => {
  setTimeout(() => {
    next(new Error("Hello error"));
  }, 5000);
});

app.use("/api", protectedRoute, router);

app.post("/signup", createUser);
app.post("/signin", signIn);

// global error handler
app.use((error, req, res, next) => {
  console.log(error);

  res.json({ message: "OPPPPSSSS" });
});

export default app;
