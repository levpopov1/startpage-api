import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  updateOne,
} from "../controllers/peopleController";

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", create);
router.post("/:id", updateOne);

export default router;
