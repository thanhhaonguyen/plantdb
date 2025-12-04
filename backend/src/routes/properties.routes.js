import express from "express";
import * as propertiesController from "../controllers/properties.controller.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

router.get("/:TypeID", propertiesController.downloadTemplate);
router.post("/import/:TypeID", upload.single("file"), propertiesController.importExcel)

export default router