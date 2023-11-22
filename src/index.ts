import express, { Request, Response } from "express";
import http from "http";
import mongoose from "mongoose";
import router from "../src/routes/router";

const app = express();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});

const MONGO_URL =
  "mongodb+srv://admin:admin@cluster0.htcnfoy.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the default route!");
});
