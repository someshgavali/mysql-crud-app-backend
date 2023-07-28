import express from "express";
import {
  getAllUsers,
  addNewUser,
  updateUser,
  deleteUser,
} from "../controllers.js";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", addNewUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export { router };
