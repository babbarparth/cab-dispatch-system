import { Router } from "express";
import { findShortestPath } from "../controller/shortestPathCalc.js";

const distanceRoute = Router();

distanceRoute.post("/getDist", findShortestPath);


export default distanceRoute;
