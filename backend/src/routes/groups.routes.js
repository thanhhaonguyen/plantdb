import express from "express";
import * as groupsController from "../controllers/groups.controller.js";

const router = express.Router();

router.get("/", groupsController.getGroups); // GET /api/groups

export default router;