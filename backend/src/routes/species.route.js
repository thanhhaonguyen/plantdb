import express from "express";
import * as speciesController from "../controllers/species.controller.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/type/:TypeID", speciesController.getSpeciesList);
router.get("/:SpeciesID", speciesController.getSpeciesInfo);

router.get("/get-template/:TypeID", speciesController.getTemplate);
router.post("/import/:TypeID", upload.single("file"), speciesController.importExcel)

export default router;