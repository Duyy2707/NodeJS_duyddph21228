import express from "express";
import { create, get, getAll, remove, update, put } from "../controllers/user.js";
const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", get);
router.post("/users", create);
router.delete("/users/:id", remove);
router.patch("/users/:id", update);
router.put("/users/:id", put);

export default router;