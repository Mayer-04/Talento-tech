import { Router } from "express";
import { UserController } from "../controllers/controller.js ";

export const userRouter = Router();

userRouter.all("/ejemplo", (req, res) => {
  res.send("Mensaje para todos los métodos");
});

// TODO: http://localhost:5000/api/user

userRouter.get("/user", UserController.getUsers);
userRouter.get("/user/:id", UserController.getUserById);
userRouter.post("/user", UserController.createUser);
userRouter.put("/user/:id", UserController.updateUser);
userRouter.patch("/user/:id", UserController.partialUserUpdate);
userRouter.delete("/user/:id", UserController.deleteUser);
