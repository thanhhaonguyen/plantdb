import express from "express";
import * as speciesController from "../controllers/species.controller.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/", speciesController.getSpeciesList);
router.get("/:speciesId", speciesController.getSpeciesInfo);

router.get("/template/download", speciesController.getTemplate);
router.post("/import", upload.single("file"), speciesController.importExcel)

export default router;