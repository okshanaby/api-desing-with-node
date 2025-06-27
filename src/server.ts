import express from "express";
import morgan from "morgan";
import config from "./config";
import { createUser, signIn } from "./handlers/user";
import { createUserSchema, signInUserSchema } from "./inputSchemas";
import { globalErrorHandler, inputValidator } from "./middleware";
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
  console.log(process.env.NODE_ENV);
  console.log(config.env);

  res.json({ message: "Hello" });
});

app.use("/api", protectedRoute, router);

app.post("/signup", inputValidator(createUserSchema), createUser);
app.post("/signin", inputValidator(signInUserSchema), signIn);

// global error handler
app.use(globalErrorHandler);

export default app;
