import { Router } from "express";
import { allTariffs, updateTariff } from "../controller/tariffController.js";

const tariffRoute = Router();

tariffRoute.get("/tariffRate", allTariffs);

tariffRoute.put("/updateTariff", updateTariff);

export default tariffRoute;
