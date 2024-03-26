import express from "express";
import morgan from "morgan";
import { connectDB } from "./config/connection.js";
import { envs } from "./config/envs.js";
import { userRouter, houseRouter } from "./routes/index.js";
import { createHandler } from "graphql-http/lib/use/express";
import { Socket } from "socket.io";
import http from "node:http";

const app = express();
const SERVER_PORT = envs.PORT ?? 5001;
const io = Socket(http.Server(app));

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

/** Metodos websocket */
io.on("connect", (socket) => {
  console.log("connected");
  //Escuchando eventos desde el servidor
  socket.on("message", (data) => {
    /** Almacenando el mensaje en la BD */
    const payload = JSON.parse(data);
    console.log(payload);
    /** Lo almaceno en la BD */
    MessageSchema(payload)
      .save()
      .then((result) => {
        /** Enviando el mensaje a todos los clientes conectados al websocket */
        socket.broadcast.emit("message-receipt", payload);
      })
      .catch((err) => {
        console.log({ status: "error", message: err.message });
      });
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});

// TODO: Utilizar schema
app.all("/graphql", createHandler({ schema }));

app.use("/api", userRouter);
app.use("/api", houseRouter);

app.listen(SERVER_PORT, async () => {
  await connectDB();
  console.log(`Server running on port http://localhost:${SERVER_PORT}`);
});
