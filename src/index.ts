import express, { Request, Response } from "express";
import http from "http";
import mongoose from "mongoose";
import router from "../src/routes/router";

const app = express();

app.use(express.json());

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});

const MONGO_URL =
  "mongodb+srv://admin:admin@cluster0.htcnfoy.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Epicure API!");
});
