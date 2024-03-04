import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/connection.js";
import { envs } from "./config/envs.js";
import { userRouter, houseRouter } from "./routes/index.js";
import { createHandler } from "graphql-http/lib/use/express";

const app = express();
const SERVER_PORT = envs.PORT ?? 5001;

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// TODO: Utilizar schema
app.all("/graphql", createHandler({ schema }));

app.use("/api", userRouter);
app.use("/api", houseRouter);

app.listen(SERVER_PORT, async () => {
  await connectDB();
  console.log(`Server running on port http://localhost:${SERVER_PORT}`);
});
