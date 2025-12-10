import express from "express";
import * as plantTypeController from "../controllers/plantType.controller.js";

const router = express.Router();

router.get("/", plantTypeController.getPlantTypeByGroupId);

export default router;