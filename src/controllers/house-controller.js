import { HouseModel } from "../models/index.js";
import { validationHouse } from "../config/validations.js";

export class HouseController {
  getHouses = async (_req, res) => {
    try {
      const houses = await HouseModel.find();
      //TODO: Validación con un ternario
      return houses
        ? res.status(200).json(houses)
        : res.status(404).json({ error: "No se encontraron casas" });
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };

  getHouseById = async (req, res) => {
    const { id } = req.params;
    try {
      const house = await HouseModel.findById(id);

      return house
        ? res.status(200).json(house)
        : res
            .status(404)
            .json({ error: `No se encontró la casa con id: ${id}` });
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };

  createHouse = async (req, res) => {
    const body = req.body;

    const validations = validationHouse(res, body);

    if (validations) {
      return res.status(400).json(validations);
    }

    try {
      const houseExists = await HouseModel.findOne({
        address: body.address,
      });

      if (houseExists) {
        return res.status(409).json({ error: "Casa ya existe" });
      }

      const house = await HouseModel.create(body);

      return res.status(201).json(house);
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };

  updateHouse = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const house = await HouseModel.findByIdAndUpdate(id, body, {
        new: true,
      });

      if (house) {
        res.status(200).json(house);
      } else {
        res.status(404).json({ error: "Casa no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };

  deleteHouse = async (req, res) => {
    const { id } = req.params;
    try {
      const house = await HouseModel.findByIdAndDelete(id);
      if (house) res.status(200).json({ message: "Casa eliminada" });
      return res.status(404).json({ error: "No se encontro la casa" });
    } catch (error) {
      res.status(500).json({ error: `Internal Server Error: ${error}` });
    }
  };
}
