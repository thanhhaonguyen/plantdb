import express from "express";
import * as speciesController from "../controllers/species.controller.js";
import { upload } from "../middlewares/upload.js";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";

const router = express.Router();

router.get("/", speciesController.getSpeciesList);
router.get("/:speciesId", speciesController.getSpeciesInfo);

router.get("/template/download", verifyToken, speciesController.getTemplate);
router.post("/import", verifyToken, authorize({role: "customer"}), upload.single("file"), speciesController.importExcel)

export default router;