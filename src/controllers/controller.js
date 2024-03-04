import { UserModel } from "../models/index.js";

export class UserController {
  static getUsers = async (_req, res) => {
    try {
      const users = await UserModel.find();
      if (!users) {
        return res.status(404).json({ error: "No se encontraron usuarios" });
      } else {
        return res.status(200).json(users);
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: `ERROR al obtener los usuarios: ${error}` });
    }
  };

  static getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findById(id);
      return user
        ? res.status(200).json(user)
        : res.status(404).json({ error: "Usuario no encontrado" });
    } catch (error) {
      res.status(500).json({ error: `ERROR al obtener el usuario: ${error}` });
    }
  };

  static createUser = async (req, res) => {
    const body = req.body;

    try {
      const userExists = await UserModel.findOne({
        email: { $eq: body.email },
      });

      if (userExists)
        return res.status(400).json({ error: "El usuario ya existe" });

      const user = await UserModel.create(body);
      const { name } = user;

      res.status(201).json({ message: `El usuario ${name} a sido creado` });
    } catch (error) {
      res.status(500).json({ error: `ERROR al crear el usuario: ${error}` });
    }
  };

  static updateUser = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const user = await UserModel.findByIdAndUpdate(id, body, {
        new: true,
      });
      if (user) res.status(200).json(user);

      res
        .status(404)
        .json({ error: `No se encontró el usuario con el ID: ${id}` });
    } catch (error) {
      res
        .status(500)
        .json({ error: `ERROR al actualizar el usuario: ${error}` });
    }
  };

  static partialUserUpdate = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const user = await UserModel.findByIdAndUpdate(id, body.age, {
        new: true,
      });
      if (user) res.status(200).json(user);

      res.status(404).json({ error: "Usuario no encontrado" });
    } catch (error) {
      res
        .status(500)
        .json({ error: `ERROR al actualizar el usuario: ${error}` });
    }
  };

  static deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (user) res.status(200).json({ message: "Usuario eliminado" });
      res.status(404).json({ error: "Usuario no encontrado" });
    } catch (error) {
      res.status(500).json({ error: `ERROR al eliminar el usuario: ${error}` });
    }
  };
}
