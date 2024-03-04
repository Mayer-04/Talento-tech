import { Router } from "express";
import { HouseController } from "../controllers/house-controller.js";

const houseRouter = Router();
const houseController = new HouseController();

// TODO: http://localhost:5000/api/house

houseRouter.get("/house", houseController.getHouses);
houseRouter.get("/house/:id", houseController.getHouseById);
houseRouter.post("/house", houseController.createHouse);
houseRouter.put("/house/:id", houseController.updateHouse);
houseRouter.delete("/house/:id", houseController.deleteHouse);

export { houseRouter };
