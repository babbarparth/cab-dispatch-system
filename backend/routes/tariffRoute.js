import { Router } from "express";
import { allTariffs } from "../controller/tariffController.js";

const tariffRoute = Router();

tariffRoute.get("/tariffRate", allTariffs);

export default tariffRoute;
