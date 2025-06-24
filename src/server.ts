import express from "express";
import router from "./routes";
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'))

app.get("/", (req, res) => {
  console.log("Express API");

  res.status(200);
  res.json({ message: "Hello from the server" });
});


app.use('/api', router)


export default app;
