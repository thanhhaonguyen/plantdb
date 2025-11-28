import express from "express";
import * as speciesController from "../controllers/species.controller.js";

const router = express.Router();

// router.get("/");
router.get("/type/:TypeID", speciesController.getSpeciesList);
router.get("/:SpeciesID", speciesController.getSpeciesInfo);

export default router;