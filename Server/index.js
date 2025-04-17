import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connect from "./Config/Connect2DB.js";
import authRouter from "./Routes/Auth.Route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/auth", authRouter);

connect();
app.listen(PORT, () => {
  console.log(`Server Listening On Port ${PORT}`);
});
