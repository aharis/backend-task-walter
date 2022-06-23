import express from "express";
import { getLists } from "../../controllers/listControllers/list.controller.js";
import { createList, updateList, deleteList } from "../../controllers/listControllers/list.controller.js";
import verifyToken from "../../middlewere/verifyToken.js";

const route = express.Router();

route.post("/list", verifyToken, createList)
route.put("/update/:id", verifyToken,  updateList)
route.delete("/delete/:id",verifyToken, deleteList)
route.get("/stats", verifyToken, getLists)

export default route;